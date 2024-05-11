import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordLabelDto } from './create-record-label.dto';

export class UpdateRecordLabelDto extends PartialType(CreateRecordLabelDto) {}
