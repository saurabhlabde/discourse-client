import { gql } from "@apollo/client";



export const USER_ONE = gql`
query GetOneUser($username:String!){
  getOneUser(user: { username: $username }) {
    id
    firstname
    lastname
    username
    profileImage
    status
  }
}
`