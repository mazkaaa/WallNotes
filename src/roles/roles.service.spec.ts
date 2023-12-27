import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { PrismaService } from '../../src/prisma.service';
import { prismaMock } from '../../src/singleton';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma.module';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService],
      imports: [PrismaModule]
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it.todo("create role");
  it.todo('returns roles')
  it.todo('update role')
  it.todo('find role')
  it.todo('delete role')
});
