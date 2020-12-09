// import { getApolloClient } from '../../graphql/apolloClient'
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { useContext } from 'react';
import { ColorName, Colors } from '../../../../common/src/colors';
import {
  FetchUser,
  FetchUserVariables
} from '../../graphql/query.gen';
import { H2 } from '../../style/header';
import { Spacer } from '../../style/spacer';
import { style } from '../../style/styled';
import { BodyText, IntroText } from '../../style/text';
import { UserContext } from '../auth/user';
import { Link } from '../nav/Link';
import { AppRouteParams } from '../nav/route';
import { fetchUser } from './fetchUsers';
import { Page } from './Page';
interface ProfilePageProps extends RouteComponentProps, AppRouteParams {}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProfilePage(props: ProfilePageProps) {


  const { user } = useContext(UserContext)
  if (!user)
    return <div>no user</div>
  var userId = user.id
  const { loading, data } = useQuery<FetchUser, FetchUserVariables>(fetchUser, {
    variables: { userId },
  })


  // const { loading, data } = useQuery<FetchUser, FetchUserVariables>(fetchUser, {
  //   variables: { userId },
  // })
  console.log(loading);
  if (!data)
    return <div>no user</div>
  if (!data.user)
    return <div>no user</div>
  var projects = data.user.projectsPartOf
  let projectsIn = []
  for (let i=0;i<projects!.length;i++)
  {
    if (projects[i]==null)
    {
      break
    }
    else
    {
      projectsIn.push({title: projects[i].title,href:'http://localhost:3000/app/projects'})
    }
  }




  console.log("here")
  //console.log(window.document.cookie)
  return (
    <Page>
      <Section>
        <H2>User Info</H2>
        <Spacer $h4 />
        <IntroText>Information about user</IntroText>
        <Spacer $h4 />
        <img src='https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' width="400" style={{ alignSelf: 'center' }}/>
        <Table>
          <tbody>
            <UserInfo
              name={data.user.name}
              email={data.user.email}
              href="#"
              projects={projectsIn}
            />

          </tbody>
        </Table>
      </Section>
    </Page>
  )
}


interface socialMedia {
  title: string
  href: string
}

interface projects {
  title: string
  href: string
}

function UserInfo(props: {
  name: string
  email: string
  description?: string
  href?: string
  socialMedia?: socialMedia[]
  projects?: projects[]
}) {
  return (
    <TR>
      <BodyText>
        <TD>{props.name}</TD>
        <TD>
          <b>{props.href ? <Link href={props.href}>{props.email}</Link> : props.email}</b>

          {props.description && (
            <>
              <Spacer $h2 />
              <i>{props.description}</i>
            </>
          )}
          {props.socialMedia && (
            <>
              <Spacer $h4 />
              <b>Social Media</b>
              <Spacer $h2 />
              <ul className="ml4">
                {props.socialMedia.map((rr, i) => (
                  <li key={i}>
                    <Link href={rr.href}>{rr.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {props.projects && (
            <>
              <Spacer $h4 />
              <b>Projects</b>
              <Spacer $h2 />
              <ul className="ml4">
                {props.projects.map((rr, i) => (
                  <li key={i}>
                    <Link href={rr.href}>{rr.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </TD>
      </BodyText>
    </TR>
  )
}

const Table = style('table', 'w-100 ba b--black')

const Section = style('div', 'mb4 mid-gray ba b--mid-gray br2 pa3', (p: { $color?: ColorName }) => ({
  borderLeftColor: Colors[p.$color || 'lemon'] + '!important',
  borderLeftWidth: '3px',
}))

const TR = style('tr', 'ba b--black')

const TD = style('td', 'mid-gray pa3 v-mid', { minWidth: '7em' })