import { gql } from "@apollo/react-hooks";


export const DELETE = gql`
mutation DeleteMessage($id:Float!){
  deleteMessage(delete:{id:$id}){
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