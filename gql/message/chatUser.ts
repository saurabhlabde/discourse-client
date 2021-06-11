import { gql } from "@apollo/client";


export const CHAT_USER = gql`
query{
  chatUsers{
    User{
      id
      firstname
      lastname
      username
      profileImage
    }
    lastMessage{
      id
      text
      media
      status
      createdAt
    }
  }
}
`