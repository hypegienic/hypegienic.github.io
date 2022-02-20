import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import {useScreenState} from '../src/stores/screen'
import Spinner from '../src/components/landing-page/spinner'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    minHeight: '100vh',
    padding: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '16px',
    },
    ['& $bordered:not(:last-child)']: {
      borderBottom: 'none'
    }
  },
  bordered: {
    maxWidth: '100%',
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
    width: '16px',
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
  titleColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    marginBottom: '8px',
    width: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      marginBottom: '6px'
    },
    ['& $numberLine:after']: {
      borderColor: theme.palette.primary.main
    }
  },
  numberColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    marginBottom: '8px',
    width: '28px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '6px',
      marginBottom: '6px'
    }
  },
  unnumberedLine: {
    flex: 1,
    position: 'relative',
    width: '16px',
    minHeight: '2px',
    margin: '4px 0',
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      margin: '3px 0'
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
  numberText: {
    width: '16px',
    fontFamily: 'Exan, Monaco, monospace',
    fontWeight: 600,
    marginBottom: '2px',
  },
  numberLine: {
    flex: 1,
    position: 'relative',
    width: '16px',
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
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: '6px',
    marginBottom: '6px',
    overflowX: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      marginTop: '4px',
      marginBottom: '4px'
    }
  },
  table: {
    marginRight: '6px',
    ['& table']: {
      borderCollapse: 'collapse'
    },
    ['& table td']: {
      verticalAlign: 'top',
      padding: '8px 12px',
      borderWidth: '2px',
      borderColor: theme.palette.text.primary,
      borderStyle: 'solid'
    }
  }
}))
const PrivacyPolicyPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const classes = useStyles({})

  React.useEffect(() => {
    document.body.style.backgroundColor = 'white'
  }, [])

  const padLeft = (content:string | number, width:number) => {
    const string = content.toString()
    return `${Array(width - string.length).fill('0').join('')}${string}`
  } 
  const displaySections = (section:Section, index:number) => (
    <div key={index} className={classes.bordered}>
      <Grid container direction='row' alignItems='stretch'>
        <div className={classes.titleColumn}>
          <Typography color='primary'
            variant='caption'
            align='right'
            classes={{root:classes.numberText}}
          >
            {padLeft(index + 1, 2)}
          </Typography>
          <div className={classes.numberLine}/>
        </div>
        <div className={classes.numberedContent}>
          <Spinner
            sentence={section.title}
            color='primary'
            variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
            classes={{root:classes.title}}
          />
        </div>
      </Grid>
      {section.contents.map((content, index) =>
        content.type === 'table'
          ? (
              <Grid container direction='row' alignItems='stretch'>
                <div className={classes.numberColumn}/>
                <div className={classes.numberedContent}>
                  <TableContainer className={classes.table}>
                    <Table><TableBody>
                      {content.datum.map((row, index) =>
                        <TableRow key={index}>
                          {row.map((data, index) =>
                            <TableCell key={index}>
                              <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}>
                                {data}
                              </Typography>
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody></Table>
                  </TableContainer>
                </div>
              </Grid>
            )
          : (
              <React.Fragment key={index}>
                <Grid container direction='row' alignItems='stretch'>
                  <div className={classes.numberColumn}>
                    <Typography color='textPrimary'
                      variant='caption'
                      align='right'
                      classes={{root:classes.numberText}}
                    >
                      {padLeft(index + 1, 2)}
                    </Typography>
                    <div className={classes.numberLine}/>
                  </div>
                  <div className={classes.numberedContent}>
                    <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}>
                      {content.point}
                    </Typography>
                  </div>
                </Grid>
                {content.subPoints?.map((point, index) =>
                  <Grid key={index} container direction='row' alignItems='stretch'>
                    <div className={classes.numberColumn}/>
                    <div className={classes.numberColumn}>
                      <Typography color='textPrimary'
                        variant='caption'
                        align='right'
                        classes={{root:classes.numberText}}
                      >
                        {padLeft(String.fromCharCode(97 + index), 2)}
                      </Typography>
                      <div className={classes.numberLine}/>
                    </div>
                    <div className={classes.numberedContent}>
                      <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}>
                        {point}
                      </Typography>
                    </div>
                  </Grid>
                )}
              </React.Fragment>
            )
      )}
    </div>
  )
  return (
    <div className={classes.container}>
      <Grid container direction='column' justifyContent='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <div className={classes.bordered}>
          <Grid container direction='row' alignItems='stretch'>
            <div className={classes.titleColumn}>
              <div className={classes.titleLine}/>
            </div>
            <div className={classes.numberedContent}>
              <Spinner
                sentence='PERSONAL DATA AND PRIVACY POLICY'
                color='primary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
                classes={{root:classes.title}}
              />
            </div>
          </Grid>
          {[
            'This Privacy Notice describe how we, (HYPE X GIENIC SDN. BHD.) and our respective subsidiaries and associated companies (collectively, “HypeGienic”, “we”, “us” or “our”) collect, use, process, and disclose your Personal Data (defined below) through the use of our HypeGienic website https://www.hypegienic.com/ (“Site”) and/or Mobile platform (“App”) (collectively, “Platform”).',
            'This Notice applies to our consumers, agents, vendors, suppliers, partners (driver and/or merchant partner), contractors and service providers (collectively “you”).',
            '“Personal Data” is any information which can be used to identify you or from which you are identifiable. This includes but not limited to your name, nationality, telephone number, device ID, bank and credit card details, email address, your image, government-issued identification numbers, race, date of birth, and vehicle and insurance information).'
          ].map(step => 
            <Grid key={step} container direction='row' alignItems='stretch'>
              <div className={classes.numberColumn}>
                <div className={classes.unnumberedLine}/>
              </div>
              <div className={classes.numberedContent}>
                <Typography color='textPrimary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'body1':'h6'}>
                  {step}
                </Typography>
              </div>
            </Grid>
          )}
        </div>
        {[{
          title: 'COLLECTION OF PERSONAL DATA',
          contents: [{
            type: 'point' as const,
            point: 'We collect Personal Data about you in the ways listed below. We collect your Personal Data when you voluntarily provide it to us.'
          }, {
            type: 'point' as const,
            point: 'We may collect your Personal Data through these means (but not limited thereto):',
            subPoints: [
              'complete a user profile or registration forms (such as your name, contact information and other identification information as required);',
              'interact with our social media pages;',
              'interact with our Platform;',
              'participate in contests or events organised by us;',
              'verify your identity through various means (such as social media logins, submission of images).'
            ]
          }, {
            type: 'point' as const,
            point: 'In certain circumstances, you may need to provide your Personal Data in order to comply with legal requirements or contractual obligations, or where it is necessary to conclude a contract. Failure to provide such Personal Data, under such circumstances as determined by us, may constitute a failure to comply with legal requirements or contractual obligations, or inability to conclude a contract with you, as the case may be.'
          }, {
            type: 'point' as const,
            point: 'If you are a driver partner, we may collect:',
            subPoints: [
              'telematics data (such as your speed, acceleration, and braking data);',
              'device data (such as accelerometer data, GPS location);',
              'your vehicle registration data; and',
              'personal data that may be captured through your interaction with us or our agents.'
            ]
          }, {
            type: 'point' as const,
            point: 'As a parent or legal guardian, please do not allow minors under your care to submit Personal Data to us. In the event that such Personal Data of a minor is disclosed to us, you hereby consent to the processing of the minor’s Personal Data and accept and agree to be bound by this Notice and take responsibility for his or her actions.'
          }]
        }, {
          title: 'USE OF PERSONAL DATA',
          contents: [{
            type: 'point' as const,
            point: 'You consent to HypeGienic using your Personal Data as provided by you to HypeGienic from time to time when you use the Platform.'
          }, {
            type: 'point' as const,
            point: 'Your Personal Data will be used for the following purpose (including but not limited thereto):',
            subPoints: [
              'provide you with our Services (defined in Terms and Condition);',
              'engage you to provide Services;',
              'create, administer and update your account;',
              'conduct due diligence checks and risk assessments;',
              'verify your identity; and',
              'make your experience more seamless.'
            ]
          }, {
            type: 'point' as const,
            point: 'We may use the Personal Data to investigate and resolve claims or disputes, or as allowed or required by the applicable law. We may use Personal Data without consent, as allowed or required by the applicable law, for purposes such as detection and prevention of fraud. We may also use the Personal Data where we are required, advised, recommended, expected or requested to do so by our legal advisors or other regulatory or government authorities. We may use your Personal Data to:',
            subPoints: [
              'comply with court orders or other legal, governmental or regulatory requirements;',
              'enforce our Terms or other agreements;',
              'protect our rights or property in the event of a claim or dispute.'
            ]
          }, {
            type: 'point' as const,
            point: 'We may also use your Personal Data in connection with mergers, acquisitions, joint ventures, sale of company assets, consolidation, restructuring, financing, business asset transactions, or acquisition of all or part of our business by another company.'
          }, {
            type: 'point' as const,
            point: 'We may use your Personal Data for marketing purposes. If you wish to unsubscribe to the processing of your Personal Data for marketing and promotions, please click on the subscribe link in the relevant email or messages.'
          }]
        }, {
          title: 'DISCLOSURE OF PERSONAL DATA',
          contents: [{
            type: 'point' as const,
            point: 'We need to share Personal Data with various parties in connection with our Services.'
          }, {
            type: 'point' as const,
            point: 'We may disclose your Personal Data to the drivers of the participating vehicles as may be necessary, including, without limitation for the purposes of acceptance of delivery by a vehicle’s driver, confirmation/clarification of the booking information between you and the driver.'
          }, {
            type: 'point' as const,
            point: 'HypeGienic may disclose to you Personal Data belonging to another individual during the provision of the Services. You represent and warrant that you shall not use the Personal Data of such individual for any purpose other than for purposes of using the Services.'
          }]
        }, {
          title: 'RETENTION OF PERSONAL DATA',
          contents: [{
            type: 'point' as const,
            point: 'We retain your Personal Data for the period necessary to fulfil the Services unless a longer retention period is required or allowed by law. Once your Personal Data is no longer necessary for the Services, or we no longer have a legal or business purpose for retaining your Personal Data, we take steps to erase, destroy, anonymise or prevent access or use of such Personal Data for any purpose other than compliance with this Notice, or for purposes of safety, security, fraud prevention and detection, in accordance with the requirements of applicable laws.'
          }, {
            type: 'point' as const,
            point: 'We will take reasonable legal, organisational and technical measures to ensure that your Personal Data is protected. This includes measures to prevent Personal Data from getting lost, or used or accessed in an unauthorised way. We limit access to your Personal Data to our employees on a need to know basis. Those processing your Personal Data will only do so in an authorised manner and are required to treat your information with confidentiality. Nevertheless, please understand that the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your Personal Data transmitted through any online means, therefore, any transmission remains at your own risk.'
          }, {
            type: 'point' as const,
            point: 'In accordance with the applicable laws and regulations, you may be entitled to:',
            subPoints: [
              'ask us about the processing of your Personal Data, including to be provided with a copy of your Personal Data;',
              'request the correction and/or (in some cases) deletion of your Personal Data;',
              'in some cases, request the restriction of the processing of your Personal Data, or object to that processing;',
              'withdraw your consent to the processing of your Personal Data (where we are processing your Personal Data based on your consent);',
              'complain to the relevant data privacy authority if your data privacy rights are violated, or if you have suffered as a result of unlawful processing of your Personal Data.'
            ]
          }, {
            type: 'point' as const,
            point: 'Where you are given the option to share your Personal Data with us, you can always choose not to do so. If we have requested your consent to processing and you later choose to withdraw it, we will respect that choice in accordance with our legal obligations. However, choosing not to share your Personal Data with us or withdrawing your consent to our use of it could mean that we are unable to perform the actions necessary to provide our Services.'
          }, {
            type: 'point' as const,
            point: 'To withdraw consent from us collecting your data, you may email us at support@hypegienic.com. We will process such requests accordingly. You agree that by your withdrawal of consent, you may not be able to continue using our Services in full or have full access to our Platform and we may terminate the contract you have with us. We will liaise with you if we are unable to verify your identity or understand your instructions.'
          }]
        }].map(displaySections)}
      </Grid>
    </div>
  )
}
type Section = {
  title: string
  contents: (
    | {
        type: 'point'
        point: string
        subPoints?: string[]
      }
    | {
        type: 'table',
        datum: string[][]
      }
  )[]
}

export default PrivacyPolicyPage