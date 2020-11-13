import * as React from 'react'
import styled from 'styled-components'
import { Page } from './Page'
import { ProjectCard } from './ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  overflow-y: scroll;
  margin: 40px;
`

export function SearchPage() {
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