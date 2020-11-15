import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'
import { ProjectCard } from './ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  overflow-y: scroll;
  margin: 40px;
`

interface SearchPageProps extends RouteComponentProps, AppRouteParams {}

export function SearchPage(props: SearchPageProps) {
  return (
    <Page>
      <ProjectsContainer>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </ProjectsContainer>
    </Page>
  )
}