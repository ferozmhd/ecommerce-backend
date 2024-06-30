import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';

@ObjectType()
export class OrderProductModel {
  @Field(() => Int)
  id: number;

  @Field(() => OrderModel)
  order: OrderModel;

  @Field(() => ProductModel)
  product: ProductModel;
}
