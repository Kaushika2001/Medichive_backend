import { Test, TestingModule } from '@nestjs/testing';
import { LabService } from './lab.service';
import { PrismaService } from '../prisma/prisma.service'; // Import PrismaService
import { Complaint } from '@prisma/client';

describe('LabService', () => {
  let service: LabService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabService, PrismaService], // Include PrismaService
    }).compile();

    service = module.get<LabService>(LabService);
    prismaService = module.get<PrismaService>(PrismaService); // Get the instance
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createComplaint', () => {
    it('should create a complaint', async () => {
      const dto = { complain: 'Sample complaint' };
      const result: Complaint = { id: 1, complain: dto.complain };

      // Spy on the actual PrismaService instance
      jest.spyOn(prismaService.complaint, 'create').mockResolvedValueOnce(result);

      const response = await service.createComplaint(dto);
      expect(response).toEqual(result);
      expect(prismaService.complaint.create).toHaveBeenCalledWith({
        data: { complain: dto.complain },
      });
    });
  });
});