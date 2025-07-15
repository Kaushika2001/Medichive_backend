import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateLabReportDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  description: string;

  @IsString()
  name: string;
} 