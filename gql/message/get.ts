import { gql } from "@apollo/client";


export const MESSAGE = gql`
query GetMessage($roomUsername:String!){
  getMessage(get:{roomUsername:$roomUsername}){
    id
    text
    media
    status
    createdAt
    User {
      id
      username
      profileImage
    }
  }
}
`