import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, BadRequestException } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { TransformInterceptor } from '../interceptors/transform.interceptor';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UseInterceptors(TransformInterceptor)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto)
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(id, updateRoleDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
