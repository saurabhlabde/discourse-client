import { gql } from "@apollo/react-hooks";


export const LIKE = gql`
mutation LikeMessage($id:Float!){
  likeMessage(like: { id: $id }) {
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