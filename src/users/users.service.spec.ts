import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma.module";
import { RolesModule } from "src/roles/roles.module";
import { PrismaService } from "src/prisma.service";
import { RolesService } from "src/roles/roles.service";

describe("UsersService", () => {
  let service: UsersService;
  let roleService: RolesService;
  let prismaService: PrismaService;
  const fakeDate = new Date("2021-08-16T14:00:00.000Z");

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, RolesService],
      imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: "60s",
          },
        }),
        PrismaModule,
        RolesModule,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    roleService = module.get<RolesService>(RolesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it.todo("create user");
  it.todo("edit user");
  it.todo("delete user");
});
