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
graphql
Copy code
query {
users {
id
email
password
}
}
Response:

json
Copy code
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
Get User By ID
graphql
Copy code
query {
user(id: 1) {
id
email
password
}
}
Response:

json
Copy code
{
"data": {
"user": {
"id": 1,
"email": "test@example.com",
"password": "hashedpassword"
}
}
}
Get All Orders
graphql
Copy code
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
Response:

json
Copy code
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
Get Order By ID
graphql
Copy code
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
Response:

json
Copy code
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
Get All Products
graphql
Copy code
query {
products {
id
name
price
}
}
Response:

json
Copy code
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
Get Product By ID
graphql
Copy code
query {
product(id: 1) {
id
name
price
}
}
Response:

json
Copy code
{
"data": {
"product": {
"id": 1,
"name": "Product1",
"price": 50
}
}
}
Mutations
Create User
graphql
Copy code
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
Response:

json
Copy code
{
"data": {
"createUser": {
"id": 2,
"email": "newuser@example.com",
"password": "hashedpassword"
}
}
}
Create Order
graphql
Copy code
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
Response:

json
Copy code
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
Create Product
graphql
Copy code
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
Response:

json
Copy code
{
"data": {
"createProduct": {
"id": 2,
"name": "NewProduct",
"price": 75
}
}
}
Create OrderProduct
graphql
Copy code
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
Response:

json
Copy code
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
Conclusion
This documentation provides an overview of the available queries and mutations in your GraphQL API. You can use tools like GraphQL Playground to interact with the API and test different queries and mutations. Make sure to update the documentation as you add new features or modify existing ones.
