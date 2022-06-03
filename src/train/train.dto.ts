import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TrainCreateDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsBoolean()
  inService: boolean;
}
