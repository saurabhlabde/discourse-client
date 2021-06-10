import gql from "graphql-tag";


export const CREATE_MESSAGE = gql`
mutation CreateMessage($roomUsername:String!,$text:String!,$media:String!){
  createMessage(create: { roomUsername: $roomUsername, text: $text, media: $media }) {
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

