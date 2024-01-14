import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Query,
} from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    const findResult = await this.prismaService.role.findUnique({
      where: {
        name: createRoleDto.name,
      },
    });
    if (findResult) {
      throw new BadRequestException("This role name already existed!");
    }
    const createResult = await this.prismaService.role.create({
      data: {
        name: createRoleDto.name,
        isAdmin: createRoleDto.isAdmin,
      },
    });
    return createResult;
  }

  async findAll(
    @Query("take") take: number,
    @Query("skip") skip: number,
    @Query("searchString") searchString?: string,
    @Query("orderBy") orderBy?: "asc" | "desc"
  ) {
    const or = searchString
      ? {
          OR: [{ name: { contains: searchString } }],
        }
      : {};
    const findResults = await this.prismaService.role.findMany({
      where: {
        ...or,
      },
      include: {
        users: false,
      },
      take: parseInt(take.toString()),
      skip: parseInt(skip.toString()),
      orderBy: {
        name: orderBy,
      },
    });
    return findResults;
  }

  async findById(id: string) {
    const result = await this.prismaService.role.findUnique({
      where: {
        id: id,
      },

      // dont include user's password
      include: {
        users: {
          select: {
            id: true,
            email: true,
            birth_date: true,
            createdAt: true,
            disabled: true,
            gender: true,
            updatedAt: true,
          },
        },
      },
    });
    if (result) {
      return result;
    }
    throw new NotFoundException("Role with this id not existed!");
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const findResult = await this.prismaService.role.findUnique({
      where: {
        id: id,
      },
    });
    if (findResult) {
      const updateResult = await this.prismaService.role.update({
        where: {
          id: id,
        },
        data: {
          name: updateRoleDto.name,
          isAdmin: updateRoleDto.isAdmin,
        },
      });
      return updateResult;
    }
    throw new NotFoundException("Role with this id not existed!");
  }

  async remove(id: string) {
    const findResult = await this.prismaService.role.findUnique({
      where: {
        id: id,
      },
    });
    if (findResult) {
      const deleteResult = this.prismaService.role.delete({
        where: {
          id: id,
        },
      });
      return deleteResult;
    }
    throw new NotFoundException("Role with this id not existed!");
  }
}
