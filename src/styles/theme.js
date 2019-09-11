import { createMuiTheme } from '@material-ui/core/styles';
import { amber, green, red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e6e5e5',
        },
        secondary: {
            main: '#2196F3',
        },
        error: {
            main: red.A400,
        },
        success: {
            main: green[600],
        },
        warning: {
            main: amber[700],
        },
        cancel: {
            main: grey[300],
            dark: grey[500],
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;