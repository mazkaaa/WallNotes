import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum orderByEnum {
  asc = "asc",
  desc = "desc"
}
export class FindAllRoleDto {
  @ApiProperty({
    required: true,
  })
  take: number;

  @ApiProperty({
    required: true
  })
  skip: number

  @ApiProperty({
    required: false
  })
  searchString: string

  @ApiProperty({
    required: false,
    enum: orderByEnum
  })
  orderBy: orderByEnum
}
