import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const LandingPage = React.lazy(() => import(/* webpackChunkName:'landing' */ './landing-page'))
const DownloadPage = React.lazy(() => import(/* webpackChunkName:'download' */ './download-page'))
const TermsOfUsePage = React.lazy(() => import(/* webpackChunkName:'terms-of-use' */ './terms-of-use-page'))
const PrivacyPolicyPage = React.lazy(() => import(/* webpackChunkName:'privacy-policy' */ './privacy-policy-page'))
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
        <Route path={`/download`} element={
          <React.Suspense fallback={null}>
            <DownloadPage/>
          </React.Suspense>
        }/>
        {[
          'terms-and-condition',
          'terms-of-use'
        ].map(path =>
          <Route key={path} path={`/${path}`} element={
            <React.Suspense fallback={null}>
              <TermsOfUsePage/>
            </React.Suspense>
          }/>
        )}
        <Route path={`/privacy-policy`} element={
          <React.Suspense fallback={null}>
            <PrivacyPolicyPage/>
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