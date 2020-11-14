// import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
// import { FetchProjects } from '../../graphql/query.gen'
import { AppRouteParams } from '../nav/route'
// import { fetchProjects } from './fetchProjects'
import { Page } from './Page'
import { ProjectCard } from './ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  overflow-y: scroll;
  margin: 40px;
`

interface ProfilePageProps extends RouteComponentProps, AppRouteParams {}

export function ProjectsPage(props: ProfilePageProps) {
  // const { loading, data } = useQuery<FetchProjects>(fetchProjects)
  // console.log(data)

  return (
    <Page>
      <ProjectsContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsContainer>
    </Page>
  )
}
