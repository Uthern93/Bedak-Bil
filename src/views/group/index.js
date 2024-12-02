import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RepeatIcon from "@mui/icons-material/Repeat";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

const Group = () => {
    const groups = [
        {
            id: 1,
            title: "Trip to Thailand",
            date: "Sep 23, 2024",
            total: "$4505.82",
            status: "You will receive",
            statusColor: "#D4F8D4",
            amount: "$450.00",
        },
        {
            id: 2,
            title: "Trip to Danok",
            date: "Sep 23, 2024",
            total: "$4505.82",
            status: "You Owe",
            statusColor: "#F8D4D4",
            amount: "$450.00",
        },
        {
            id: 3,
            title: "Trip to KL",
            date: "Sep 23, 2024",
            total: "$4505.82",
            status: "All Settled!",
            statusColor: "#F8EFD4",
            amount: "",
        },
    ];

    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #ffffff, #86c5f4)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
            }}
        >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Groups
            </Typography>

            {groups.map((group) => (
                <Link
                    key={group.id}
                    to={`/group/${group.id}`} // Dynamic route navigation
                    style={{ textDecoration: "none", width: "90%" }}
                >
                    <Card
                        sx={{
                            borderRadius: "16px",
                            mb: 2,
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" alignItems="center">
                                    <Box
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: group.id === 2 ? "#F8D47D" : "#D4F8D4",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {group.id === 2 ? (
                                            <AccountCircleIcon sx={{ color: "#FFF" }} />
                                        ) : (
                                            <Typography>{group.title.charAt(0)}</Typography>
                                        )}
                                    </Box>
                                    <Box ml={2}>
                                        <Typography fontWeight="bold">{group.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {group.date}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography fontWeight="bold">{group.total}</Typography>
                            </Box>

                            <Box
                                mt={2}
                                p={1}
                                sx={{
                                    background: group.statusColor,
                                    borderRadius: "8px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography>{group.status}</Typography>
                                {group.amount && <Typography fontWeight="bold">{group.amount}</Typography>}
                            </Box>
                        </CardContent>
                    </Card>
                </Link>
            ))}

            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    mt: 2,
                    borderRadius: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "8px 16px",
                    "&:hover": {
                        backgroundColor: "#333",
                    },
                }}
            >
                Add Group
            </Button>

            <Box
                sx={{
                    position: "fixed",
                    bottom: "16px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "space-around",
                    background: "#fff",
                    padding: "8px 0",
                    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                }}
            >
                <IconButton>
                    <HomeIcon />
                </IconButton>
                <IconButton>
                    <RepeatIcon />
                </IconButton>
                <IconButton>
                    <GroupIcon />
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Group;