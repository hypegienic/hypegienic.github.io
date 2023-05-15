import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {useScreenState} from '../../stores/screen'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  stripeContainer: {
    height: '40px',
    padding: '8px 0',
    margin: '0 8px',
    display: 'flex',
    flexDirection: 'row',
    borderTop: '3px solid rgb(0, 0, 0)'
  },
  '@keyframes animateStripeBackground': {
    from: {backgroundPosition:'50.91px 0'},
    to: {backgroundPosition:'0 50.91px'},
  },
  stripeBackground: {
    flex: 1,
    animation: '$animateStripeBackground 10s linear infinite',
    backgroundImage: `linear-gradient(${[
      '45deg',
      ...(() => {
        const color1 = 'rgb(0, 0, 0)'
        const color2 = 'rgba(255, 255, 255, 0)'
        let index = 0
        let colors:string[] = []
        for(let percentage = 25; percentage <= 100; percentage += 25) {
          colors.push(
            `${index % 2 === 0? color1:color2} ${percentage}%`,
            percentage !== 100? `${index % 2 === 0? color2:color1} ${percentage}%`:undefined
          )
          index++
        }
        return colors.filter(color => !!color)
      })()
    ].join(', ')})`,
    backgroundSize: '50.91px 50.91px'
  },
  flipped: {
    '&$stripeBackground': {
      transform: 'scaleX(-1)'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '6px 16px',
    backgroundColor: 'rgb(0, 0, 0)'
  },
  media: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2px 16px',
    textDecoration: 'none'
  },
  mediaIcon: {
    height: '24px',
    marginRight: '6px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      height: '18px',
      marginRight: '4px'
    }
  }
}))
const Footer:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <div className={classes.stripeContainer}>
        <div className={classes.stripeBackground}/>
        <div className={[classes.stripeBackground, classes.flipped].join(' ')}/>
      </div>
      <div className={classes.content}>
        <a className={classes.media} href='tel:+601126142614'>
          <img className={classes.mediaIcon} src='/images/phone.svg'/>
          <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'caption':'body1'}>
           +6011-2614 2614
          </Typography>
        </a>
        <a className={classes.media} href='https://www.facebook.com/hypeguardianmy/'>
          <img className={classes.mediaIcon} src='/images/facebook.svg'/>
          <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'caption':'body1'}>
            hypeguardianmy
          </Typography>
        </a>
        <a className={classes.media} href='https://www.instagram.com/hypeguardianmy'>
          <img className={classes.mediaIcon} src='/images/instagram.svg'/>
          <Typography color='textSecondary' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'caption':'body1'}>
            hypeguardianmy
          </Typography>
        </a>
      </div>
    </div>
  )
}

export default Footer