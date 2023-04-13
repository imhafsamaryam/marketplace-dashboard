import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#525EF7',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#F6F7FC',
            // dark: will be calculated from palette.secondary.main,
        },
        action: {
            main: '#8F989F',
            // dark: will be calculated from palette.secondary.main,
        },
      

    },
});

export default theme
