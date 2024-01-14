import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;
}
