// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: '100%',
                    zIndex: 1300,
                    paddingTop : '10px'
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    width: '100%',
                    padding: '10px 10px 20px 10px',
                    marginBottom: '30px'
                },
            },
        },
    },
});

export default theme;
