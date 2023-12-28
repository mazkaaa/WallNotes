import { Test, TestingModule } from "@nestjs/testing";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";
import { JwtModule } from "@nestjs/jwt";

describe("NotesController", () => {
  let controller: NotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
      imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: "60s",
          },
        }),
      ],
    }).compile();

    controller = module.get<NotesController>(NotesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
