import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field()
  product: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  price: number;

  @Field()
  createdAt: Date;

  @Field(() => UserModel)
  user: UserModel;
}
