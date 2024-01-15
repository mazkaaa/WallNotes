import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { TransformInterceptor } from "src/interceptors/transform.interceptor";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("users")
@ApiBearerAuth()
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create user data
   * @param createUserDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Create user data",
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Get users data",
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Get user data by id",
  })
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Update user data by id",
  })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Remove user data from database
   * @param id user ID
   * @returns
   */
  @Delete(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Delete user data by id",
  })
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
