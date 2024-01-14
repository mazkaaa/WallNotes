import { Test, TestingModule } from "@nestjs/testing";
import { RolesService } from "./roles.service";
import { PrismaModule } from "src/prisma.module";
import { PrismaService } from "src/prisma.service";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { BadRequestException, NotFoundException } from "@nestjs/common";

describe("RolesService", () => {
  let service: RolesService;
  let prismaService: PrismaService;
  const fakeDate = new Date("2021-08-16T14:00:00.000Z");

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService, PrismaService],
    }).compile();

    service = module.get<RolesService>(RolesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("create role", async () => {
    // Arrange
    const createRoleDto = {
      name: "admin",
      isAdmin: true,
    };

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce(null);

    jest.spyOn(prismaService.role, "create").mockResolvedValueOnce({
      /* Your mocked role data here */
      id: "123",
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    // Act
    const result = await service.create(createRoleDto);

    // Assert
    expect(result).toEqual({
      /* Your expected result here */
      id: "123",
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });
  });

  it("should throw BadRequestException when role name already existed", async () => {
    // Arrange
    const createRoleDto = {
      name: "admin",
      isAdmin: true,
    };

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce({
      /* Your mocked role data here */
      id: "123",
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    // Act & Assert
    await expect(service.create(createRoleDto)).rejects.toThrowError(
      BadRequestException
    );
  });

  it("returns roles", async () => {
    // Arrange
    const roles = [
      {
        id: "1",
        name: "admin",
        isAdmin: true,
        createdAt: fakeDate,
        updatedAt: fakeDate,
      },
      {
        id: "2",
        name: "user",
        isAdmin: false,
        createdAt: fakeDate,
        updatedAt: fakeDate,
      },
    ];

    jest.spyOn(prismaService.role, "findMany").mockResolvedValueOnce(roles);

    // Act
    const result = await service.findAll(100, 0);

    // Assert
    expect(result).toEqual(roles);
  });

  it("update role", async () => {
    // Arrange
    const roleId = "123";
    const updateRoleDto: UpdateRoleDto = {
      name: "user",
      isAdmin: false,
    };

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce({
      /* Your mocked role data here */
      id: roleId,
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    jest.spyOn(prismaService.role, "update").mockResolvedValueOnce({
      /* Your mocked updated role data here */
      id: roleId,
      name: "user",
      isAdmin: false,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    // Act
    const result = await service.update(roleId, updateRoleDto);

    // Assert
    expect(result).toEqual({
      /* Your expected result here */
      id: roleId,
      name: "user",
      isAdmin: false,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });
  });

  it("should throw NotFoundException when role not found", async () => {
    // Arrange
    const roleId = "123";
    const updateRoleDto: UpdateRoleDto = {
      name: "New Role Name",
      isAdmin: true,
    };

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce(null);

    // Act & Assert
    await expect(service.update(roleId, updateRoleDto)).rejects.toThrowError(
      NotFoundException
    );
  });

  it("find role by id", async () => {
    // Arrange
    const roleId = "123";
    const role = {
      id: roleId,
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    };

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce(role);

    // Act
    const result = await service.findById(roleId);

    // Assert
    expect(result).toEqual(role);
  });
  it("delete role by id", async () => {
    // Arrange
    const roleId = "123";

    jest.spyOn(prismaService.role, "findUnique").mockResolvedValueOnce({
      /* Your mocked role data here */
      id: roleId,
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    jest.spyOn(prismaService.role, "delete").mockResolvedValueOnce({
      /* Your mocked deleted role data here */
      id: roleId,
      name: "admin",
      isAdmin: true,
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    // Act
    await service.remove(roleId);

    // Assert
    expect(prismaService.role.findUnique).toHaveBeenCalledWith({
      where: { id: roleId },
    });

    expect(prismaService.role.delete).toHaveBeenCalledWith({
      where: { id: roleId },
    });
  });
});
