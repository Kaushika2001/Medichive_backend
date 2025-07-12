
import { IsString } from 'class-validator';

export class CreateComplaintDto {
  @IsString()
  complain: string;
}