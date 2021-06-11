import { gql } from "@apollo/client";


export const SEARCH = gql`
query Search($query:String!){
  search(search:{query:$query}){
    id
    firstname
    lastname
    username
    profileImage
    status
  }
}
`