import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  gender: string

  @IsDateString()
  birth_date: string

  @IsBoolean()
  disabled: boolean

  @IsNotEmpty()
  @IsString()
  roleId: string

}
