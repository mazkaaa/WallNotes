import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from "@nestjs/swagger";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  app.use(helmet());

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  });

  const config = new DocumentBuilder()
    .setTitle("Wallnotes API")
    .setDescription("API for Wallnotes application")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("api", app, document, customOptions);

  await app.listen(3000);
}
bootstrap();
