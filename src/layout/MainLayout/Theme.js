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
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '16px', // Adjust as needed
                    paddingRight: '16px', // Adjust as needed
                    maxWidth: '100%', // Ensure it doesn't constrain width
                },
            },
        },
    },
});

export default theme;
