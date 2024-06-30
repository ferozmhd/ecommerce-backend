import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { CreateOrderProductInput } from './dto/create-order-product.input';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OrderProductsService {
  constructor(
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findOneById(id: number): Promise<OrderProduct> {
    return this.orderProductRepository.findOne(id, {
      relations: ['order', 'product'],
    });
  }

  async create(
    createOrderProductInput: CreateOrderProductInput,
  ): Promise<OrderProduct> {
    const order = await this.orderRepository.findOne(
      createOrderProductInput.orderId,
    );
    const product = await this.productRepository.findOne(
      createOrderProductInput.productId,
    );

    if (!order || !product) {
      throw new Error('Order or Product not found');
    }

    const newOrderProduct = this.orderProductRepository.create({
      order,
      product,
    });

    return this.orderProductRepository.save(newOrderProduct);
  }

  async remove(id: number): Promise<void> {
    await this.orderProductRepository.delete(id);
  }
}
