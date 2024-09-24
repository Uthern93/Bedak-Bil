import {Box, Grid, Typography} from "@mui/material";

const TotalToPay = ({name}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        background: '#465efd',
                        borderRadius: '25px',
                        padding: '20px 30px',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    {/* Amount from API */}
                    <Typography variant="h4" sx={{ mb: '2px', color: 'white', fontWeight: 'bold' }}>
                        $450.50
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>{name}</Typography>
                </Box>
            </Grid>
        </Grid>

    );
}

export default TotalToPay;