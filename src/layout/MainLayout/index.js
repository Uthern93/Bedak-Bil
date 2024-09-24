import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Import your custom theme

const MainLayout = () => {
    console.log("Rendering MainLayout");

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    backgroundColor: '#eeeef2',
                    minHeight: '100vh',
                }}
            >
                <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                        <Header />
                    </Toolbar>
                </AppBar>
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default MainLayout;
