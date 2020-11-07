import * as React from 'react'
import styled from 'styled-components'

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
  return (
    <Container>
      <Title>Project Title</Title>
      <Date>Date published 10/20/2020</Date>
      <Description>project description here</Description>
      <Creator>Created By: ajsldfjaldfj</Creator>
    </Container>
  )
}