import { gql } from "@apollo/client";


export const RECOMMENDATION = gql`
query {
  recommendation {
    id
    firstname
    lastname
    username
    profileImage
    status
  }
}
`