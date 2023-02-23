// import { gql } from "apollo-server-express";
const { gql } = require("apollo-server-express");
export const ServiceTypeDefs = gql`
  type Product {
    id: ID
    category: String
    productName: String
    price: Int!
    colors: [String!]
  }

  type Query {
    getProductsList: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    updateProduct(
      id: ID!
      category: String!
      productName: String!
      price: Int!
      colors: [String!]
      imgPath: String!
    ): Product
    addProduct(
      category: String
      productName: String!
      price: Int
      colors: [String!]
      imgPath: String
    ): Product
    deleteProduct(id: ID!): Boolean!
  }
`;
