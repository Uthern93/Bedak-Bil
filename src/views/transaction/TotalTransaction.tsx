import {Box, Button, Grid, Typography} from "@mui/material";
import { styled, textAlign } from '@mui/system';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//chart js dummy data
const data = {
    labels: [
      'Dannok',
      'Hatyai',
      'Langkawi'
    ],
    datasets: [{
      label: 'Total Spending',
      data: [300, 500, 250],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      hoverOffset: 4
    }]
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%', 
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const TotalTransaction = () => {
    const [selected, setSelected] = useState<String | null> (null);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        background: 'white',
                        borderRadius: '25px',
                        padding: '20px 10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                        },
                        align : 'center'
                    }}
                    >
                        <Grid container spacing={1} justifyContent="center">
                            {/* months selection */}
                            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                                {/* Month selection bar */}
                                <Box sx={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: 2, scrollbarWidth: 'none'}}>
                                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                                        <Button 
                                        key={month} 
                                        sx={{ 
                                            fontSize: '0.75rem',
                                            fontFamily: 'sans-serif',
                                            fontWeight: selected === month ? 'bold' : '',
                                            margin: '0 5px', 
                                            color: selected === month ? '#465efd' : 'gray' ,
                                            borderBottom: selected === month ? '4px solid #465efd' : 'none'
                                        }}
                                        onClick={() => setSelected(month)}
                                        >
                                            {month}
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                            {/* chart js */}
                            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '0.8rem' }}>Total Spent so far</Typography>
                                {/* Amount from API */}
                                <Typography sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: '1.8rem' }}>
                                    $450.50
                                </Typography>
                                {/*Doughnut chart */}
                                <Box 
                                    sx={{ 
                                        marginTop: 2, 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center', 
                                        height: '250px',
                                    }}
                                >
                                    <Doughnut data={data} options={options}/>
                                </Box>
                            </Grid>
                        </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default TotalTransaction;