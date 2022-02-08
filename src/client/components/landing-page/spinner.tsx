import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography, {TypographyProps} from '@material-ui/core/Typography'

const useStyles = makeStyles((theme:Theme) => ({
  text: {
    overflow: 'hidden'
  },
  container: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    color: 'transparent'
  },
  innerContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    transition: 'top 600ms',
    pointerEvents: 'none'
  }
}))
const Spinner:React.FunctionComponent<SpinnerProps> = (props) => {
  const {sentence, ...typoProps} = props
  const words = sentence.split(' ')
  const [state, setState] = React.useState<SpinnerState>({
    locations: words.map(word =>
      Math.floor(Math.random() * 5)
    )
  })
  const shuffleLocation = () => {
    const {locations} = state
    setState({
      locations: locations.map(location =>
        Math.random() <= 0.25
          ? Math.floor(Math.random() * 5)
          : location
      )
    })
  }
  React.useEffect(() => {
    const {sentence} = props
    const words = sentence.split(' ')
    setState({
      locations: words.map(word =>
        Math.floor(Math.random() * 5)
      )
    })
  }, [props.sentence])
  React.useEffect(shuffleLocation, [])
  React.useEffect(() => {
    const interval = setTimeout(shuffleLocation, Math.random() * 1800 + 600)
    return () => clearTimeout(interval)
  }, [state.locations])

  const {locations} = state
  const classes = useStyles({})
  return (
    <Typography {...typoProps} classes={{
      ...typoProps.classes,
      root: [typoProps.classes.root, classes.text].join(' ')
    }}>
      {words.map((word, index) =>
        <React.Fragment key={word + index}>
          <div className={classes.container}>
            {word}
            <div className={classes.innerContainer}
              style={{
                top: `-${locations[index] * 100}%`
              }}
            >
              {Array(5).fill(undefined).map((_, index) =>
                <Typography key={index} {...typoProps}>
                  {word}
                </Typography>
              )}
            </div>
          </div>
          {' '}
        </React.Fragment>
      )}
    </Typography>
  )
}
type SpinnerProps = TypographyProps & {
  sentence: string
}
type SpinnerState = {
  locations: number[]
}

export default Spinner