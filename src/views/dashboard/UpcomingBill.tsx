import {Grid, Typography, Box} from "@mui/material";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const UpcomingBill = () => {
    return (
        <Grid container spacing={1}>
            {/* First Bill */}
            <Grid item xs={12} md={12} sx={{ borderRadius: '25px' }}>
                <Box
                    sx={{
                        background: 'white',
                        borderRadius: '25px',
                        padding: '20px 30px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                        }
                    }}
                >
                    <Grid container alignItems="center"  sx={{ borderBottom: '2px solid #dedede', paddingBottom: '10px', marginBottom: '10px' }}>
                        <Grid item xs={2} md={2}>
                            <CategoryOutlinedIcon />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography sx={{color: 'black', fontWeight: 'bold', fontSize: '15px'}}>Trip to Thailand</Typography>
                            <Typography sx={{fontSize: '15px'}}>Sep 23, 2024</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography sx={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>$4505.82</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={2} md={2}>
                            <PersonOutlineOutlinedIcon />
                        </Grid>
                        <Grid container xs={10} md={10} sx={{borderRadius: '25px', backgroundColor: '#ceffd0', padding: "5px 0 5px 20px"}}>
                            <Grid item xs={8} md={8}>
                                <Typography sx={{color: 'black', fontSize: '15px'}}>You will received</Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Typography sx={{color: '#00e007', fontWeight: 'bold', fontSize: '15px'}}>$450.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>

            {/* Second Bill */}
            <Grid item xs={12} md={12} sx={{ borderRadius: '25px' }}>
                <Box
                    sx={{
                        background: 'white',
                        borderRadius: '25px',
                        padding: '20px 30px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                        }
                    }}
                >
                    <Grid container alignItems="center" sx={{ borderBottom: '2px solid #dedede', paddingBottom: '10px', marginBottom: '10px' }}> {/* Align items vertically in the center */}
                        <Grid item xs={2} md={2}>
                            <CategoryOutlinedIcon />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography sx={{color: 'black', fontWeight: 'bold', fontSize: '15px'}}>Trip to Danok</Typography>
                            <Typography sx={{fontSize: '15px'}}>Sep 23, 2024</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography sx={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>$4505.82</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={2} md={2}>
                            <PersonOutlineOutlinedIcon />
                        </Grid>
                        <Grid container xs={10} md={10} sx={{borderRadius: '25px', backgroundColor: '#ffe1e1', padding: "5px 0 5px 20px"}}>
                            <Grid item xs={8} md={8}>
                                <Typography sx={{color: 'black', fontSize: '15px'}}>You Owe</Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Typography sx={{color: '#a5001e', fontWeight: 'bold', fontSize: '15px'}}>$450.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
        </Grid>
    );
}

export default UpcomingBill;