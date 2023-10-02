import { IsBoolean, IsDateString, IsEmail, IsEnum, IsIn, IsNotEmpty, IsString } from "class-validator";

enum Gender {
  "male" = "male",
  "female" = "female"
}
export class CreateUserDto {
  /**
   * User email
   * @example "johndoe@gmail.com"
   */
  @IsEmail()
  email: string;

  /**
   * User name
   * @example "John Doe"
   */
  @IsString()
  name: string;

  /**
   * User password
   * @example "test321!"
   */
  @IsNotEmpty()
  @IsString()
  password: string;

  /**
   * Gender
   * @example 'male'
   */
  @IsNotEmpty()
  @IsString()
  @IsEnum(Gender)
  gender: Gender;

  @IsDateString()
  birth_date: string;

  @IsBoolean()
  disabled: boolean;

  @IsNotEmpty()
  @IsString()
  roleId: string;
}
