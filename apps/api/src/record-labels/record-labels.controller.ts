import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { RecordLabelService } from './record-labels.service'
import { CreateRecordLabelDto } from './dto/create-record-label.dto'
import { UpdateRecordLabelDto } from './dto/update-record-label.dto'

@Controller('record-labels')
export class RecordLabelsController {
  constructor(private readonly recordLabelService: RecordLabelService) {}

  @Post()
  create(@Body() createRecordLabelDto: CreateRecordLabelDto) {
    return this.recordLabelService.create(createRecordLabelDto)
  }

  @Get()
  findAll() {
    return this.recordLabelService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordLabelService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecordLabelDto: UpdateRecordLabelDto,
  ) {
    return this.recordLabelService.update(+id, updateRecordLabelDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordLabelService.remove(+id)
  }
}
