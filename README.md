  <div class="container">
    <h1>eCommerce API Documentation</h1>
    <h1>Introduction</h1>
    <p>This API provides a backend for an eCommerce application, built with NestJS, TypeORM, GraphQL, and PostgreSQL. It includes functionality for managing users, products, orders, and the relationship between orders and products.</p>

    <h2>Getting Started</h2>
    <p>To get started with this API, you will need to:</p>
    <ol>
      <li>Clone the repository.</li>
      <li>Install dependencies using <code>npm install</code>.</li>
      <li>Set up the PostgreSQL database and update the <code>.env</code> file with your database credentials.</li>
      <li>Run the application using <code>npm run start</code>.</li>
    </ol>

    <h2>GraphQL Schema</h2>
    <p>The GraphQL schema defines the structure of the API, including types, queries, and mutations.</p>

    <h2>Queries</h2>

    <h3>Get All Users</h3>
    <pre><code class="language-graphql">query {

users {
id
email
password
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

    <h3>Get User By ID</h3>
    <pre><code class="language-graphql">query {

user(id: 1) {
id
email
password
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

"data": {
"user": {
"id": 1,
"email": "test@example.com",
"password": "hashedpassword"
}
}
}</code></pre>

    <h3>Get All Orders</h3>
    <pre><code class="language-graphql">query {

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
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

    <h3>Get Order By ID</h3>
    <pre><code class="language-graphql">query {

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
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

    <h3>Get All Products</h3>
    <pre><code class="language-graphql">query {

products {
id
name
price
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

    <h3>Get Product By ID</h3>
    <pre><code class="language-graphql">query {

product(id: 1) {
id
name
price
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

"data": {
"product": {
"id": 1,
"name": "Product1",
"price": 50
}
}
}</code></pre>

    <h2>Mutations</h2>

    <h3>Create User</h3>
    <pre><code class="language-graphql">mutation {

createUser(createUserInput: {
email: "newuser@example.com",
password: "newpassword"
}) {
id
email
password
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

"data": {
"createUser": {
"id": 2,
"email": "newuser@example.com",
"password": "hashedpassword"
}
}
}</code></pre>

    <h3>Create Order</h3>
    <pre><code class="language-graphql">mutation {

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
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

    <h3>Create Product</h3>
    <pre><code class="language-graphql">mutation {

createProduct(createProductInput: {
name: "NewProduct",
price: 75
}) {
id
name
price
}
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

"data": {
"createProduct": {
"id": 2,
"name": "NewProduct",
"price": 75
}
}
}</code></pre>

    <h3>Create OrderProduct</h3>
    <pre><code class="language-graphql">mutation {

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
}</code></pre>

    <h4>Response:</h4>
    <pre><code class="language-json">{

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
}</code></pre>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

  </div>
</body>
</html>
