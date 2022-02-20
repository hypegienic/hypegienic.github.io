import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography, {TypographyProps} from '@material-ui/core/Typography'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100%',
    maxWidth: '540px',
    height: '272px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  text: {
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    transition: 'transform 1800ms ease-in-out',
  },
  alternate: {
    '&$text': {
      color: 'rgb(0, 0, 0)',
      backgroundColor: theme.palette.primary.main,
      border: `24px solid ${theme.palette.primary.main}`,
      mixBlendMode: 'screen'
    }
  }
}))
const RubikCube:React.FunctionComponent<RubikCubeProps> = (props) => {
  const [state, setState] = React.useState<RubikCubeState>({
    rotate: 0
  })
  const shuffleLocation = () => {
    const {rotate} = state
    setState({rotate:rotate? 0:1})
  }
  React.useEffect(shuffleLocation, [])
  React.useEffect(() => {
    const interval = setTimeout(shuffleLocation, Math.random() * 3200 + 1800)
    return () => clearTimeout(interval)
  }, [state.rotate])

  const {variant, words} = props
  const {rotate} = state
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      {words.map((word, index) =>
        <div key={word} className={classes.content}>
          <Typography variant={variant}
            classes={{root:[classes.text, index % 2 === 0? classes.alternate:''].join(' ')}}
            style={{transform:`translateX(${(index % 2 === rotate? 1:-1) * 20}%)`}}
          >
            {Array(5).fill(word).join(' ')}
          </Typography>
        </div>
      )}
    </div>
  )
}
type RubikCubeProps = {
  variant?: TypographyProps['variant']
  words: string[]
}
type RubikCubeState = {
  rotate: 0 | 1
}

export default RubikCube