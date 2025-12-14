import {
  Controller,
  Post,
  Get,
  Body,
  Param,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // ✅ CREATE ORDER
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  // ✅ GET ALL ORDERS
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  // ✅ GET ORDER BY ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(Number(id));
  }
}
