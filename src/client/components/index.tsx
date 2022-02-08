import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Async from './async'

const landingPage = () => import(/* webpackChunkName:'landing' */ './landing-page')
const termsConditionPage = () => import(/* webpackChunkName:'terms-condition' */ './terms-condition-page')
const notFoundPage = () => import(/* webpackChunkName:'404-page' */ './404-page')

const Router:React.FunctionComponent = () => {
  React.useEffect(() => {
    window['dataLayer'] = window['dataLayer'] || []
    const gtag = (...argument:any[]) => {
      window['dataLayer'].push(argument)
    }
    gtag('js', new Date())
    gtag('config', 'UA-219608447-1')
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={landingPage} props={routeComponentProps}/>
        }/>
        <Route exact path={`/terms-and-condition`} render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={termsConditionPage} props={routeComponentProps}/>
        }/>
        <Route path='*' render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={notFoundPage} props={routeComponentProps}/>
        }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router