import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { TrainCreateDTO, TrainUpdateDTO } from './train.dto';
import { Train } from './train.entity';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private repository: Repository<Train>,
  ) {}
  async create(data: TrainCreateDTO): Promise<Train> {
    let train = plainToClass(Train, data);
    train = await this.repository.save(train);
    return train;
  }

  async getAll(): Promise<Array<Train>> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Train> {
    return await this.repository.findOneOrFail({ where: { id } });
  }
  async updateById(id: number, data: TrainUpdateDTO) {
    const train = await this.findById(id);
    const updatedTrain = { ...train, ...data };
    return await this.repository.save(train);
  }

  async delete(id: number) {
    let train = await this.findById(id);
    this.repository.delete(train);
  }
}
