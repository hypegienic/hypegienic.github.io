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

import {useScreenState} from '../../store/screen'
import Spinner from '../landing-page/spinner'


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
const TermsOfUsePage:React.FunctionComponent = () => {
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
                sentence='TERMS OF USE'
                color='primary'
                variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
                classes={{root:classes.title}}
              />
            </div>
          </Grid>
          {[
            'Welcome to the HypeGienic website https://www.hypegienic.com (“Site”) and/or Mobile platform (“App”) (collectively, the “Platform”).',
            "By using HypeGienic's Service, you hereby agree that your use of the Services shall constitute your agreement to be bound by these Terms and Conditions.",
            'HypeGienic may at sole discretion amend these Terms and Conditions from time to time as it deems necessary, and such amended Terms and Conditions shall take effect and be binding on you.',
            'Your continued access and/or use of the mobile platform, website and/or services shall be understood and automatically deemed as an acknowledgement of and consent to be bound by any such amended or additional Terms and Conditions.'
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
          title: 'INTEPRETATION',
          contents: [{
            type: 'point' as const,
            point: 'In these Terms and Conditions unless the context otherwise requires the following expressions shall have the following meanings:'
          }, {
            type: 'table' as const,
            datum: [
              [
                'customer, you',
                'the person who engages our services.'
              ], [
                'account',
                'your account duly registered with us to facilitate you using the Services available on the Platform (or any of them).'
              ], [
                'intellectual property',
                'all copyrights, trademarks, service marks, brand names, logos, copyrighted information and other intellectual properties belong to us and/or our licensor, respectively.'
              ], [
                'item',
                'the relevant good(s) and/or item(s) that travel using the service which may be carried by any means HypeGienic chooses including air, road or any other carrier.'
              ], [
                'parties',
                'collectively, HypeGienic and you and “Party” shall mean any one of them.'
              ], [
                'platform',
                'collectively, the web Platform presently known as www.hypegienic.com, our Android App, iOS App and such other web Platform administered and managed by us.'
              ], [
                'HypeGienic, we, us',
                'HYPE X GIENIC SDN. BHD. (registration number 1413623-V) carrying on its business at 37-1, Jalan PJS 11/7, Bandar Sunway, 47500 Petaling Jaya, Selangor.'
              ], [
                'service',
                '(a) the Platform; (b) the services provided on the Platform.'
              ], [
                'submission',
                'any material, information or idea you provided to us by any means.'
              ], [
                'mobile platform',
                'the mobile application developed and published by HypeGienic.'
              ], [
                'website',
                'the collection of webpages hosted on https://www.hypegienic.com.'
              ], [
                'driver',
                'the individual carrying out delivery duties.'
              ], [
                'user ID',
                'the unique user identification provided to you during registration of an Account.'
              ]
            ]
          }]
        }, {
          title: 'REPRESENTATIONS AND WARRANTIES',
          contents: [{
            type: 'point' as const,
            point: 'Each time when you access the Platform (or any of them), you irrevocably and unconditionally represent and warrant that you are of Legal Age. Should you be below the Legal Age, you must get permission from a parent or legal guardian to register an Account and that parent or legal guardian must agree and have consented to these Terms and Conditions on your behalf:',
            subPoints: [
              'Your personal information and the documentation submitted in this respect, including, without limitation, your full name, telephone number, correspondence address, and email address, are true and accurate. You shall forthwith notify us in writing of any changes in your personal information; and',
              'You shall keep the password to the Account secure and confidential. You shall not at any time and under any circumstances reveal or disclose your password to the Account to any unauthorized party and shall take all steps to prevent the disclosure of the password to the Account to any unauthorized party.'
            ]
          }, {
            type: 'point' as const,
            point: 'In using our Services, you warrant that you are either the owner or the authorized representative of the owner of the Item, and that you are authorised to engage our Services and accept these Terms and Conditions for yourself or as a representative for and on behalf of the owner of the Item.'
          }]
        }, {
          title: 'USER ACCOUNT',
          contents: [{
            type: 'point' as const,
            point: 'In order to access and enjoy our Services, you are required to create and register an account with us by providing certain personal information. You hereby acknowledge and agree that we may conduct credit checks on you including but not limited to checking with registered credit bureau or reporting agency(ies) for purpose of accessing your credit worthiness and you agree to execute all consent form(s) or to provide additional document(s) necessary for such credit check(s) if so required by us.'
          }, {
            type: 'point' as const,
            point: 'In registration with us, you agree to provide accurate, current, and complete information about yourself, and to update that information if it changes; if you don’t, we have the right to close your Account. If we rely on the contents of your application and accept you to use our Services, you irrevocably agree that you shall indemnify and keep us indemnified and hold us harmless for any expense, loss or damage that we may suffer arising from any inaccurate or false statement or misrepresentation of facts submitted.'
          }]
        }, {
          title: 'USE OF SERVICE',
          contents: [{
            type: 'point' as const,
            point: 'If is your responsibility to secure the information of your Account. Any notification or confirmation received by us from your Account shall be deemed to have been issued by you notwithstanding that such notification or confirmation may have been issued by a third party, whether authorized or otherwise, and you shall be bound by such notification or confirmation.'
          }, {
            type: 'point' as const,
            point: 'We shall not be liable for acting on the notification or confirmation sent through your Account. We shall not be obliged to investigate the authenticity or authority of persons effecting the notification or confirmation or verify the completeness of such notification or confirmation. Such notification or confirmation shall be deemed irrevocable and binding on you upon receipt by us notwithstanding any error, fraud, and lack of clarity or misunderstanding in respect of the terms of such notification or confirmation.'
          }, {
            type: 'point' as const,
            point: 'We may at any time or from time-to-time sub-contract and/or appoint our subsidiaries, affiliates, related entities and/or any third party service provider(s) to operate the Platform and/or provide the Services and/or part thereof on our behalf at our absolute discretion. We shall have the rights to delegate, transfer, assign or novate, in whole or in part, our rights, benefits or obligations to our subsidiaries, affiliates, related entities or appointed third party service provider(s) without your consent and without notice to you.'
          }, {
            type: 'point' as const,
            point: 'You irrevocably and unconditionally allow and permit us to send to your Account and email updates on services and events offered or provided by us.'
          }]
        }, {
          title: 'DISCLAIMERS, EXCLUSIONS AND FORCE MAJEURE',
          contents: [{
            type: 'point' as const,
            point: 'The Platform and/or Services are provided ‘as is’ and ‘as available’ basis without any warranties, claims or representations made by us of any kind either expressed, implied or statutory, including, without limitation, warranties of quality, performance, non-infringement, or fitness for a particular purpose, nor are there any warranties created by any course of dealing. Without limiting the foregoing and to the fullest extent permitted by applicable law, we do not warrant that the Platform and/or Services or the functions contained therein will be available, accessible, uninterrupted, timely, secured, accurate, complete or error-free, that defects, if any, will be corrected, or that the Platform and/or the Server that makes the same available are free of viruses, clocks, timers, counters, worms, software locks, drop dead devices, Trojan-Horses, routings, trap doors, time bombs or any other harmful codes, instructions, programs or components.'
          }, {
            type: 'point' as const,
            point: 'Unless specifically provided otherwise in this Terms and Conditions and to the extent permitted by applicable law, in no event will we be liable for any special, incidental, indirect or consequential damages, or for any lost revenue, profits or business arising out of or in connection with this Terms and Conditions (including any breach hereof).'
          }, {
            type: 'point' as const,
            point: 'Notwithstanding anything in this Terms and Conditions, you irrevocably undertakes to keep us fully and effectively indemnified against any and all losses, costs, damages, claims, demands, actions, judgements, proceedings, liabilities, costs and expense of whatsoever nature (including but not limited to all legal costs or attorney’s fees on a full indemnity basis) that we may incur or suffer in connection with or arising from any breach (actual or alleged) by you of this Agreement, representations and warranties and/or any default by you of your obligations hereunder.'
          }, {
            type: 'point' as const,
            point: 'Each Party has a duty to mitigate any damages and/or expenses that would otherwise be recoverable from the other Party pursuant to this Agreement by taking appropriate and commercially reasonable actions to reduce or limit the amount of such damages and/or expenses.'
          }]
        }, {
          title: 'LIMITATION OF LIABILITY',
          contents: [{
            type: 'point' as const,
            point: 'HypeGienic agrees to compensate the Customer in the following circumstances, and first subject to the requirements first be fulfilled by the Customer (where applicable):',
            subPoints: [
              "The Item is lost and/or misplaced under HypeGienic's care. In such a case, HypeGienic shall notify the Customer of such loss at the earliest reasonable time.",
              "The Item is damaged under HypeGienic's care. In such a case, the Customer must make a claim to HypeGienic within 48 hours upon retrieval of Item(s) from the locker(s). Any purported claim made after the aforesaid period shall not be entertained. The request for a claim will only be valid if any such damage is corroborated with written and/or photographic proof and any other necessary documents, including original proof of completed transaction from the Platform, and a clear picture of the newly discovered damages (pictures) that were not found in the ‘before’ pictures uploaded on the Progress page of the Platform."
            ]
          }, {
            type: 'point' as const,
            point: "Subject to the above, the aggregate liability of HypeGienic shall not exceed the sum of Ringgit Malaysia One Thousand (RM1,000). The amount/value of compensation shall be based on HypeGienic's own assessment of the of the extent of the damage. The compensation will be transferred directly to your Account e-wallet in the Platform."
          }, {
            type: 'point' as const,
            point: "HypeGienic shall not be liable for any loss, damage, delay, shortage, misinformation or failure to provide information in connection with Customer's shipment and/or damage which is beyond the reasonable control of HypeGienic; resulting from of Acts of God and by the occurrence of a force majeure event including but not limited to:",
            subPoints: [
              'Severe weather',
              'Fire and flood',
              'War, rebellion, sabotage, riot, terrorism',
              'Strike or industrial dispute of whatsoever nature',
              'Act or omission of local or overseas public authority and changes in applicable law',
              'Movement control by the Government',
              'Pandemic'
            ]
          }]
        }, {
          title: 'SUSPENSION, TERMINATION, CANCELLATION OF SERVICES',
          contents: [{
            type: 'point' as const,
            point: 'The Services (or any part thereof) may be cancelled by us at any time without prior notice to you. After cancellation, the Services (or any part thereof) may be reinstated in such manner and on such Terms and Conditions as we may at our absolute discretion determine.'
          }, {
            type: 'point' as const,
            point: 'You may deactivate your Account at any time you notify us of your desire to do so, subject always to a closure fee as chargeable by us on you, if any.'
          }, {
            type: 'point' as const,
            point: 'We reserve the right at all times to suspend or block access to and use of the Services (or any part thereof) for any reason whatsoever and for any length of time and upon any conditions that we may at its absolute discretion determine. Grounds for suspension or termination may include, but not limited to:',
            subPoints: [
              'The Account has been inactive for a consecutive period of 36 months.',
              'Having multiple user accounts or allowing unauthorized persons to access and use the Account.',
              'In our opinion, there is dishonesty, suspected fraud, illegality, criminality or misrepresentation in the conduct of your Account or your use of the Platform and/or Services.',
              'You are in breach or we have reasonable grounds to believe that you have breached any of these Terms and Conditions and/or any applicable terms and conditions as may be provided by us from time-to-time, or have engaged in any conduct prejudicial to us or in our opinion, your acts are prejudicial to our interest.',
              'You are in breach of any acts, statute, laws, by-laws, rules, regulations, guidelines and/or policies by any authority, regulatory body or government agency.',
              'You have acted in bad faith or with malicious intent, or that we have reasonable grounds to believe that your behaviour is harmful, of defamatory nature or abusive to other user, third parties and/or us.',
              'Your name is listed under any regulatory watchlist (including but not limited to listing related to terrorism and terrorism financing under the Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLATFPUAA) and/or related to bribery and corruption under the Malaysian Anti-Corruption Commission Act 2009 (MACCA) and/or such other local, foreign or international laws and regulations of similar nature.',
              'If we are required to do so pursuant to an order of a court or by any governmental or regulatory authority having the relevant jurisdiction.',
              'You have submitted false documents or have declared false information during your registration with or application to us.',
              'You fail to provide any additional information which we may request from you from time-to-time for verification purposes.'
            ]
          }, {
            type: 'point' as const,
            point: 'Use of the Platform, Services and/or Account for suspicious, fraudulent, illegal, harassing, defamatory, threatening or abusive purposes may be referred by us to the relevant law enforcement authorities without notice to you.'
          }, {
            type: 'point' as const,
            point: 'Upon cancellation or termination of the Services (or any part thereof):',
            subPoints: [
              'All unused credits will be deemed to have expired immediately and be removed from your Account. We will assist you with the refund of unutilized credits balance in your Account, subject to the Terms and Conditions here and any such terms and conditions as we may determine.',
              'You shall immediately pay to us all outstanding fees and charges due and owing to us, failing which we shall have full discretion to commence civil actions against you, including without limitation, a claim for damages, specific performance and/or interim or injunctive relief.',
              'You hereby irrevocably and unconditionally authorise us to deduct all money due and owing by you to us (if any).'
            ]
          }, {
            type: 'point' as const,
            point: 'Further to the above, in the event that your access and/or utilization of the Platform and/or Services is suspended, ceased or terminated by us due to suspicious, fraudulent, illegal or unlawful transactions including but not limited to breaches of any law (including but not limited to the Financial Services Act 2013, AMLATFPUAA and/or MACCA or any rules, regulations, policies and/or guidelines made thereunder), you will not be able to continue to utilize your credits and shall not be entitled to obtain any money or refund whatsoever. It shall be lawful for us to retain for an indefinite period, or deal at our own discretion with, or release to the relevant authorities, any money or refund in accordance with applicable legislations, rules, regulation and/or guidelines. You shall not be entitled to claim any form of compensation for any loss arising therefrom.'
          }]
        }, {
          title: 'INTELLECTUAL PROPERTY RIGHTS',
          contents: [{
            type: 'point' as const,
            point: 'We grant you a limited and revocable licence to access and use the incidental software provided by us to you via the Platform as part of the Services. Use of such software is subjected to these Terms and Conditions. Any third party scripts or code, linked to or referenced from the Services, are licensed to you by the third parties that own such scripts or code. You shall not, directly or indirectly, modify the features or functionality of, copy or create derivative works using all or any portion of, analyse or remove components from, decompile, or otherwise reverse engineer or attempt to reverse engineer or derive source code, techniques, algorithms or processes from the software or permit or encourage any third party to do so.'
          }, {
            type: 'point' as const,
            point: 'All Intellectual Property displayed on the Platform are the exclusive property of HypeGienic and where applicable, third party proprietors. No right or licence is granted directly or indirectly to any party accessing the Platform to use or reproduce any Intellectual Property, and no party accessing the Platform shall claim any right, title or interest therein. By using or accessing the Services, you agree to comply with the copyrights, trademarks, applicable intellectual property related legislations and all other applicable laws that protect the Services and the Platform. You agree not to copy, distribute, republish, transmit, publicly display, publicly perform, modify, adapt, rent, sell or create derivative works of any portion of the Services and the Platform. You also may not, unless with our prior written consent, mirror or frame any part or whole of the contents of the Platform on any other server or as part of any other website.'
          }, {
            type: 'point' as const,
            point: 'Any Submission is not considered confidential by us and may be disseminated or used by us without compensation or liability to you for any purpose whatsoever, including, but not limited to, developing and marketing goods. By making a Submission to us, you acknowledge and agree that we and/or other third parties may independently develop software, applications, interfaces, goods and modifications and enhancements of the same which are identical or similar in function, code or other characteristics to the ideas set out in your Submission. Accordingly, you hereby grant to us and our successors a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, sub-licensable and transferable licence to develop the goods identified above, and to use, copy, distribute, republish, transmit, modify, adapt, create derivative works of, publicly display, and publicly perform any Submission on, through or in connection with the Services in any media formats and through any media channels, including, without limitation, for promoting and redistributing part of the Services (and its derivative works). This provision does not apply to personal information that is subject to our Privacy Policy except to the extent that you make such personal information publicly available on or through the Services.'
          }]
        }, {
          title: 'NOTICE',
          contents: [{
            type: 'point' as const,
            point: 'All notices, demands, requests or other communications to be given or made under these Terms and Conditions shall be in writing, and shall be sufficiently given or made to the other party by serving such notice at or sending such notice by hand, registered post or electronic mail to the contact details as notified by one party to the other from time-to-time or via the communication channel made available on the Platform.'
          }, {
            type: 'point' as const,
            point: 'Notice shall be deemed given:',
            subPoints: [
              'In the case of hand delivery, upon the receipt of written acknowledgment signed by the recipient.',
              'In the case of registered post, five (5) business days after posting.',
              'In the case of email or the communication channel available on the Platform, on the day of transmission provided that the sender has not received a failed or undeliverable message from the host provider of the recipient within the day of transmission.',
              'Notices placed through any media.',
              'Any manner of notifications as we may at its absolute discretion determine.'
            ]
          }, {
            type: 'point' as const,
            point: 'Notwithstanding the above and in addition to the above methods of delivery, any notice or document or communication given by us to you shall be deemed to be served in the following manner:',
            subPoints: [
              'Posting the notice or communication in the platform.',
              'Notices placed through any media.',
              'Any manner of notifications as we may at its absolute discretion determine.'
            ]
          }]
        }, {
          title: 'DISCLOSURE OF INFORMATION',
          contents: [{
            type: 'point' as const,
            point: 'We shall be entitled and you irrevocably and unconditionally consents and authorises us to the extent permitted by law, to disclose or release any information pertaining to you or your transactions through the Platform to such extent that we may at its absolute discretion deem fit to:',
            subPoints: [
              'Such persons as we may be required to disclose under the applicable law.',
              'Such other persons or entity pursuant to any governmental directive or order of the court.',
              'Enforce these Terms and Conditions.',
              'Respond to your requests for customer service.',
              'Any other party whomsoever as we deem fit.'
            ]
          }, {
            type: 'point' as const,
            point: 'Save as otherwise permitted in these Terms and Conditions, we will not disclose your personal information to any other party without prior notification to you.'
          }]
        }, {
          title: 'WAIVER AND SEVERANCE',
          contents: [{
            type: 'point' as const,
            point: 'Any failure by us to enforce at any time or for any period any one or more of these Terms and Conditions shall not be a waiver of them or of the right at any time subsequently to enforce these Terms and Conditions.'
          }, {
            type: 'point' as const,
            point: 'In the event that any provisions of these Terms and Conditions is declared by any judicial or other competent authority to be void, voidable, illegal or otherwise unenforceable, we shall amend that provision in such reasonable manner as would achieve the intention or at our discretion it may be severed from these Terms and Conditions and the remaining provisions remain in full force and effect.'
          }]
        }, {
          title: 'APPLICABLE LAWS AND INDEMNITY',
          contents: [{
            type: 'point' as const,
            point: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of Malaysia. Any dispute, legal action or proceeding arising out of or in connection with these Terms and Conditions shall be submitted to the jurisdiction of the Malaysian courts, unless we in our own discretion chooses to submit the same for settlement via arbitration in Malaysia or otherwise.'
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

export default TermsOfUsePage