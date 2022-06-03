import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Train } from './train/train.entity';
import { TrainModule } from './train/train.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'latvia_nest',
      entities: [Train],
      synchronize: true,
    }),
    TrainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
