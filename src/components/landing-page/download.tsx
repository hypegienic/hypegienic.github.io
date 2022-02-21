import * as React from 'react'
import {useRouter} from 'next/router'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {useScreenState} from '../../stores/screen'

const appStoreLink = 'https://apps.apple.com/my/app/hy-pe-gienic/id1608786953'
const playStoreLink = 'https://play.google.com/store/apps/details?id=app.hypegienic'
const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100%',
    maxWidth: '572px',
    display: 'flex',
    flexDirection: 'column',
  },
  banner: {
    position: 'relative',
    margin: '0 64px',
    padding: '8px 16px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      margin: '0 48px'
    }
  },
  background: {
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
    transform: 'skew(150deg)',
    zIndex: -1,
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: 'calc(100% - 36px)',
    }
  },
  storeIcon: {
    width: '180px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '140px'
    }
  },
  '@keyframes pulsing': {
    '0%': {transform:'skew(150deg) translateX(0) scaleX(1)'},
    '25%': {transform:'skew(150deg) translateX(75%) scaleX(0.85)'},
    '75%': {transform:'skew(150deg) translateX(225%) scaleX(0.45)'},
    '100%': {transform:'skew(150deg) translateX(300%) scaleX(0)'}
  },
  '@keyframes reversePulsing': {
    '0%': {transform:'skew(150deg) translateX(0) scaleX(1)'},
    '25%': {transform:'skew(150deg) translateX(-75%) scaleX(0.85)'},
    '75%': {transform:'skew(150deg) translateX(-225%) scaleX(0.45)'},
    '100%': {transform:'skew(150deg) translateX(-300%) scaleX(0)'}
  },
  stripe: {
    position: 'absolute',
    height: '100%',
    width: '32px',
    top: '0',
    right: '16px',
    backgroundColor: 'rgb(0, 0, 0)',
    transform: 'skew(150deg)',
    animation: '$pulsing 2.4s infinite linear',
    zIndex: -1,
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '24px',
      right: '12px',
    }
  },
  flipped: {
    '& $stripe': {
      left: '16px',
      right: 'none',
      animation: '$reversePulsing 2.4s infinite linear',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        left: '12px',
      }
    }
  },
  legendSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '12px 24px'
  },
  legendBox: {
    position: 'relative',
    width: '15px',
    height: '15px',
    border: `1.5px solid ${theme.palette.text.primary}`,
    margin: '1.5px 6px',
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '12px',
      height: '12px',
      borderWidth: '1px',
      margin: '3px 6px'
    }
  },
  legendBoxStroke: {
    position: 'absolute',
    width: '200%',
    height: '1.5px',
    left: '-50%',
    top: '50%',
    backgroundColor: theme.palette.text.primary,
    transform: 'rotateZ(135deg)',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      height: '1px'
    }
  }
}))
const Download:React.FunctionComponent = () => {
  const router = useRouter()
  const [{type:screenType}] = useScreenState()

  React.useEffect(() => {
    const pathname = router.pathname
    const userAgent = navigator.userAgent.toLowerCase()
    if(pathname === '/download') {
      if(userAgent.includes('android')) {
        window.open(playStoreLink)
      }
      if(
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
      ) {
        window.open(appStoreLink)
      }
    }
  }, [])

  const classes = useStyles({})
  const stripes = <>
    <div className={classes.stripe} style={{animation:'none'}}/>
    {Array(3).fill(undefined).map((_, index, array) => 2.4 / array.length * index)
      .map(delay =>
        <div className={classes.stripe} key={delay} style={{animationDelay:`${delay}s`}}/>
      )
    }
  </>
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.background}/>
        {stripes}
        <div className={classes.flipped}>{stripes}</div>
        <a href={appStoreLink}>
          <img className={classes.storeIcon} src='/images/app-store.svg'/>
        </a>
        <a href={playStoreLink}>
          <img className={classes.storeIcon} src='/images/google-play.svg'/>
        </a>
      </div>
      <div className={classes.legendSection}>
        <div className={classes.legendBox}>
          <div className={classes.legendBoxStroke}/>
        </div>
        <Typography color='textPrimary'
          variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'caption':'body1'}
        >
          DOWNLOAD APP TO GET STARTED
        </Typography>
      </div>
    </div>
  )
}

export default Download