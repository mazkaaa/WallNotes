import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {

  /**
   * Email of the user
   * @example "admin@gmail.com"
   */
  @ApiProperty()
  @IsEmail()
  email: string;

  /**
   * Password of the user
   * @example "test321!"
   */
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
