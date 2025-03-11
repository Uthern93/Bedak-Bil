import {AppBar, Box, Toolbar, Container, BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import BottomNav from "./bottomNav";
import { useEffect, useMemo, useState } from 'react';
import CustomHeader from './customHeader';

const MainLayout = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    useEffect(() => {
        setPath(location.pathname);
        console.log("Path updated:", location.pathname);
    }, [location.pathname]);
    

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
                    <Toolbar key={path}>
                        {path === "/" ? <Header /> : <CustomHeader />}
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
