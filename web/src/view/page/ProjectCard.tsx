import * as React from 'react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { getApolloClient } from '../../graphql/apolloClient';
import { UserContext } from '../auth/user';
import { handleError } from '../toast/error';
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
interface ProjectCardPropsAndState {
  id: number
  title: string
  createdBy: string
  description: string
  usersInProject: any
}

export default function ProjectCard(props: ProjectCardPropsAndState) {
  const [project, setProject] = useState<ProjectCardPropsAndState>(props);
  const { user } = useContext(UserContext)
  function handleJoin(projectId: number) {
    if (!user) {
      alert("No User!")
    } else {
      addUserToProject(getApolloClient(), { projectId: projectId, userId: user.id })
      .then(( data : any ) => {
        const newProj : ProjectCardPropsAndState = {
          id: data.data.addUserToProject.id,
          title: data.data.addUserToProject.title,
          createdBy: data.data.addUserToProject.createdBy.name,
          description: data.data.addUserToProject.description,
          usersInProject: data.data.addUserToProject.usersInProject
        }
        setProject(newProj)
      })
      .catch(err => {
        handleError(err)
        alert("WRONG")
      })
    }
  }

  return (
    <Container>
      <Title>{project.title}</Title>
      <Date>Date published 10/20/2020</Date>
      <Join onClick={() => handleJoin(project.id)}>Join Project</Join>
      <Description>Description: {project.description}</Description>
      <Creator>Created By: {project.createdBy}</Creator>
      <div>
        Users in Project:
        {project.usersInProject.map((userObj : any, index: number) =>
          <Creator key={index}>{userObj.name}</Creator>
        )}
      </div>
    </Container>
  )
}
