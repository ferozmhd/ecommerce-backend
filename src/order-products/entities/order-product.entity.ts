import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderProducts, { eager: true })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderProducts, {
    eager: true,
    nullable: false,
  })
  product: Product;
}
