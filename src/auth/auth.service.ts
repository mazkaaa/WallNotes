import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(user: SignInDto) {
    if (!user) {
      throw new BadRequestException("User payload not found!");
    }
    const userIsExisted = await this.prismaService.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!userIsExisted) {
      return this.register(user);
    }
    const payload = {
      sub: userIsExisted.id,
      email: userIsExisted.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  async findUserByEmail(email: string) {
    const findResult = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findResult) {
      return findResult;
    }
    throw new NotFoundException("Email not found!");
  }

  async register(user: SignUpDto) {
    const defaultRole = await this.prismaService.role.findFirst({
      where: {
        name: "default",
      },
    });
    if (!defaultRole) {
      throw new NotFoundException("Default role not existed in database!");
    }
    try {
      const result = await this.prismaService.user.create({
        data: {
          email: user.email,
          roleId: defaultRole.id,
        },
      });
      const payload = {
        sub: result.id,
        email: result.email,
      };
      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: process.env.JWT_SECRET,
        }),
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
