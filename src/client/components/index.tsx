import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const LandingPage = React.lazy(() => import(/* webpackChunkName:'landing' */ './landing-page'))
const TermsConditionPage = React.lazy(() => import(/* webpackChunkName:'terms-condition' */ './terms-condition-page'))
const NotFoundPage = React.lazy(() => import(/* webpackChunkName:'404-page' */ './404-page'))

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
      <Routes>
        <Route path={`/`} element={
          <React.Suspense fallback={null}>
            <LandingPage/>
          </React.Suspense>
        }/>
        <Route path={`/terms-and-condition`} element={
          <React.Suspense fallback={null}>
            <TermsConditionPage/>
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={null}>
            <NotFoundPage/>
          </React.Suspense>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router