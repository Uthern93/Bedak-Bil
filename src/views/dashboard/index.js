import { Grid, Typography, Box} from '@mui/material';
import TotalUnpaid from './TotalUnpaid';
import TotalToReceive from './TotalToReceive';
import UpcomingBill from './UpcomingBill';
import Overview from "./Overview";

const Dashboard = () => {
    console.log("Rendering Dashboard");

    return (
        <Grid container spacing={2} sx={{padding: "0 12px 0px 12px"}}>
            <Grid item xs={12}>
                {/* Content */}
                <Grid container spacing={3}>

                    {/* Total amount to be paid or get paid */}
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

                    {/* Friends Expenses */}
                    <Grid item xs={12} md={12}>
                        <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                            Friends' Expenses
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Overview/>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
