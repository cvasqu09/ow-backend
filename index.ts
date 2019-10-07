import axios from 'axios';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDef as TeamDef } from './types/team-def';
import { typeDef as PlayerDef } from './types/player-def';


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
      const response = await axios.get('https://api.overwatchleague.com/v2/teams');
      return response.data;
    },

    async team(_, {id}) {
      console.log(id);
      const response = await axios.get(`https://api.overwatchleague.com/v2/teams/${id}`);
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
