import { useQuery } from '@apollo/client'
import * as React from 'react'
import styled from 'styled-components'
import { FetchProject, FetchProjectVariables } from '../../graphql/query.gen'
import { fetchProject } from './fetchProjects'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  padding: 20px;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background: grey;
`

const Title = styled.div`
  font-size: 20px;
`

const Date = styled.div`
  font-size: 12px;
`

const Description = styled.div`
  font-size: 16px;
`
const Creator = styled.div`
  font-size: 16px;
`

interface ProjectCardProps {}

export function ProjectCard(props: ProjectCardProps) {
  // const { loading, data } = useQuery<FetchProjects>(fetchProjects)
  // const { project } = useContext(ProjectContext)
  // const projectId = project.id
  const { data } = useQuery<FetchProject, FetchProjectVariables>(fetchProject)
  console.log(data)
  return (
    <Container>
      <Title>Project Title</Title>
      <Date>Date published 10/20/2020</Date>
      <Description>{data?.project?.description}</Description>
      <Creator>Created By: ajsldfjaldfj</Creator>
    </Container>
  )
}
