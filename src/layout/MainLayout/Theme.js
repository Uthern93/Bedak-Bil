// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: '100%', // Ensure AppBar is full width
                    position: 'fixed', // Fix position to top
                    zIndex: 1300, // Ensure it stays on top of other content
                    paddingTop : '10px'
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    width: '100%',
                    padding: '20px 0 10px 0',
                },
            },
        },
    },
});

export default theme;
