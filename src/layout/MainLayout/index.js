import {AppBar, Box, Toolbar, Container, BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import BottomNav from "./bottomNav";

const MainLayout = () => {

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
                {/* Top Bar */}
                <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none'}} position="static">
                    <Toolbar>
                        <Header />
                    </Toolbar>
                </AppBar>
                {/* Main Content */}
                <Container>
                    <Outlet />
                </Container>
            </Box>
            {/* Bottom Nav */}
            <BottomNav/>
        </ThemeProvider>
    );
};

export default MainLayout;
