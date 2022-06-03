import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { TrainCreateDTO, TrainUpdateDTO } from './train.dto';
import { TrainService } from './train.service';
import { Train } from './train.entity';

import { NotFoundExceptionFilter } from './entitynotfound.filter';

@Controller('trains')
@UseFilters(NotFoundExceptionFilter)
export class TrainController {
  constructor(public readonly service: TrainService) {}
  @Post()
  async create(@Body() data: TrainCreateDTO): Promise<Train> {
    return await this.service.create(data);
  }

  @Get()
  async index(): Promise<Array<Train>> {
    return await this.service.getAll();
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() data: TrainUpdateDTO,
  ): Promise<Train> {
    return await this.service.updateById(id, data);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Train> {
    return await this.service.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
