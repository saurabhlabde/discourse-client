import { gql } from "@apollo/client";



export const CREATE_MESSAGE = gql`
mutation CreateMessage($roomUsername:String!,$text:String,$media:String){
  createMessage(create: { roomUsername: $roomUsername, text: $text, media: $media }) {
    id
    text
    media
    status
    createdAtIso
    User {
      id
      username
      profileImage
    }
    Like {
      id
      userId
      createdAtIso
    }
  }
}
`

