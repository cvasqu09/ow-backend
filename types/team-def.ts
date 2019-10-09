import { gql } from 'apollo-server';
import axios from 'axios';
import { constants } from '../constants';

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
      players: [Player]
      website: String
      placement: Int
      advantag: Int
  }
`;
