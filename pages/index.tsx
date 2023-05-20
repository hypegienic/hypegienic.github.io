import * as React from 'react'
import Link from 'next/link'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {useScreenState} from '../src/stores/screen'
import Header from '../src/components/landing-page/header'
import Spinner from '../src/components/landing-page/spinner'
import RubikCube from '../src/components/landing-page/rubik-cube'
import Download from '../src/components/landing-page/download'
import Footer from '../src/components/landing-page/footer'

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
    color: theme.palette.primary.main,
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
      fontSize: '12px'
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
  unbordered: {
    padding: '12px 16px',
    ['& $numberText']: {
      marginTop: '4px',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        marginTop: '2px'
      }
    }
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
  },
  documents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '12px 16px 24px',
  },
  document: {
    padding: '3px 8px',
    margin: '0 4px',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: theme.transitions.create('background-color'),
    '&:hover': {
      backgroundColor: 'rgb(118, 121, 128)'
    }
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const downloadSection = React.useRef<HTMLDivElement>()
  const contactSection = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    document.body.style.backgroundColor = 'white'
  }, [])

  const smoothScrollTo = (element:HTMLElement) => {
    element.scrollIntoView({behavior:'smooth'})
  }
  React.useEffect(() => {
    if(window.location.hash === '#download') {
      setTimeout(() =>
        smoothScrollTo(downloadSection.current)
      , 0)
    }
  }, [downloadSection.current])
  React.useEffect(() => {
    if(window.location.hash === '#contact') {
      setTimeout(() =>
        smoothScrollTo(contactSection.current)
      , 0)
    }
  }, [contactSection.current])

  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container direction='row' justifyContent='flex-end'>
          <Grid>
            <img className={classes.hypegienicLogo} src='/images/hypegienic-logo.svg'/>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
              <Typography color='textPrimary' align='center' className={classes.multiplyLabel}>×</Typography>
              <img className={classes.hypeguardianLogo} src='/images/hypeguardian-logo.svg'/>
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
        <Grid container direction='column' justifyContent='center' alignItems='center' classes={{container:classes.headerContent}}>
          <Header/>
        </Grid>
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='row' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
          <div className={classes.bordered}>
            <Grid container direction='column'>
              <div className={classes.numberedContent}>
                <Spinner
                  sentence='WHO ARE WE'
                  color='primary'
                  variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h4'}
                  classes={{root:classes.title}}
                />
              </div>
              {[
                'Hypegienic is powered by HypeGuardian to provide professional shoe care services to students all across Malaysia.',
                'A common problem that a lot of our customers are facing is the inconvenience to travel all the way to our physical store to deliver their shoes.',
                'Hence, hypegienic was born under the basis of providing convenience for our customers by eliminating the need to travel long distances to utilise our services.',
                'As we set up our hypelockers in universities all across KL, our customers can enjoy 24-hour drop-in and pick-up service with zero delivery fees.'
              ].map(step => 
                <div key={step} className={classes.numberedContent}>
                  <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h5'}>
                    {step}
                  </Typography>
                </div>
              )}
            </Grid>
          </div>
        </Grid>
      </div>
      <Grid container direction='row' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <div className={classes.bordered}>
          <Grid container direction='column'>
            <div className={classes.numberedContent}>
              <Spinner
                sentence='POWERED BY HYPEGUARDIAN'
                color='primary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h4'}
                classes={{root:classes.title}}
              />
            </div>
            {[
              'All servicing will be done by HypeGuardian. Rest assured your shoes are in good hands.',
              'HypeGuardian has been the leading shoe-care provider in Malaysia since 2018.',
              'With the experience of restoring and protecting more than 20,000 pairs nationwide, the team strives to revive your beloved pairs into mint condition.'
            ].map(step =>
              <div key={step} className={classes.numberedContent}>
                <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h5'}>
                  {step}
                </Typography>
              </div>
            )}
          </Grid>
        </div>
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='column' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
          <div className={classes.bordered}>
            <Grid container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <div className={classes.titleLine}/>
              </div>
              <div className={classes.numberedContent}>
                <Spinner
                  sentence='GET STARTED'
                  color='primary'
                  variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h4'}
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
                  <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h5'}>
                    {step}
                  </Typography>
                </div>
              </Grid>
            )}
          </div>
        </Grid>
      </div>
      <Grid container direction='column' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <div>
          <div className={classes.bordered}>
            <Grid container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <div className={classes.titleLine}/>
              </div>
              <div className={classes.numberedContent}>
                <Spinner
                  sentence='YOUR SHOES ARE SAFE WITH US'
                  color='primary'
                  variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h6':'h4'}
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
                  <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h5'}>
                    {step}
                  </Typography>
                </div>
              </Grid>
            )}
          </div>
          <div className={classes.unbordered}>
            <Grid container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <Typography color='textPrimary'
                  variant='body1'
                  classes={{root:classes.numberText}}
                >
                  //
                </Typography>
              </div>
              <div className={classes.numberedContent}>
                <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h5'}>
                  Check our
                  <Link href='/terms-of-use'>
                    <a className={classes.link}>
                      {' terms of use '}
                    </a>
                  </Link>
                  for more details
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Grid>
      <div className={classes.darkSection}>
        <Grid container direction='column' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
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
            variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
            words={[
              'CLEANING',
              'PROTECTION',
              'CUSTOMISATION',
              'RESTORATION'
            ]}
          />
        </Grid>
      </div>
      <Grid container direction='column' justifyContent='space-between' alignItems='center'
        innerRef={downloadSection}
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
      <div ref={contactSection} className={classes.footer}>
        <a className={classes.media} href='https://www.google.com/maps/place/HypeGuardian/@3.0697401,101.6001784,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4dbe5360f2c9:0xe0bbcd55f4859d9c!8m2!3d3.0697347!4d101.6023724'>
          <img className={classes.mediaIcon} src='/images/place.svg'/>
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
          <img className={classes.hypegienicLogo} src='/images/hypegienic-white-logo.svg'/>
          <Typography variant='caption'
            classes={{root:classes.copyrightText}}
          >
            © 2022 HYPE X GIENIC SDN. BHD.
          </Typography>
        </div>
        <div className={classes.documents}>
          <Link href='/terms-of-use'>
            <a className={classes.document}>
              <Typography variant='body1' color='textSecondary'>
                TERMS OF USE
              </Typography>
            </a>
          </Link>
          <Link href='/privacy-policy'>
            <a className={classes.document}>
              <Typography variant='body1' color='textSecondary'>
                PRIVACY POLICY
              </Typography>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage