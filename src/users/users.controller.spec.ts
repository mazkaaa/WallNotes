import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaModule } from "src/prisma.module";
import { RolesModule } from "src/roles/roles.module";
import { JwtModule } from "@nestjs/jwt";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [
        PrismaModule,
        RolesModule,
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: "60s",
          },
        }),
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
