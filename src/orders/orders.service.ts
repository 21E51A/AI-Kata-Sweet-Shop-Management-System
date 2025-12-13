import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  // CREATE ORDER
  async create(dto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        customer: dto.customer,
        items: {
          create: dto.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });
  }

  // GET ALL ORDERS
  async findAll() {
    return this.prisma.order.findMany({
      include: { items: true },
    });
  }

  // GET ONE ORDER
  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
  }
}
