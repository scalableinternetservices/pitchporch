import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
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
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content="Add Reply" labelPosition="left" icon="edit" primary />
        </Form>
      </Comment.Group>
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
