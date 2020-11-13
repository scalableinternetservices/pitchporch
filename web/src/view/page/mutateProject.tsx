import { ApolloClient, gql } from '@apollo/client'
import {
  AddUserToProject,
  AddUserToProjectInput,
  AddUserToProjectVariables
} from '../../graphql/query.gen'

const addUserToProjectMutation = gql`
  mutation AddUserToProject($input: AddUserToProjectInput!) {
    answerSurvey(input: $input)
  }
`

export function addUserToProject(client: ApolloClient<any>, input: AddUserToProjectInput) {
  return client.mutate<AddUserToProject, AddUserToProjectVariables>({
    mutation: addUserToProjectMutation,
    variables: { input },
  })
}
