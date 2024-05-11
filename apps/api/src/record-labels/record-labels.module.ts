import { Module } from '@nestjs/common'
import { RecordLabelService } from './record-labels.service'
import { RecordLabelsController } from './record-labels.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecordLabel } from './entities/record-label.entity'

@Module({
  imports: [TypeOrmModule.forFeature([RecordLabel])],
  controllers: [RecordLabelsController],
  providers: [RecordLabelService],
})
export class RecordLabelsModule {}
