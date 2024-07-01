import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProductsService } from './order-products.service';
import { Order } from '../orders/entities/order.entity';
import { OrderProduct } from './entities/order-product.entity';
import { Product } from '../products/entities/product.entity';

describe('OrderProductsService', () => {
  let service: OrderProductsService;
  let orderProductRepository: Repository<OrderProduct>;
  let orderRepository: Repository<Order>;
  let productRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderProductsService,
        {
          provide: getRepositoryToken(OrderProduct),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Order),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OrderProductsService>(OrderProductsService);
    orderProductRepository = module.get<Repository<OrderProduct>>(
      getRepositoryToken(OrderProduct),
    );
    orderRepository = module.get<Repository<Order>>(getRepositoryToken(Order));
    productRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more tests here
});
