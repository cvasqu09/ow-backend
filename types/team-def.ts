import { gql } from 'apollo-server';
const axios = require('axios').default;

export const typeDef = gql`
  type Team {
      id: Int
      divisionId: String
      name: String
      location: String
      website: String
      placement: Int
  }
  
  type TeamDetail {
      id: Int
      divisionId: Int
      name: String
      location: String
      players: Player
      website: String
      placement: Int
      advantag: Int
  }
`;

export const resolvers = {
  Query: {
    async teams() {
      const response = await axios.get('https://api.overwatchleague.com/v2/teams');
      return response.data;
    }
  }
};
