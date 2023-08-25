import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../../src/prisma.service';
import { Context, MockContext, createMockContext } from '../context';
import { prismaMock } from '../../src/singleton';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService, PrismaService],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('returns roles', async () => {
    const testRoles = []
    prismaMock.role.createMany.mockResolvedValue({
      count: 10
    })
    prismaMock.role.findMany.mockResolvedValueOnce(testRoles)
    await expect(service.findAll()).resolves.toStrictEqual(testRoles)
  })
  it.todo('create role')
  it.todo('update role')
  it.todo('find role')
  it.todo('delete role')
});
