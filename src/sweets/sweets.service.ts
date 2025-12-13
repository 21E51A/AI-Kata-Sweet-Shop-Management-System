import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';

@Injectable()
export class SweetsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSweetDto) {
    return this.prisma.sweet.create({ data: dto });
  }

  findAll() {
    return this.prisma.sweet.findMany();
  }

  findOne(id: number) {
    return this.prisma.sweet.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateSweetDto) {
    return this.prisma.sweet.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.sweet.delete({ where: { id } });
  }
}
