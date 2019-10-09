import { gql } from 'apollo-server';

export const typeDef = gql`
  type Player {
      id: Int
      name: String
      fullName: String,
      number: Int
      headshot: String
      role: String
  }    
`;
