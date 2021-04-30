import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import HypegienicLogo from '../../../asset/img/hypegienic-logo.svg'
import HypeGuardianLogo from '../../../asset/img/hypeguardian-logo.svg'
import {useScreenState} from '../../store/screen'
import Header from './header'
import Spinner from './spinner'
import RubikCube from './rubik-cube'
import Download from './download'
import Footer from './footer'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100vw',
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
  headerContent: {
    flex: 1
  },
  darkSection: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(51, 51, 51)',
    '& $titleLine': {
      backgroundColor: theme.palette.text.secondary
    },
    '& $numberLine': {
      backgroundColor: theme.palette.text.secondary
    }
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  hypegienicLogo: {
    width: '180px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '140px'
    }
  },
  hypeguardianLogo: {
    width: '100px',
    marginLeft: '16px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '80px'
    }
  },
  poweredContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '8px',
    padding: '0 4px',
    overflow: 'hidden',
    '&:after,&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      left: '0',
      backgroundColor: theme.palette.text.primary,
      zIndex: -1
    },
    '&:before': {
      height: '4px',
      bottom: '0',
      transform: 'skew(135deg)',
      transformOrigin: 'top left',
    },
    '&:after': {
      height: 'calc(100% - 4px)',
      top: '0'
    }
  },
  poweredLabel: {
    fontSize: '11px',
    fontWeight: 800,
    color: 'rgb(255, 255, 255)',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      fontSize: '9px'
    }
  },
  multiplyLabel: {
    fontSize: '48px'
  },
  centeredTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8px',
    marginBottom: '8px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      marginBottom: '6px'
    }
  },
  title: {
    lineHeight: 1
  },
  titleLine: {
    width: '240px',
    height: '5px',
    marginBottom: '16px',
    backgroundColor: theme.palette.primary.main,
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '180px',
      height: '4px',
      marginBottom: '8px'
    }
  },
  numberColumn: {
    marginTop: '8px',
    width: '42px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      width: '28px'
    }
  },
  numberText: {
    fontFamily: 'Exan, Monaco, monospace',
    fontWeight: 600,
    lineHeight: '1.8rem',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      lineHeight: '1.5rem'
    }
  },
  numberLine: {
    width: '24px',
    height: '3px',
    backgroundColor: theme.palette.text.primary,
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '20px',
      height: '2px'
    }
  },
  numberedContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    marginBottom: '8px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      marginBottom: '6px'
    }
  },
  footer: {
    width: '100%',
    marginTop: '32px',
    display: 'flex',
    alignSelf: 'end',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container direction='column' alignItems='flex-end'>
          <img className={classes.hypegienicLogo} src={HypegienicLogo}/>
          <Grid container direction='row' justify='flex-end' alignItems='center'>
            <Typography color='textPrimary' className={classes.multiplyLabel}>×</Typography>
            <img className={classes.hypeguardianLogo} src={HypeGuardianLogo}/>
          </Grid>
          <div className={classes.poweredContainer}>
            <Typography color='textPrimary' className={classes.poweredLabel}>
              POWERED BY HYPEGUARDIAN
            </Typography>
          </div>
        </Grid>
        <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.headerContent}}>
          <Header/>
        </Grid>
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
          <Grid container direction='row' alignItems='flex-start'>
            <div className={classes.numberColumn}/>
            <div className={classes.numberedContent}>
              <Spinner
                sentence='GET STARTED'
                color='textSecondary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h4':'h3'}
                classes={{root:classes.title}}
              />
              <div className={classes.titleLine}/>
            </div>
          </Grid>
          {[
            'Download our hypegienic app from the Apple Store or Google Play Store. With the app, you can interact with any one of our locker by moving closer to it.',
            'Select the service you required and proceed, a locker unit will be opened for you as indicated in the app.',
            'Place your shoe in the locker and close it back. Turn on notification to be notified when your shoes are cleaned and placed back into the locker.',
            'Top up to make sure you have enough money in the app when you want to retrieve your shoes back.',
            'Repeat the same steps to retrieve your shoes back when they are ready to be picked up.'
          ].map((step, index) => 
            <Grid key={step} container direction='row' alignItems='flex-start'>
              <div className={classes.numberColumn}>
                <Typography color='textSecondary'
                  variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}
                  classes={{root:classes.numberText}}
                >
                  0{index + 1}
                </Typography>
                <div className={classes.numberLine}/>
              </div>
              <div className={classes.numberedContent}>
                <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h5'}>
                  {step}
                </Typography>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
      <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container direction='row' alignItems='flex-start'>
          <div className={classes.numberColumn}/>
          <div className={classes.numberedContent}>
            <Spinner
              sentence='YOUR SHOES ARE SAFE WITH US'
              color='primary'
              variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h4':'h3'}
              classes={{root:classes.title}}
            />
            <div className={classes.titleLine}/>
          </div>
        </Grid>
        {[
          'Our CCTVs are operating 24/7 with close monitoring.',
          'Our app can only be authenticated via OTP sent to your registered device.',
          'Your belongings can only be retrieved by you. The hypelocker can only be unlocked when your signed-in device is within close proximity.',
          'You will receive real time updates on the progress of your order.',
          'All hypelockers are enforced with an activated alarm system.'
        ].map((step, index) => 
          <Grid key={step} container direction='row' alignItems='flex-start'>
            <div className={classes.numberColumn}>
              <Typography color='textPrimary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}
                classes={{root:classes.numberText}}
              >
                0{index + 1}
              </Typography>
              <div className={classes.numberLine}/>
            </div>
            <div className={classes.numberedContent}>
              <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h5'}>
                {step}
              </Typography>
            </div>
          </Grid>
        )}
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
          <div className={classes.centeredTitleContainer}>
            <Spinner
              sentence='OUR SERVICES'
              color='textSecondary'
              variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h4':'h3'}
              classes={{root:classes.title}}
              align='center'
            />
            <div className={classes.titleLine}/>
          </div>
          <RubikCube
            variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h4':'h3'}
            words={[
              'CLEANING',
              'PROTECTION',
              'CUSTOMISATION',
              'RESTORATION'
            ]}
          />
        </Grid>
      </div>
      <Grid container direction='column' justify='space-between' alignItems='center'
        classes={{container:[classes.pageContainer, classes.footerPageContainer].join(' ')}}
      >
        <div/>
        <div className={classes.pageContainerPadding}>
          <Download/>
        </div>
        <div className={classes.footer}>
          <Footer/>
        </div>
      </Grid>
    </div>
  )
}

export default LandingPage