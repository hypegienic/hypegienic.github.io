import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import HypegienicWhiteLogo from '../../../asset/img/hypegienic-white-logo.svg'
import PlaceIcon from '../../../asset/img/place.svg'
import {useScreenState} from '../../store/screen'
import Download from '../landing-page/download'
import Footer from '../landing-page/footer'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    minHeight: '100vh',
    padding: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '24px',
    }
  },
  pageContainerPadding: {
    padding: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '24px',
    }
  },
  footerPageContainer: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    '&$pageContainer': {
      width: '100%',
      padding: '0'
    }
  },
  hypegienicLogo: {
    width: '180px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '140px'
    }
  },
  footerBanner: {
    width: '100%',
    marginTop: '32px',
    display: 'flex',
    alignSelf: 'end',
    flexDirection: 'column',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    paddingBottom: '12px',
    display: 'flex',
    alignSelf: 'end',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
    ['& $hypegienicLogo']: {
      width: '128px',
      padding: '12px 0',
      opacity: 0.5,
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        width: '112px'
      }
    },
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2px 16px',
    textDecoration: 'none'
  },
  mediaIcon: {
    height: '24px',
    marginBottom: '6px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      height: '18px',
      marginBottom: '4px'
    }
  },
  mediaText: {
    textAlign: 'center',
    whiteSpace: 'pre'
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px 0'
  },
  copyrightText: {
    color: 'rgb(118, 121, 128)'
  }
}))
const DawnloadPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  React.useEffect(() => {
    document.body.style.backgroundColor = 'white'
  }, [])

  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Grid container direction='column' justifyContent='space-between' alignItems='center'
        classes={{container:[classes.pageContainer, classes.footerPageContainer].join(' ')}}
      >
        <div/>
        <div className={classes.pageContainerPadding}>
          <Download/>
        </div>
        <div className={classes.footerBanner}>
          <Footer/>
        </div>
      </Grid>
      <div className={classes.footer}>
        <a className={classes.media} href='https://www.google.com/maps/place/HypeGuardian/@3.0697401,101.6001784,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4dbe5360f2c9:0xe0bbcd55f4859d9c!8m2!3d3.0697347!4d101.6023724'>
          <img className={classes.mediaIcon} src={PlaceIcon}/>
          <Typography color='textSecondary'
            variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'caption':'body1'}
            classes={{root:classes.mediaText}}
          >{
            [
              '37-1, Jalan PJS 11/7,',
              'Bandar Sunway,',
              '47500 Petaling Jaya,',
              'Selangor'
            ].join('\n')
          }</Typography>
        </a>
        <div className={classes.copyright}>
          <img className={classes.hypegienicLogo} src={HypegienicWhiteLogo}/>
          <Typography variant='caption'
            classes={{root:classes.copyrightText}}
          >
            © 2022 HYPE X GIENIC SDN. BHD.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default DawnloadPage