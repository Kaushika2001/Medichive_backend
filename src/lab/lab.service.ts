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
   async getLabUserProfile(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        contactNo: true,
        gender: true,
        roles: true,
        address: true,
        nic: true,
        dob: true,
        labAdmin: {
          select: {
            id: true,
            userId: true,
          }
        },
      },
    });

    if (!user || user.roles !== 'LAB_ADMIN') {
      return { error: 'User is not a Lab Admin or does not exist.' };
    }

    return user;
   }  

  async getLabProfileByUserId(userId: string) {
    return this.prisma.lab.findFirst({
      where: { userId },
      select: {
        id: true,
        name: true,
        registrationNumber: true,
        contactNumber: true,
        website: true,
        address: true,
        description: true,
        certificate: true,
        userId: true,
      },
    });
  }
}
