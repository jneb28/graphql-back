const { buildSchema } = require('graphql');
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;

module.exports = buildSchema(`
  type Player {
    _id: ID!
    name: String!
    wins: Int!
    losses: Int!
    race: String!
  }

  type RootQuery {
    readPlayer(_id: ID!): Player!
  }

  type RootMutation {
    createPlayer(name: String!, wins: Int!, losses: Int!, race: String!): Player!
    updatePlayer(_id: ID!, playerInput: PlayerInputData): Player!
    deletePlayer(_id: ID!): Boolean
  }

  input PlayerInputData {
    name: String!
    wins: Int!
    losses: Int!
    race: String!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);