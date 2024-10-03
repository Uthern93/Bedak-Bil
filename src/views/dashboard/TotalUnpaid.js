import {Box, Grid, Typography} from "@mui/material";
import { styled } from '@mui/system';

const CardWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    background: '#465efd', // Primary color
    borderRadius: '25px', // Slightly sharper border radius for modern look
    padding: '24px 30px', // Adjust padding for a more comfortable feel
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Softer but deeper shadow
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth hover effect
    '&:hover': {
        transform: 'scale(1.03)', // Slight scaling effect on hover for interactivity
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', // Elevation change on hover
    },
    // Animation for the 'after' pseudo-element
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 180,
        height: 180,
        background: `linear-gradient(210.04deg, rgba(255, 255, 255, 0.2) -50.94%, rgba(255, 255, 255, 0.2) 83.49%)`,
        borderRadius: '50%',
        top: -40,
        right: -150,
        animation: 'moveAfter 6s ease-in-out infinite', // Add animation here
    },
    // Animation for the 'before' pseudo-element
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 180,
        height: 180,
        background: `linear-gradient(140.9deg, rgba(255, 255, 255, 0.3) -14.02%, rgba(255, 255, 255, 0) 70.50%)`,
        borderRadius: '50%',
        top: -120,
        right: -110,
        animation: 'moveBefore 6s ease-in-out infinite', // Add animation here
    },
    '@keyframes moveAfter': {
        '0%': { top: -40, right: -150 },
        '50%': { top: -60, right: -130 }, // Move slightly up and right
        '100%': { top: -40, right: -150 }, // Reset to the original position
    },
    '@keyframes moveBefore': {
        '0%': { top: -120, right: -110 },
        '50%': { top: -150, right: -80 }, // Move slightly up and right
        '100%': { top: -120, right: -110 }, // Reset to the original position
    }
}));

const TotalUnpaid = ({name}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardWrapper>
                    {/* Amount from API */}
                    <Typography variant="h4" sx={{ mb: '2px', color: 'white', fontWeight: 'bold' }}>
                        $450.50
                    </Typography>

                    <Typography variant="h7" sx={{ color: 'white' }}>{name}</Typography>
                </CardWrapper>
            </Grid>
        </Grid>

    );
}

export default TotalUnpaid;