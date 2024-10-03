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
                    padding: '20px 0 20px 0',
                    marginBottom: '30px'
                },
            },
        },
    },
});

export default theme;
