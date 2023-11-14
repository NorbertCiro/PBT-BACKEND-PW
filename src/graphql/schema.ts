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

  type Query {
    getUsers: [User]
    getUserById(userId: String, sessionToken: String): User
    getTokenSession(userId: String): Session
    getInteractions: [Interaction]
    getCountries: [Country]
    getInteractionsByUser(userId: String): [Interaction]
  }

  type Mutation {
    createUser(username: String, password: String, role: String): User
    createInteraction(userId: String, country: String, timestamp: String): Interaction
    createCountry(name: String): Country
  }`;
