import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

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

export class TrainUpdateDTO {
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsNotEmpty()
  color: string;
  @IsOptional()
  @IsNotEmpty()
  company: string;
  @IsOptional()
  @IsBoolean()
  inService: boolean;
}
