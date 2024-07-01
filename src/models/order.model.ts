import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { ProductModel } from './product.model';
@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field()
  product: ProductModel;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field(() => UserModel)
  user: UserModel;
}
