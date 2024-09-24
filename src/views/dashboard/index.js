import { Grid, Typography} from '@mui/material';
import TotalUnpaid from './TotalUnpaid';
import TotalToReceive from './TotalToReceive';
import UpcomingBill from './UpcomingBill';

const Dashboard = () => {
    console.log("Rendering Dashboard");

    return (
        <Grid container spacing={2} sx={{padding: "0 12px 0 12px"}}>
            <Grid item xs={12}>
                {/* Content */}
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Typography sx={{ color: 'black', fontSize: '24px' }}> Hello, </Typography>
                        {/* Username */}
                        <Typography sx={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}> Uthern! </Typography>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <TotalUnpaid name="Total Unpaid"/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <TotalToReceive name="Total to Receive"/>
                    </Grid>

                    {/* Upcoming Bill */}
                    <Grid item xs={8} md={8}>
                        <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                            Upcoming Bills Payment
                        </Typography>
                    </Grid>

                    <Grid item xs={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <Typography sx={{ color: 'black'}}>
                            See all
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <UpcomingBill/>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
