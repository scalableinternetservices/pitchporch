import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams {}

// const genderOptions = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForumPage(props: HomePageProps) {
  return (
    <Page>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Project Name"
            placeholder="Enter Project Name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Tech Stack"
            placeholder="Enter Tech Stack"
          />
          {/* <Form.Field
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder="Gender"
            search
            searchInput={{ id: 'form-select-control-gender' }}
          /> */}
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Description"
          placeholder="Enter description"
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="Enter email"
          error={{
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
        <Form.Field id="form-button-control-public" control={Button} content="Confirm" />
      </Form>
    </Page>
  )
}

// const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
//   borderLeftColor: Colors.lemon + '!important',
//   borderRightColor: Colors.lemon + '!important',
//   borderLeftWidth: '4px',
//   borderRightWidth: '4px',
// })

// const Content = style('div', 'flex-l')

// const LContent = style('div', 'flex-grow-0 w-70-l mr4-l')

// const RContent = style('div', 'flex-grow-0  w-30-l')

// const Section = style('div', 'mb4 mid-gray ba b--mid-gray br2 pa3', (p: { $color?: ColorName }) => ({
//   borderLeftColor: Colors[p.$color || 'lemon'] + '!important',
//   borderLeftWidth: '3px',
// }))

// const TD = style('td', 'pa1', p => ({
//   color: p.$theme.textColor(),
// }))
