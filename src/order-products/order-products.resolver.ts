import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderProductsService } from './order-products.service';
import { OrderProductModel } from '../models/order-product.model';
import { CreateOrderProductInput } from './dto/create-order-product.input';

@Resolver(() => OrderProductModel)
export class OrderProductsResolver {
  constructor(private orderProductsService: OrderProductsService) {}

  @Query(() => [OrderProductModel], { name: 'orderProducts' })
  findAll() {
    return this.orderProductsService.findAll();
  }

  @Query(() => OrderProductModel, { name: 'orderProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductsService.findOne(id);
  }

  @Mutation(() => OrderProductModel)
  createOrderProduct(
    @Args('createOrderProductInput')
    createOrderProductInput: CreateOrderProductInput,
  ) {
    return this.orderProductsService.create(createOrderProductInput);
  }

  @Mutation(() => Boolean)
  removeOrderProduct(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductsService.remove(id).then(() => true);
  }
}
