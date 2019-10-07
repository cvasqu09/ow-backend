import { gql } from 'apollo-server';

export const typeDef = gql`
  type Player {
      id: Int
      name: String
      game: String
      givenName: String
      nationality: String
  }    
`;
