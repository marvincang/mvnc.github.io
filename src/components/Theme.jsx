import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
  status: {
    danger: 'orange',
  },
})

export default theme
