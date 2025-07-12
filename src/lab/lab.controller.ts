
// src/lab/lab.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { LabService } from './lab.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Controller('lab')
export class LabController {
  constructor(private readonly labService: LabService) {}

  @Post('complaint')
  createComplaint(@Body() dto: CreateComplaintDto) {
    return this.labService.createComplaint(dto);
  }
}