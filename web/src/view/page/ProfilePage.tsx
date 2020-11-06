// import { getApolloClient } from '../../graphql/apolloClient'
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { ColorName, Colors } from '../../../../common/src/colors';
import {
  FetchUsers
} from '../../graphql/query.gen';
import { H2 } from '../../style/header';
import { Spacer } from '../../style/spacer';
import { style } from '../../style/styled';
import { BodyText, IntroText } from '../../style/text';
import { Link } from '../nav/Link';
import { AppRouteParams } from '../nav/route';
import { fetchUsers } from './fetchUsers';
import { Page } from './Page';

interface ProfilePageProps extends RouteComponentProps, AppRouteParams {}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProfilePage(props: ProfilePageProps) {
  const { loading, data } = useQuery<FetchUsers>(fetchUsers)


  // const { loading, data } = useQuery<FetchUser, FetchUserVariables>(fetchUser, {
  //   variables: { userId },
  // })
  console.log(loading);
  console.log(data);

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
              name="Nikhil Srikumar"
              email="nikhil.srikumar@gmail.com"
              href="#"
              description="What is up with it"
              socialMedia={[
                {
                  title: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/nikhil-s-aa8451133/',
                },
              ]}
              projects={[
                {
                  title: 'Blog',
                  href: 'https://github.com/nsrikumar1/Blogger',
                },
              ]}
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