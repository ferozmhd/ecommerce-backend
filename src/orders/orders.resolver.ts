import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderModel } from 'src/models/order.model';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver(() => OrderModel)
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Query(() => [OrderModel], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => OrderModel, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => OrderModel)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Mutation(() => OrderModel)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Boolean)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id).then(() => true);
  }
}
