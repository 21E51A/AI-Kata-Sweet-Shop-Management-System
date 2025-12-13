import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';

@Controller('api/sweets')
export class SweetsController {
  constructor(private readonly sweetsService: SweetsService) {}

  @Post()
  create(@Body() dto: CreateSweetDto) {
    return this.sweetsService.create(dto);
  }

  @Get()
  findAll() {
    return this.sweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sweetsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSweetDto) {
    return this.sweetsService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sweetsService.remove(Number(id));
  }
}
