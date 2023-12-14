import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule, RolesModule, UsersModule, NotesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
