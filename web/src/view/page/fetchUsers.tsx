import { gql } from '@apollo/client'

export const fragmentUser = gql`
  fragment User on User {
    id
    name
    email
    projectsPartOf{title}

  }
`

export const fetchUsers = gql`
  query FetchUsers {
    users {
      ...User
    }
  }
  ${fragmentUser}
`

export const fetchUser = gql`
  query FetchUser($userId: Int!) {
    user(userId: $userId) {
      ...User
    }
  }
  ${fragmentUser}
`
