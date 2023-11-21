import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

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
      throw new HttpException('Password is wrong!', HttpStatus.UNAUTHORIZED)
    }
    throw new HttpException('Email not found!', HttpStatus.NOT_FOUND)

  }
}
