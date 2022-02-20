import * as React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            margin: 0,
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
MyDocument.getInitialProps = async (context) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(context)
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
