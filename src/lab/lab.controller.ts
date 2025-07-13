
// src/lab/lab.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LabService } from './lab.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Controller('lab')
export class LabController {
  constructor(private readonly labService: LabService) {}

  @Post('complaint')
  createComplaint(@Body() dto: CreateComplaintDto) {
    return this.labService.createComplaint(dto);
  }
  //get lab user profile by id
  @Get('profile/:id')
  getLabUserProfile(@Param('id') id: string) {
    return this.labService.getLabUserProfile(id);
  }
}
