import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne({ where: { id }, relations: ['user'] });
  }

  create(createOrderInput: CreateOrderInput): Promise<Order> {
    const newOrder = this.orderRepository.create(createOrderInput);
    return this.orderRepository.save(newOrder);
  }

  async update(id: number, updateOrderInput: UpdateOrderInput): Promise<Order> {
    await this.orderRepository.update(id, updateOrderInput);
    return this.orderRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
