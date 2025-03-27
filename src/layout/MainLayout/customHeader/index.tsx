import {Box, Button, Grid, Typography} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const CustomHeader = () => {
    const location = useLocation();
    const pathName = location.pathname;

    const formattedPath = useMemo(() => {
        return pathName
            .split('/') 
            .filter(Boolean) 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }, [pathName]);

    return (
        <Grid container spacing={1} alignItems="center" sx={{ width: '100%'}}>
            {/* Left half - Back Button except on home page */}
            <Grid item xs={6} lg={6} md={6}>
                <Box sx={{flexDirection: 'column'}}>
                    <Grid item xs={12}>
                        <Typography sx={{ color: 'black', fontSize: '22px', fontWeight: 'bold'}}> {formattedPath} </Typography>
                    </Grid>
                </Box>
            </Grid>

            {/* Right half - Search Icon & Notification Icon  */}
            <Grid item xs={6} lg={6} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '25px',
                            padding: '12px',
                            minWidth: 'auto',
                            width: 'auto',
                            mr: "5px",
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <NotificationsNoneOutlinedIcon color="action" />
                    </Button>

                    <Button
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '25px',
                            padding: '12px',
                            minWidth: 'auto',
                            width: 'auto',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <PersonOutlineOutlinedIcon color="action" />
                    </Button>

                </Box>
            </Grid>
        </Grid>
    )
};

export default CustomHeader;