import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = {
  palette: {
    type: 'light',
    primary: indigo,
    secondary: pink,
    error: red,
  },
};

export default createMuiTheme(theme);
