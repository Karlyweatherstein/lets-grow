const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
}

type Product {
    _id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    category: Category
    image: String
}

type Category {
    _id: ID
    name: String
    trainer: [Trainer]
}

type Trainer {
    _id: ID
    name: String
    description: String
    image: String
    # products: [Product]
    # category: [Category]
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Checkout {
    session: ID
  }

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(session: ID!): Checkout
    trainers: [Trainer]
    trainer(_id: ID!): Trainer
}

type Mutation {
    addUser(email: String!, username: String! ,password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(email: String, username: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(username: String!, password: String!): Auth 
}
`;

module.exports = typeDefs;