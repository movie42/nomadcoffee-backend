import { gql } from "apollo-server";
export default gql`
  type Coffee {
    id: Int!
    name: String!
    production: Int!
    country: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    coffee: [Coffee]
    cafe(id: Int!): Coffee
  }
  type Mutation {
    createCoffee(name: String!, production: Int!, country: String): Coffee
    deleteCoffee(id: Int!): Coffee
    updateCoffee(id: Int!, production: Int!): Coffee
  }
`;
