import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService, private readonly roleService: RolesService) {}
  
  async create(createUserDto: CreateUserDto) {
    const findEmail = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email
      }
    })
    const findRole = await this.roleService.findById(createUserDto.roleId)
    if (findEmail) {
      throw new BadRequestException('Email already existed!')
    }
    if (!findRole) {
      throw new BadRequestException('Assigned role not existed!')
    }
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10)
    const createResult = await this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        name: createUserDto.name,
        birth_date: createUserDto.birth_date,
        gender: createUserDto.gender,
        roleId: createUserDto.roleId
      },
    })
    return createResult

  }

  async findAll() {
    const results = await this.prismaService.user.findMany({

    })
    return {

    }
  }

  async findOne(email: string) {
    const result = await this.prismaService.user.findUnique({
      where: {
        email: email
      }
    })
    if (result) {
      return result
    }
    throw new NotFoundException('Email not found!')
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findId = await this.prismaService.user.findUnique({
      where: {
        id: id
      }
    })
    if (findId) {
      return this.prismaService.user.update({
        data: {
          ...updateUserDto
        },
        where: {
          id: id
        }
      })
    }
    throw new NotFoundException('User with this id not existed!')
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
