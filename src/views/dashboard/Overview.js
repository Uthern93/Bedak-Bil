import {Grid, Box, Typography, Paper} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Overview = () => {

    // dummy data with a settled field
    const expense = [
        {
            username: "Aiman",
            amount: 0,
            youOwe: false // They owe you
        },
        {
            username: "Haziq",
            amount: 150,
            youOwe: true // You owe them
        },
        {
            username: "Irfan",
            amount: 0,
            youOwe: false // They owe you
        },
        {
            username: "Akmal",
            amount: 100,
            youOwe: true // You owe them
        },
        {
            username: "Zahir Lim",
            amount: 500,
            youOwe: false // They owe you
        }
    ];

    return (
        <Paper sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            position: 'static',
            borderRadius: '25px',
            padding: '0 10px ',
            marginBottom: '20px'
        }}
               elevation={6}>
            <Grid container spacing={1}>
                {expense.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Box
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                flexDirection: 'column',
                                padding: '0 10px',
                                marginBottom: '10px',
                            }}
                        >
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={2} md={2}>
                                    <PersonOutlineOutlinedIcon />
                                </Grid>

                                <Grid item xs={8} md={8}>
                                    <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                        {item.username}
                                    </Typography>

                                    {/* Use Box to display amount in the same row */}
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {item.amount === 0 ? ( // Check if the amount is 0
                                            <Typography sx={{ fontSize: '15px', color: 'gray' }}>
                                                Settled Up
                                            </Typography>
                                        ) : (
                                            <>
                                                <Typography sx={{ fontSize: '15px' }}>
                                                    {item.youOwe ? `You Owe: ` : `Owes you: `}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: item.youOwe ? '#00e007' : '#a5001e',
                                                        fontWeight: 'bold',
                                                        fontSize: '15px',
                                                        marginLeft: '5px'
                                                    }}
                                                >
                                                    RM${item.amount}
                                                </Typography>
                                            </>
                                        )}
                                    </Box>
                                </Grid>

                                <Grid item xs={2} md={2}>
                                    <ArrowForwardIosOutlinedIcon />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default Overview;