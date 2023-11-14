export const typeDefs = `#graphql
  type User {
    id: String
    name: String
    roleId: String
    interactions: [Interaction]
  }

  type UserById {
    id: String
    name: String
    roleId: String
    interactions: [Interaction]
  }

  type Session {
    sessionToken: String
  }


  type Interaction {
    id: String
    userId: String
    country: String
    timestamp: String
  }

  type Country {
    id: String
    name: String
  }
  #################
  scalar DateTime
  #################
  #Se implementa el tipo scalar para el Datetime  y proporcionar una lógica #personalizada para su serialización y deserialización. 
  #esto puede variar segun la implementación especifica de graphql
  #################
  type Query {
    getUsers: [User]
    getUserById(userId: String, sessionToken: String): User
    getUserByEmail(email: String!): User
    getTokenSession(userId: String): Session
    getInteractions: [Interaction]
    getCountries: [Country]
    getInteractionsByUser(userId: String): [Interaction]
    getUserMonitoringByTimeRange(email: String!, start: DateTime!, end: DateTime!): [UserMonitoring!]!
    getTopUsersByMonitoringCount(start: DateTime!, end: DateTime!): [UserMonitoring!]!
    getTopUsersByUsageType(type: String!, countryId: String!, start: DateTime!, end: DateTime!): [UserMonitoring!]!
  }

  type UserMonitoring {
  id: String!
  usage: Int!
  description: String!
  createdAt: DateTime!
  User: User!
  }

  type Mutation {
    createUser(username: String, password: String, role: String): User
    createInteraction(userId: String, country: String, timestamp: String): Interaction
    createCountry(name: String): Country
  }`;
