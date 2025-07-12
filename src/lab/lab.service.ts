import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { Complaint } from '@prisma/client';

@Injectable()
export class LabService {
  constructor(private prisma: PrismaService) {}

  async createComplaint(dto: CreateComplaintDto): Promise<Complaint> {
    return this.prisma.complaint.create({
      data: {
        complain: dto.complain,
      },
    });
  }
}