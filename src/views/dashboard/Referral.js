import {Grid, Box, Typography} from "@mui/material";

const Referral = () => {
    return (
        <Grid container={true} spacing={1}>
            <Grid item xs={12} md={12}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        textAlign: "center"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "black",
                            fontWeight: 'bold'
                        }}
                    >
                        Earn Points by Refer
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Referral;