import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  product: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  userId: number;
}
