import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@Controller("notes")
@ApiTags("Notes")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.notesService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.notesService.remove(+id);
  }
}
