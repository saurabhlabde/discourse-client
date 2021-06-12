import gql from "graphql-tag";


export const MESSAGE_SUB = gql`
subscription GetMessageSub($username:String!,$roomUsername:String!){
  getMessageSub(get:{username:$username,roomUsername:$roomUsername}){
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
  }
}
`