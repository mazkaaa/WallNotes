import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma.service";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findEmail = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    const findRole = await this.roleService.findById(createUserDto.roleId);
    if (findEmail) {
      throw new BadRequestException("Email already existed!");
    }
    if (!findRole) {
      throw new BadRequestException("Assigned role not existed!");
    }
    const createResult = await this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        birth_date: createUserDto.birth_date,
        gender: createUserDto.gender,
        roleId: createUserDto.roleId,
      },
    });
    return createResult;
  }

  async findAll() {
    const result = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        birth_date: true,
        gender: true,
        roleId: true,
        role: true,
        notes: true,
        disabled: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return result;
  }

  async findOne(id: string) {
    const result = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        birth_date: true,
        gender: true,
        roleId: true,
        role: true,
        notes: true,
        disabled: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result) {
      return result;
    }
    throw new NotFoundException("User not found!");
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findId = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
    if (findId) {
      return this.prismaService.user.update({
        data: {
          ...updateUserDto,
        },
        where: {
          id: id,
        },
      });
    }
    throw new NotFoundException("User with this id not existed!");
  }

  async remove(id: string) {
    const findId = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
    if (findId) {
      return this.prismaService.user.delete({
        where: {
          id: id,
        },
      });
    }
    return new NotFoundException("User with this id not existed!");
  }
}
