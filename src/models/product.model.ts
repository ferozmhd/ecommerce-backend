import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { OrderModel } from './order.model';

@ObjectType()
export class ProductModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  createdAt: Date;
}
