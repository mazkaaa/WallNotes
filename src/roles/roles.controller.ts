import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  BadRequestException,
  UseGuards,
  Query,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";
import { FindAllRoleDto } from "./dto/findAll-role.dto";

@Controller("roles")
@ApiBearerAuth()
@ApiTags("Roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  findAll(@Query() findAllDto: FindAllRoleDto) {
    return this.rolesService.findAll(
      findAllDto.take,
      findAllDto.skip,
      findAllDto.searchString,
      findAllDto.orderBy
    );
  }

  @Get(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  findById(@Param("id") id: string) {
    return this.rolesService.findById(id);
  }

  @Patch(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(id, updateRoleDto);
  }

  @Delete(":id")
  @UseInterceptors(TransformInterceptor)
  @UseGuards(AuthGuard)
  remove(@Param("id") id: string) {
    return this.rolesService.remove(id);
  }
}
