import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) { }

  async signIn(email: string, password: string) {
    const findResult = await this.prismaService.user.findUnique({
      where: {
        email: email
      }
    });
    if (findResult) {
      const isMatch = await bcrypt.compare(password, findResult.password);
      if (isMatch) {
        const payload = {
          sub: findResult.id,
          email: findResult.email
        }
        return {
          access_token: await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET
          })
        }
      }
      throw new UnauthorizedException("Password is wrong!");
    }
    throw new NotFoundException("Email not found!");
  }

  async signUp({
    birth_date,
    confirmPassword,
    email,
    gender,
    name,
    password
  }: SignUpDto) {
    const findResult = await this.prismaService.user.findUnique({
      where: {
        email: email
      }
    });
    if (findResult) {
      throw new BadRequestException("Email already existed!");
    }
    if (password === confirmPassword) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const defaultRole = await this.prismaService.role.findFirst({
        where: {
          name: "default"
        }
      })
      if (!defaultRole) {
        throw new NotFoundException("Default role not existed in database!")
      }
      const result = await this.prismaService.user.create({
        data: {
          email: email,
          password: hashedPassword,
          birth_date: birth_date,
          gender: gender,
          name: name,
          roleId: defaultRole.id
        }
      })
      return result
    }
  }
}
