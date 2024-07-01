Table of Contents
Introduction
Getting Started
GraphQL Schema
Queries
Get All Users
Get User By ID
Get All Orders
Get Order By ID
Get All Products
Get Product By ID
Mutations
Create User
Create Order
Create Product
Create OrderProduct
Introduction
This API provides a backend for an eCommerce application, built with NestJS, TypeORM, GraphQL, and PostgreSQL. It includes functionality for managing users, products, orders, and the relationship between orders and products.

Getting Started
To get started with this API, you will need to:

Clone the repository.
Install dependencies using npm install.
Set up the PostgreSQL database and update the .env file with your database credentials.
Run the application using npm run start.
GraphQL Schema
The GraphQL schema defines the structure of the API, including types, queries, and mutations.

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
