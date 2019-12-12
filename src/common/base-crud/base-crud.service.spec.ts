import { Test, TestingModule } from '@nestjs/testing';
import { BaseCrudService } from './base-crud.service';

describe('BaseCrudService', () => {
  let service: BaseCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseCrudService],
    }).compile();

    service = module.get<BaseCrudService>(BaseCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
