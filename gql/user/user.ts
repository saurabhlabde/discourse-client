import { gql } from "@apollo/client";



export const USER = gql`
query {
  getUser {
    id
    firstname
    lastname
    username
    profileImage
    status
  }
}
`