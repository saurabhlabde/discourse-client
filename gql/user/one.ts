import gql from "graphql-tag";


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