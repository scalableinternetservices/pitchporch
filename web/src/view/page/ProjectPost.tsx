import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
// import CommentsBlock from 'simple-react-comments'
import { ColorName, Colors } from '../../../../common/src/colors'
import { H2 } from '../../style/header'
import { Spacer } from '../../style/spacer'
import { style } from '../../style/styled'
import { BodyText } from '../../style/text'
import { Link } from '../nav/Link'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProjectPost(props: HomePageProps) {
  return (
    <Page>
      <Content>
        <RContent>
          <Section>
            <H2>Denise Wang</H2>
            <Spacer $h4 />
            <BodyText>
              <table>
                <tbody>
                  <tr>
                    <TD>
                      Email: <Link href="mailto://denisewang@g.ucla.edu">denisewang@g.ucla.edu</Link>
                    </TD>
                  </tr>
                  <tr>
                    <TD>
                      Github: <Link href="https://github.com/denise-wang">denise-wang</Link>
                    </TD>
                  </tr>
                </tbody>
              </table>
            </BodyText>
          </Section>
        </RContent>
        <LContent>
          <Section>
            <H2>Project Post: PitchPorch</H2>
            <Spacer $h4 />
            <BodyText>
              <b>Idea: </b>A platform that allows users to post their ideas for side projects or startups and find
              collaborators.
            </BodyText>
            <Spacer $h4 />
            <BodyText>
              <b>Description: </b> This web app will have a location feature that allows users to look at
              projects/people within a certain radius of their locaiton. Users are able to query certain projects based
              off of certain criteria and search for different features.
            </BodyText>
            <Spacer $h4 />
            <BodyText>
              <b>Tech stack: </b>
            </BodyText>
          </Section>
          {/* <Section>
            <H2>Getting Started</H2>
            <Spacer $h4 />
            <BodyText>In the first week of class, please complete the following:</BodyText>
            <Spacer $h4 />
            <BodyText>
              <ul className="pl4">
                <li>
                  Follow the <Link href="https://github.com/rothfels/bespin#quickstart">project Quickstart</Link> to
                  configure your dev environment.
                </li>
                <li>
                  Find a project team. See <Link to={getPath(Route.PROJECTS)}>Projects</Link> for details.
                </li>
                <li>
                  Join the <Link href="https://piazza.com/ucla/fall2020/cs188">CS188 Piazza</Link>.
                </li>
              </ul>
            </BodyText>
          </Section> */}
        </LContent>
        {/* <CommentsBlock
          comments={this.state.comments}
          signinUrl={'/signin'}
          isLoggedIn
          reactRouter // set to true if you are using react-router
          onSubmit={text => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: '#',
                    avatarUrl: '#avatarUrl',
                    createdAt: new Date(),
                    fullName: 'Name',
                    text,
                  },
                ],
              })
              console.log('submit:', text)
            }
          }}
        /> */}
      </Content>
    </Page>
  )
}

// const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
//   borderLeftColor: Colors.lemon + '!important',
//   borderRightColor: Colors.lemon + '!important',
//   borderLeftWidth: '4px',
//   borderRightWidth: '4px',
// })

const Content = style('div', 'flex-l')

const LContent = style('div', 'flex-grow-0 w-90-l mr4-l')

const RContent = style('div', 'flex-grow-0  w-20-l')

const Section = style('div', 'mb4 mid-gray ba b--mid-gray br2 pa3', (p: { $color?: ColorName }) => ({
  borderLeftColor: Colors[p.$color || 'lemon'] + '!important',
  borderLeftWidth: '3px',
}))

const TD = style('td', 'pa1', p => ({
  color: p.$theme.textColor(),
}))
