# storeFrontBackend


## Required Technologies

Your application must make use of the following libraries:

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing


# open two terminals 

## In a terminal tab, create and run the database:

- run `su postgres` to connection for postgres
- run `psql postgres` for connection of sql
- run `CREATE USER users_names WITH PASSWORD 'password123';` for creating a new user
- `CREATE DATABASE store;` a database for store
- `CREATE DATABASE store_test;` a database for store_test
- `\c store` connect to database 
- `  GRANT ALL PRIVILEGES ON DATABASE store TO users_names;  `


##### In the 2nd terminal:

- install yarn `npm install yarn -g`
- install db-migrate on the machine for terminal commands `npm install db-migrate -g`
- check node version `node -v` - it needs to be 10 or 12 level
- IF node was not 10 or 12 level, run
    - `npm install -g n`
    - `n 10.18.0`
    - `PATH="$PATH"`
    - `node -v` to check that the version is 10 or 12
- install all project dependencies `yarn`
- to test that it is working, run `yarn watch` should show an app starting on `0.0.0.0:3000`



## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Prerequisite

PostgreSQL

crate database 1. store   2. store_test
install dotenv
Install all dependencies


## test 

npm run test

### Run server

npm run start


## API List


####  User API

- Create new user (POST)
  http://localhost:3000/users/

  Request body to be
  {
    first_name: string;
    last_name: string;
    user_name: string
    password: string;
  }

  Response is
  {
    id: number
    first_name: string;
    last_name: string;
    user_name: string
    password: string;
  }

- Authenticate (POST)
  http://localhost:3000/users/authenticate/

  Request body to be
  {
    "user_name": string,
    "password": (string)
  }

  Response
  {
    jwt_token or "invaild credentials"
  }

- Get all users (GET)
  http://localhost:3000/users/

  Request body: None

  Response is an array
  [
    {
       id: number
        first_name: string;
        last_name: string;
        user_name: string
    },other ...  ]

- Get single user by user_id (GET)
  http://localhost:3000/users/:id

  Request body: None

  Response
  {
        id: number
        first_name: string;
        last_name: string;
        user_name: string
  }



####  Product API

- Create new product (POST)

  
  http://localhost:3000/product/

   Request body is
  {
    name: (string),
    price: (integer),
  }
  

  Response is
  {
    id: string,
    name: string,
    price: string,
  }

- Get all products (GET)
  http://localhost:3000/product/
  ```

  Request body: None

  Response is an array
  [
    {
        id: string,
        name: string,
        price: string,
    }, other items if any..]

- Get single product by product_id (GET)

  http://localhost:3000/product/:id

  Request body: None

  Response is 
  {
        id: string,
        name: string,
        price: string,
  }

#### Order API

- Create new order (POST)
  http://localhost:3000/orders/
  
  Request body is
  {
        quantity: number,
        user_id: number,
        status: string,
  }

  Response is
  {
        quantity: number,
        user_id: number,
        status: string,
  }

- Get all orders (GET)
  http://localhost:3000/orders/

  Request body: None

  Response is an array
  [
    {
      quantity: number,
        user_id: number,
        status: string,
    },other items...  ]
  ```

- Get single order by order_id (GET)
  http://localhost:3000/orders/:id


  Request body: None

  Response is
  {
    quantity: number,
        user_id: number,
        status: string,
  }









