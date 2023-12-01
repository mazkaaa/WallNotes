import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class SignUpDto {
  /**
   * Email of the user
   * @example "admin@gmail.com"
   */
  @ApiProperty()
  @IsEmail()
  email: string;

  /**
   * First name of the user
   * @example "John Doe"
   */
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  /**
   * Password of the user
   * @example "test321!"
   */
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  /**
   * Confirm password of the user
   * @example "test321!"
   */
  @ApiProperty()
  @IsNotEmpty()
  confirmPassword: string;

  /**
   * Gender of the user
   * @example "male"
   */
  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  /**
   * Birth date of the user using iso format
   * @example "2023-08-27T05:22:20.504Z"
   *
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birth_date: string;
}
