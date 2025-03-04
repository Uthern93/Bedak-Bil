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
        </Grid>
    );
}

export default transaction;