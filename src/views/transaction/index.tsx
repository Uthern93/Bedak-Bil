import { Grid, Typography, Box} from '@mui/material';
import TotalTransaction from "./TotalTransaction";

const transaction = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Box sx={{ width: '100%' }}>
                    <TotalTransaction />
                </Box>
            </Grid>

            {/* Upcoming Bill */}
            <Grid item xs={8} md={8}>
                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                    Recent Bills
                </Typography>
            </Grid>
        </Grid>
    );
}

export default transaction;