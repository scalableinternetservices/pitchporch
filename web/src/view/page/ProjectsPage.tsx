// import { useQuery } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { FetchProjects } from '../../graphql/query.gen'
import { AppRouteParams } from '../nav/route'
import { fetchProjects } from './fetchProjects'
import { Page } from './Page'
import ProjectCard from './ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  overflow-y: scroll;
  margin: 40px;
`

interface ProjectsPageProps extends RouteComponentProps, AppRouteParams {}

export function ProjectsPage(props: ProjectsPageProps) {
  const { data } = useQuery<FetchProjects>(fetchProjects)
  return (
    <Page>
      <ProjectsContainer>
        {data && data.projects.map((project, index) =>
          <ProjectCard key={index} id={project.id} title={project.title} createdBy={project.createdBy.name} description={project.description} usersInProject={project.usersInProject}/>
        )}
      </ProjectsContainer>
    </Page>
  )
}
