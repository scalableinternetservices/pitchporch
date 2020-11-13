import { gql } from '@apollo/client'

export const fragmentProject = gql`
  fragment Project on Project {
    id
  }
`

export const fetchProjects = gql`
  query FetchProjects {
    projects {
      ...Project
    }
  }
  ${fragmentProject}
`

export const fetchProject = gql`
  query FetchProject($projectId: Int!) {
    project(projectId: $projectId) {
      ...Project
    }
  }
  ${fragmentProject}
`
