import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: '60s'
    }
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [AuthService]
})
export class AuthModule {}
