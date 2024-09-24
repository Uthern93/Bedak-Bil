import {Box, Button, Grid, Typography} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
    return (
        <Grid container spacing={1} alignItems="center" sx={{ width: '100%'}}>
            {/* Left half - Back Button except on home page */}
            <Grid item xs={6} lg={6} md={6}>

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

export default Header;