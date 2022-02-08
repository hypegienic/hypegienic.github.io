import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ResizeObserver from 'resize-observer-polyfill'

const useStyles = makeStyles((theme:Theme) => {
  const tagLineBorderWidth = 4
  const tagLineBorderColor = {
    fore: theme.palette.text.primary,
    hide: theme.palette.text.primary,
    back: theme.palette.text.secondary
  }
  return {
    container: {
      maxWidth: '100%',
      padding: '32px 0',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        padding: '24px 0',
      }
    },
    tagLine: {
      position: 'relative',
      display: 'flex',
      width: '540px',
      maxWidth: '100%'
    },
    tagLineBackground: {
      flex: 1,
      position: 'relative',
      backgroundColor: 'rgb(255, 255, 255)',
      padding: '16px 24px',
      zIndex: 100
    },
    tagLineBorderTop: {
      position: 'absolute',
      height: '100%',
      width: `calc(30% + ${tagLineBorderWidth}px)`,
      top: '0',
      left: '0',
      borderWidth: [1, 0, 1, 1].map(weight => `${weight * tagLineBorderWidth}px`).join(' '),
      borderStyle: 'solid',
      borderColor: tagLineBorderColor.fore,
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        borderWidth: [1, 0, 1, 1].map(weight => `${weight * tagLineBorderWidth * 3 / 4}px`).join(' ')
      }
    },
    tagLineBorderRight: {
      position: 'absolute',
      height: '60%',
      width: '70%',
      bottom: '0',
      right: '0',
      overflow: 'hidden',
      '&:after, &:before': {
        content: "''",
        position: 'absolute',
        width: `100%`,
        left: '0',
        borderStyle: 'solid',
        borderColor: tagLineBorderColor.fore,
        zIndex: -1
      },
      '&:before': {
        height: '16px',
        bottom: '0',
        borderWidth: [0, 1, 1, 0].map(weight => `${weight * tagLineBorderWidth}px`).join(' '),
        transform: 'skew(135deg)',
        transformOrigin: 'top left',
      },
      '&:after': {
        height: `calc(100% - 16px)`,
        top: '0',
        borderWidth: [0, 1, 0, 0].map(weight => `${weight * tagLineBorderWidth}px`).join(' ')
      },
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        borderWidth: [0, 1, 1, 0].map(weight => `${weight * tagLineBorderWidth * 3 / 4}px`).join(' '),
        '&:before': {
          height: '12px',
          borderWidth: [0, 1, 1, 0].map(weight => `${weight * tagLineBorderWidth * 3 / 4}px`).join(' ')
        },
        '&:after': {
          height: `calc(100% - 12px)`,
          borderWidth: [0, 1, 0, 0].map(weight => `${weight * tagLineBorderWidth * 3 / 4}px`).join(' ')
        }
      }
    },
    content: {
      position: 'relative',
      width: '100%',
      marginBottom: '8px'
    },
    tagLineContent: {
      position: 'absolute',
      left: '0',
      width: '100%'
    },
    placeholderContent: {
      opacity: 0
    },
    quoteText: {
      position: 'absolute',
      top: '-32px',
      right: '0',
      fontWeight: 800,
      fontSize: '80px',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        top: '-24px',
        fontSize: '60px'
      }
    },
    tagLineText: {
      fontWeight: 800,
      fontSize: '44px',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        fontSize: '32px'
      }
    },
    secondaryTagLineContainer: {
      width: '100%',
      padding: '2px 16px',
    },
    secondaryTagLineText: {
      textAlign: 'right',
      fontWeight: 600,
      fontSize: '28px',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        fontSize: '21px'
      }
    },
    secondaryTagLineBackground: {
      position: 'relative',
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
        height: '10px',
        bottom: '0',
        transform: 'skew(135deg)',
        transformOrigin: 'top left',
      },
      '&:after': {
        height: 'calc(100% - 10px)',
        top: '0'
      },
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        '&:before': {
          height: '8px'
        },
        '&:after': {
          height: 'calc(100% - 8px)'
        },
      }
    },
    tagLineLetter: {
      position: 'relative',
      '&:after': {
        content: 'attr(data-txt)',
        color: theme.palette.primary.main.replace(
          /rgb\((\d*),\s?(\d*),\s?(\d*)\)/,
          'rgba($1, $2, $3, 0.5)'
        ),
        position: 'absolute',
        top: 0,
        left:0,
        opacity: 0,
        willChange: 'transform, opacity'
      }
    },
    '@keyframes shuffling': {
      '0%': {
        opacity: 1,
        transform: 'translateX(10px) scaleX(2)'
      },
      '50%': {
        opacity: 0,
        transform: 'translateX(0) scaleX(2)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(-10px) scaleX(2)'
      }
    },
    shufflingLetter: {
      opacity: 0.3,
      '&:after': {
        animation: '$shuffling 400ms infinite alternate'
      }
    },
    '@keyframes animateStripeBackground': {
      from: {backgroundPosition:'0 0'},
      to: {backgroundPosition:'50.91px 50.91px'},
    },
    stripeBackground: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: '-24px',
      bottom: '-24px',
      animation: '$animateStripeBackground 10s linear infinite',
      backgroundImage: `linear-gradient(${[
        '135deg',
        ...(() => {
          const color1 = theme.palette.primary.main
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
      backgroundSize: '50.91px 50.91px',
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        left: '-16px',
        bottom: '-16px',
      }
    }
  }
})
const Header:React.FunctionComponent = () => {
  const [state, setState] = React.useState<HeaderState>({
    active: 0,
    tagline: {
      primary: [],
      secondary: []
    },
    placeholder: {
      primary: '',
      secondary: ''
    },
    placeholderHeight: {
      primary: 0,
      secondary: 0
    }
  })
  const primaryContainerRef = React.useRef()
  const secondaryContainerRef = React.useRef()
  const createTextShuffler = () => {
    let animationFrame:number
    const shufflingCharacters = '!<>-_\\/[]{}—=+*^?#________'
    type Frame = {
      from: string
      to: string
      start: number
      end: number
      current?: string
    }
    const shuffling = (
      frame: number,
      letters: HeadLine<Frame[]>,
      resolve: () => void
    ) => () => {
      const mapLetters = (letters:Frame[]) => letters.map(letter =>
        frame >= letter.start && frame < letter.end &&
        (!letter.current || Math.random() < 0.28)
          ? {
              ...letter,
              current: shufflingCharacters[Math.floor(Math.random() * shufflingCharacters.length)]
            }
          : letter
      )
      const nextLetters = {
        primary: mapLetters(letters.primary),
        secondary: mapLetters(letters.secondary)
      }
      const mapTagline = (letters:Frame[]) => letters.map(letter =>
        frame < letter.start
          ? {text:letter.from, shuffling:false}
          : frame >= letter.end
          ? {text:letter.to, shuffling:false}
          : {text:letter.current ?? ' ', shuffling:true}
      )
      const nextTagline = {
        primary: mapTagline(nextLetters.primary),
        secondary: mapTagline(nextLetters.secondary)
      }
      setState(state => ({
        ...state,
        tagline: nextTagline
      }))
      if(
        letters.primary.map(letter => letter.to).join('') === nextTagline.primary.map(letter => letter.text).join('') &&
        letters.secondary.map(letter => letter.to).join('') === nextTagline.secondary.map(letter => letter.text).join('')
      ) {
        resolve()
      } else {
        animationFrame = requestAnimationFrame(shuffling(frame + 1, nextLetters, resolve))
      }
    }
    return (tagline:HeadLine<string>) => {
      const {tagline:oldTagline} = state
      if(animationFrame) cancelAnimationFrame(animationFrame)
      let resolve:() => void
      const promise = new Promise<void>(r => resolve = r)
      setState(state => ({
        ...state,
        placeholder: tagline
      }))
      const generateFrames = (from:string, to:string) =>
        Array(Math.max(from.length, to.length))
          .fill(undefined).map((_, index) => {
            const start = Math.floor(Math.random() * 40)
            return {
              from: from[index]?? '',
              to: to[index]?? '',
              start,
              end: start + Math.floor(Math.random() * 40)
            }
          })
      shuffling(0, {
        primary: generateFrames(
          oldTagline.primary.map(letter => letter.text).join(''),
          tagline.primary
        ),
        secondary: generateFrames(
          oldTagline.secondary.map(letter => letter.text).join(''),
          tagline.secondary
        )
      }, resolve)()
      return promise
    }
  }
  const headlines = [{
    primary: 'YOUR DIRTY SHOES DESERVES A SECOND CHANCE',
    secondary: 'GET EM CLEANED TODAY'
  }, {
    primary: 'THE FUTURE OF SHOE CARE INDUSTRY',
    secondary: 'TRY IT OUT NOW'
  }]
  const textShuffle = createTextShuffler()
  const forwardHeadline = async() => {
    const {active} = state
    await textShuffle(headlines[active])
    setState(state => ({
      ...state,
      active: (active + 1) % headlines.length
    }))
  }
  React.useEffect(() => {
    forwardHeadline()
  }, [])
  React.useEffect(() => {
    const interval = setTimeout(forwardHeadline, 5000)
    return () => clearTimeout(interval)
  }, [state.active])
  const useObserver = (ref:React.MutableRefObject<any>, onChange:(rect:any) => void) => 
    React.useEffect(() => {
      const resizeObserver = new ResizeObserver(([entry]) => {
        if(entry) onChange(entry.contentRect)
      })
      resizeObserver.observe(ref.current)
      return () =>
        resizeObserver.unobserve(ref.current)
    }, [ref.current])
  useObserver(primaryContainerRef, rect =>
    setState((state) => ({...state, placeholderHeight: {
      ...state.placeholderHeight,
      primary: rect.height
    }}))
  )
  useObserver(secondaryContainerRef, rect =>
    setState((state) => ({...state, placeholderHeight: {
      ...state.placeholderHeight,
      secondary: rect.height
    }}))
  )

  const {tagline, placeholder, placeholderHeight} = state
  const classes = useStyles({})
  const renderShufflingLetters = (texts:ShufflingText[]) =>
    texts.reduce((letters, letter) => {
      const previousLetter = letters.slice(-1)[0]
      return previousLetter
        && !previousLetter.shuffling && !letter.shuffling
        ? [...letters.slice(0, -1), {
            text: previousLetter.text + letter.text,
            shuffling: false
          }]
        : [...letters, letter]
    }, [])
    .map((letter, index) => (
      <span key={index}
        className={[
          classes.tagLineLetter,
          letter.shuffling? classes.shufflingLetter:''
        ].join(' ')}
        {...{'data-txt':letter.text}}
      >
        {letter.text}
      </span>
    ))
  return (
    <div className={classes.container}>
      <div className={classes.tagLine}>
        <div className={classes.tagLineBackground}>
          <div className={classes.tagLineBorderTop}/>
          <div className={classes.tagLineBorderRight}/>
          <Typography className={classes.quoteText}>
            ”
          </Typography>
          <div className={classes.content}>
            <div className={classes.tagLineContent}>
              <Typography color='textPrimary' className={classes.tagLineText}>
                {renderShufflingLetters(tagline.primary)}
              </Typography>
            </div>
            <div ref={primaryContainerRef}
              className={[classes.placeholderContent, classes.tagLineContent].join(' ')}
            >
              <Typography className={classes.tagLineText}>
                {placeholder.primary}
              </Typography>
            </div>
            <div style={{
              height: placeholderHeight.primary,
              transition: 'height 300ms ease-in-out'
            }}/>
          </div>
          <div className={classes.content}>
            <div className={[classes.tagLineContent, classes.secondaryTagLineContainer].join(' ')}>
              <Typography color='textSecondary' className={classes.secondaryTagLineText}>
                {renderShufflingLetters(tagline.secondary)}
              </Typography>
            </div>
            <div ref={secondaryContainerRef}
              className={[classes.placeholderContent, classes.tagLineContent, classes.secondaryTagLineContainer].join(' ')}
            >
              <Typography className={classes.secondaryTagLineText}>
                {placeholder.secondary}
              </Typography>
            </div>
            <div className={classes.secondaryTagLineBackground} style={{
              height: placeholderHeight.secondary + 4,
              transition: 'height 300ms ease-in-out'
            }}/>
          </div>
        </div>
        <div className={classes.stripeBackground}/>
      </div>
    </div>
  )
}
type HeaderState = {
  active: number
  tagline: HeadLine<ShufflingText[]>
  placeholder: HeadLine<string>
  placeholderHeight: HeadLine<number>
}
type HeadLine<T> = {
  primary: T
  secondary: T
}
type ShufflingText = {
  text: string
  shuffling: boolean
}

export default Header