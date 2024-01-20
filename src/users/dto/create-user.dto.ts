import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";

export class CreateUserDto {
  /**
   * User email
   * @example "johndoe@gmail.com"
   */
  @IsEmail()
  email: string;

  /**
   * Gender
   * @example 'male'
   */
  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsDateString()
  birth_date: string;

  @IsBoolean()
  disabled: boolean;

  @IsNotEmpty()
  @IsString()
  roleId: string;
}
