import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainController } from './train.controller';
import { Train } from './train.entity';
import { TrainService } from './train.service';

@Module({
  imports: [TypeOrmModule.forFeature([Train])],
  controllers: [TrainController],
  providers: [TrainService],
})
export class TrainModule {}
