import { gql } from 'apollo-server';

export const typeDef = gql`
  type Records {
      matchWin: Int,
      matchLoss: Int,
      matchDraw: Int,
      matchBye: Int,
      gameWin: Int,
      gameLoss: Int,
      gameTie: Int,
      gamePointsFor: Int,
      gamePointsAgainst: Int
  }
`;
