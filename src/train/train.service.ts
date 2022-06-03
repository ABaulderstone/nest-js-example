import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { TrainCreateDTO } from './train.dto';
import { Train } from './train.entity';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private repository: Repository<Train>,
  ) {}
  async create(data: TrainCreateDTO): Promise<Train> {
    const train = plainToClass(Train, data);
    this.repository.save(train);
    return train;
  }
}
