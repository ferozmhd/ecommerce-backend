import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderProductInput {
  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  productId: number;
}
