import {Box, Button, Grid, Typography} from "@mui/material";
import { styled } from '@mui/system';

const BootstrapButton = styled(Button)({
    fontSize: 12,
    padding: '6px 12px',
    borderRadius: '25px',
    lineHeight: 2,
    backgroundColor: '#465efd',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

const TotalTransaction = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
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
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h7" sx={{ color: 'black' }}>Total to pay</Typography>
                                {/* Amount from API */}
                                <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>
                                    $450.50
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <BootstrapButton variant="contained" disableRipple>
                                    Settle Up
                                </BootstrapButton>
                            </Grid>
                        </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default TotalTransaction;