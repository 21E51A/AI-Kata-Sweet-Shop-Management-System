import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
