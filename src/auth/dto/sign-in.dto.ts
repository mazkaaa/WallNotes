import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}
