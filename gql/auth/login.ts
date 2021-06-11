import { gql } from "@apollo/client";



export const LOGIN = gql`
mutation Login($username:String!,$password:String!){
  login(login: { username: $username, password: $password }) {
    id
    firstname
    lastname
    username
    profileImage
    Tokens {
      token
    }
  }
}
`