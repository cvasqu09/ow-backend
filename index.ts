import axios from 'axios';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDef as TeamDef } from './types/team-def';
import { typeDef as PlayerDef } from './types/player-def';

import { constants } from './constants';

axios.interceptors.response.use((res) => {
  return res.data;
});

const { ApolloServer, gql } = require('apollo-server');

export const rootDef = gql`  
    type Query {
        teams: [Team]
        team(id: Int): TeamDetail
    }
`;

export const typeDefs = [rootDef, TeamDef, PlayerDef];

export const resolvers = {
  Query: {
    async teams() {
      const response = await axios.get(`${constants.URL}/teams`);
      return response.data;
    },

    async team(_, {id}) {
      const response = await axios.get(`${constants.URL}/teams/${id}`);
      console.log(response.data);
      return response.data;
    }
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({schema});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
