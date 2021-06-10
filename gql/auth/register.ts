import gql from "graphql-tag";



export const REGISTER = gql`
mutation CreateUser($firstname:String!,$lastname:String!,$username:String!,$email:String!,$status:String!,$password:String!){
  createUser(
    create: {
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      status: $status
      password: $password
    }
  ) {
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