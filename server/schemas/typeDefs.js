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
}

type Category {
    _id: ID
    name: String 
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Checkout {
    session: ID
<<<<<<< HEAD
}
=======
  }
>>>>>>> fd11380288e9a5a7d3b8f146626ce0bbc7ded982

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
<<<<<<< HEAD
    order (_id: ID!): Order
=======
    order(_id: ID!): Order
>>>>>>> fd11380288e9a5a7d3b8f146626ce0bbc7ded982
    checkout(session: ID!): Checkout
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth 
}
`;

module.exports = typeDefs;