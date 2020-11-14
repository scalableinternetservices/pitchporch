import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { getApolloClient } from '../../graphql/apolloClient';
import { UserContext } from '../auth/user';
import { handleError } from '../toast/error';
import { toast } from '../toast/toast';
import { addUserToProject } from './mutateProject';

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

const Join = styled.div`
  cursor: pointer;
  width: 150px;
  color: white;
  background: blue;
`

interface ProjectCardProps {
  projectId: number
}

export function ProjectCard(props: ProjectCardProps) {
  const { user } = useContext(UserContext)
  function handleJoin(projectId: number) {
    if (!user) {
      alert("No User!")
    } else {
      addUserToProject(getApolloClient(), { projectId: projectId, userId: user.id })
      .then(() => {
        toast('submitted!')
      })
      .catch(err => {
        handleError(err)
      })
    }
  }
  return (
    <Container>
      <Title>Project Title</Title>
      <Date>Date published 10/20/2020</Date>
      <Description>project description here</Description>
      <Creator>Created By: ajsldfjaldfj</Creator>
      <Join onClick={() => handleJoin(props.projectId)}>Join Project</Join>
    </Container>
  )
}