import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Login } from '../auth/Login'
import { Signup } from '../auth/Signup'
import { AppRouteParams, getPath, PlaygroundApp, Route } from '../nav/route'
// import { Surveys } from '../playground/Surveys'
import { Page } from './Page'
export function getSignupPath() {
  return getPath(Route.PLAYGROUND_APP, { app: PlaygroundApp.SIGNUP })
}

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    return <div>choose an app</div>
  }
  switch (app) {
    // case PlaygroundApp.SURVEYS:
    //   return <Surveys />
    case PlaygroundApp.LOGIN:
      return <Login />
    case PlaygroundApp.SIGNUP:
      return <Signup />
    default:
      throw new Error('no app found')
  }
}
