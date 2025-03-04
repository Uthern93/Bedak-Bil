import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Overview = () => {
    const expense = [
        { username: "Aiman", amount: 0, youOwe: false },
        { username: "Haziq", amount: 150, youOwe: true },
        { username: "Irfan", amount: 0, youOwe: false },
        { username: "Akmal", amount: 100, youOwe: true },
        { username: "Zahir Lim", amount: 500, youOwe: false }
    ];

    return (
        <Box sx={{
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '16px',
            marginBottom: '20px'
        }}>
            <List disablePadding>
                {expense.map((item, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            borderBottom: index !== expense.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                            py: 2
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                                {item.username[0]}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.username}
                            secondary={
                                item.amount === 0 ? (
                                    <Typography variant="body2" color="text.secondary">
                                        Settled Up
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        color={item.youOwe ? 'error.main' : 'success.main'}
                                    >
                                        {item.youOwe ? `You Owe: ` : `Owes you: `}
                                        RM${item.amount}
                                    </Typography>
                                )
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end">
                                <ChevronRightIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Overview;