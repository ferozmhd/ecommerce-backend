import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { OrderProductsService } from './order-products.service';
import { OrderProductsResolver } from './order-products.resolver';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct, Order, Product])],
  providers: [OrderProductsService, OrderProductsResolver],
})
export class OrderProductsModule {}
