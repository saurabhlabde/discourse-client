import gql from "graphql-tag";


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