import { Body, Controller, Post } from '@nestjs/common';
import { TrainCreateDTO } from './train.dto';
import { TrainService } from './train.service';
import { Train } from './train.entity';

@Controller('train')
export class TrainController {
  constructor(public readonly service: TrainService) {}
  @Post()
  async create(@Body() data: TrainCreateDTO): Promise<Train> {
    return await this.service.create(data);
  }
}
