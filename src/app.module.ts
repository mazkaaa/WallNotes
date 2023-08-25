import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [RolesModule, UsersModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
