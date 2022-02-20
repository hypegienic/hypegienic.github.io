import * as React from 'react'
import Head from 'next/head'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'

const fonts = [{
  fontFamily: 'Exan',
  src: 'fonts/exan.woff'
}, {
  fontFamily: 'Monaco',
  src: 'fonts/monaco.woff'
}]
const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css2?family=Arimo:wght@200;300;400;600;800&display=swap)'
  ] as any,
  '@font-face': fonts.map(font => ({
    fontFamily: font.fontFamily,
    src: `url('${font.src}')`
  })) as any
}))
const Import:React.FunctionComponent = () => {
  const classes = useStyles({})
  return (
    <Head>
      {fonts.map(font => (
        <link rel='preload' href={font.src} as='font' crossOrigin=''/>
      ))}
    </Head>
  )
}

export default Import