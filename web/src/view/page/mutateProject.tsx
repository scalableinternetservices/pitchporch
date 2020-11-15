import { ApolloClient, gql } from '@apollo/client'
import {
  AddUserToProject,
  AddUserToProjectInput,
  AddUserToProjectVariables
} from '../../graphql/query.gen'
import { fragmentProject } from './fetchProjects'

const addUserToProjectMutation = gql`
  mutation AddUserToProject($input: AddUserToProjectInput!) {
    addUserToProject(input: $input) {
      ...Project
    }
  }
  ${fragmentProject}
`

export function addUserToProject(client: ApolloClient<any>, input: AddUserToProjectInput) {
  return client.mutate<AddUserToProject, AddUserToProjectVariables>({
    mutation: addUserToProjectMutation,
    variables: { input },
  })
}
