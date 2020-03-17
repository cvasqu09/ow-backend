import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private apollo: Apollo) { }

  getTeams() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          teams {
            name,
            id,
            players {
              name,
              fullName
            }
          }
        }
      `
    }).valueChanges
  }
}
