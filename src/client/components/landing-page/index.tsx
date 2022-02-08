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
    '& $bordered': {
      borderColor: theme.palette.text.secondary
    },
    '& $numberLine:after': {
      borderColor: theme.palette.text.secondary
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
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      width: '80px'
    }
  },
  poweredContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    padding: '2px',
    overflow: 'hidden',
    '&:after, &:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      left: '0',
      backgroundColor: theme.palette.text.primary,
      zIndex: -1
    },
    '&:before': {
      height: '6px',
      bottom: '0',
      transform: 'skew(135deg)',
      transformOrigin: 'top left',
    },
    '&:after': {
      height: 'calc(100% - 6px)',
      top: '0'
    }
  },
  poweredLabel: {
    fontSize: '11px',
    fontWeight: 800,
    color: theme.palette.text.primary,
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '0 2px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      fontSize: '9px'
    }
  },
  hypeguardianLabel: {
    fontSize: '18px',
    fontWeight: 800,
    color: 'rgb(255, 255, 255)',
    padding: '2px 2px 0',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      fontSize: '9px'
    }
  },
  multiplyLabel: {
    flex: 1,
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
  bordered: {
    padding: '16px',
    borderColor: theme.palette.text.primary,
    borderWidth: '2px',
    borderStyle: 'solid'
  },
  title: {
    lineHeight: 1
  },
  titleLine: {
    flex: 1,
    width: '19px',
    borderWidth: '2px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    marginBottom: '6px',
    backgroundImage: `repeating-linear-gradient(${[
      '135deg',
      'rgba(255, 255, 255, 0)',
      'rgba(255, 255, 255, 0) 8px',
      `${theme.palette.primary.main} 8px`,
      `${theme.palette.primary.main} 10px`
    ].join(', ')})`,
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginBottom: '4px'
    }
  },
  numberColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    marginBottom: '8px',
    width: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      marginBottom: '6px'
    }
  },
  numberText: {
    fontFamily: 'Exan, Monaco, monospace',
    fontWeight: 600,
    marginBottom: '2px',
  },
  numberLine: {
    flex: 1,
    position: 'relative',
    width: '19px',
    minHeight: '2px',
    marginBottom: '6px',
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginBottom: '4px'
    },
    ['&:after']: {
      content: '" "',
      position: 'absolute',
      top: '0',
      height: '100%',
      width: '100%',
      borderWidth: '2px',
      borderColor: theme.palette.text.primary,
      borderStyle: 'solid'
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

  React.useEffect(() => {
    document.body.style.backgroundColor = 'white'
  }, [])

  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container direction='row' justify='flex-end'>
          <Grid direction='column' alignItems='stretch'>
            <img className={classes.hypegienicLogo} src={HypegienicLogo}/>
            <Grid container direction='row' justify='flex-end' alignItems='center'>
              <Typography color='textPrimary' align='center' className={classes.multiplyLabel}>×</Typography>
              <img className={classes.hypeguardianLogo} src={HypeGuardianLogo}/>
            </Grid>
            <div className={classes.poweredContainer}>
              <Typography className={classes.poweredLabel}>
                POWERED BY
              </Typography>
              <Typography color='textPrimary' className={classes.hypeguardianLabel}>
                HYPEGUARDIAN
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.headerContent}}>
          <Header/>
        </Grid>
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
          <div className={classes.bordered}>
            <Grid container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <div className={classes.titleLine}/>
              </div>
              <div className={classes.numberedContent}>
                <Spinner
                  sentence='GET STARTED'
                  color='primary'
                  variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
                  classes={{root:classes.title}}
                />
              </div>
            </Grid>
            {[
              'Download the hypegienic app. Register/login the app following the instructions on the screen.',
              'To deposit an order, open a locker unit through the app.',
              'You will be notified when your items are ready for pick up.',
              'Open the locker unit through the app to pick up your order.'
            ].map((step, index) => 
              <Grid key={step} container direction='row' alignItems='stretch'>
                <div className={classes.numberColumn}>
                  <Typography color='textSecondary'
                    variant='body1'
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
          </div>
        </Grid>
      </div>
      <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <div className={classes.bordered}>
          <Grid container direction='row' alignItems='stretch'>
            <div className={classes.numberColumn}>
              <div className={classes.titleLine}/>
            </div>
            <div className={classes.numberedContent}>
              <Spinner
                sentence='YOUR SHOES ARE SAFE WITH US'
                color='primary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
                classes={{root:classes.title}}
              />
            </div>
          </Grid>
          {[
            'Our app can only be authenticated via OTP sent to your registered device.',
            'The hypelocker can only be unlocked when prompted by your authenticated device.',
            'You will receive real-time updates on the progress of your order.'
          ].map((step, index) => 
            <Grid key={step} container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <Typography color='textPrimary'
                  variant='body1'
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
        </div>
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