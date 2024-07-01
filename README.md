# eCommerce API Documentation

## Introduction

This API provides a backend for an eCommerce application, built with NestJS, TypeORM, GraphQL, and PostgreSQL. It includes functionality for managing users, products, orders, and the relationship between orders and products.

## Getting Started

To get started with this API, you will need to:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the PostgreSQL database and update the `.env` file with your database credentials.
4. Run the application using `npm run start`.

## GraphQL Schema

The GraphQL schema defines the structure of the API, including types, queries, and mutations.

## Queries

Queries
Get All Users

<pre>
query {
  users {
    id
    email
    password
  }
}
</pre>

response

<pre>
{
  "data": {
    "users": [
      {
        "id": 1,
        "email": "test@example.com",
        "password": "hashedpassword"
      }
      // More users...
    ]
  }
}
</pre>

Get User By ID

<pre>
query {
  user(id: 1) {
    id
    email
    password
  }
}

</pre>

Response

<pre>
{
  "data": {
    "user": {
      "id": 1,
      "email": "test@example.com",
      "password": "hashedpassword"
    }
  }
}

</pre>

Get All Orders

<pre>
query {
  orders {
    id
    total
    product {
      id
      name
    }
    user {
      id
      email
    }
  }
}
</pre>

Response:

<pre>
{
  "data": {
    "orders": [
      {
        "id": 1,
        "total": 100,
        "product": {
          "id": 1,
          "name": "Product1"
        },
        "user": {
          "id": 1,
          "email": "test@example.com"
        }
      }
      // More orders...
    ]
  }
}

</pre>

Get Order By ID

<pre>
query {
  order(id: 1) {
    id
    total
    product {
      id
      name
    }
    user {
      id
      email
    }
  }
}

</pre>

response

<pre>
{
  "data": {
    "order": {
      "id": 1,
      "total": 100,
      "product": {
        "id": 1,
        "name": "Product1"
      },
      "user": {
        "id": 1,
        "email": "test@example.com"
      }
    }
  }
}

</pre>

Get All Products

<pre>
query {
  products {
    id
    name
    price
  }
}

</pre>

response:

<pre>
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Product1",
        "price": 50
      }
      // More products...
    ]
  }
}

</pre>

Get Product By ID

<pre>
query {
  product(id: 1) {
    id
    name
    price
  }
}

</pre>

Response:

<pre>
{
  "data": {
    "product": {
      "id": 1,
      "name": "Product1",
      "price": 50
    }
  }
}

</pre>

Mutations
Create User

<pre>
mutation {
  createUser(createUserInput: {
    email: "newuser@example.com",
    password: "newpassword"
  }) {
    id
    email
    password
  }
}

</pre>

Response:

<pre>
{
  "data": {
    "createUser": {
      "id": 2,
      "email": "newuser@example.com",
      "password": "hashedpassword"
    }
  }
}
</pre>

Create Order

<pre>
mutation {
  createOrder(createOrderInput: {
    userId: 1,
    total: 200,
    productId: 1
  }) {
    id
    total
    product {
      id
      name
    }
    user {
      id
      email
    }
  }
}

</pre>

Response

<pre>
{
  "data": {
    "createOrder": {
      "id": 2,
      "total": 200,
      "product": {
        "id": 1,
        "name": "Product1"
      },
      "user": {
        "id": 1,
        "email": "test@example.com"
      }
    }
  }
}
</pre>

Create Product

<pre>
mutation {
  createProduct(createProductInput: {
    name: "NewProduct",
    price: 75
  }) {
    id
    name
    price
  }
}
</pre>

Response:

<pre>{
  "data": {
    "createProduct": {
      "id": 2,
      "name": "NewProduct",
      "price": 75
    }
  }
}
</pre>

Create OrderProduct

<pre>
mutation {
  createOrderProduct(createOrderProductInput: {
    orderId: 1,
    productId: 2
  }) {
    id
    order {
      id
      total
    }
    product {
      id
      name
    }
  }
}
</pre>

Response;

<pre>
{
  "data": {
    "createOrderProduct": {
      "id": 1,
      "order": {
        "id": 1,
        "total": 100
      },
      "product": {
        "id": 2,
        "name": "NewProduct"
      }
    }
  }
}
</pre>
