import React from "react";
import { Box, Typography, Card, CardContent, Button, IconButton, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RepeatIcon from "@mui/icons-material/Repeat";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GroupDetails = () => {
    const members = [
        { name: "Haziq", owesYou: "$200", avatar: "😃" },
        { name: "Zahir", owesYou: "$200", avatar: "😊" },
        { name: "Aiman", owesYou: "$50", avatar: "🙂" },
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
            {/* Header */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                mb={2}
            >
                <IconButton>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5" fontWeight="bold">
                    Details
                </Typography>
                <Box width="40px" /> {/* Placeholder to align with back button */}
            </Box>

            {/* Group Summary */}
            <Card
                sx={{
                    width: "90%",
                    borderRadius: "16px",
                    mb: 2,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Box display="flex" alignItems="center">
                        <Avatar
                            sx={{
                                width: "40px",
                                height: "40px",
                                background: "#D4F8D4",
                                mr: 2,
                            }}
                        >
                            🏖️
                        </Avatar>
                        <Box>
                            <Typography fontWeight="bold">Trip to Thailand</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sep 23, 2024
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Members List */}
            {members.map((member, index) => (
                <Card
                    key={index}
                    sx={{
                        width: "90%",
                        borderRadius: "16px",
                        mb: 1,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box display="flex" alignItems="center">
                                <Avatar
                                    sx={{
                                        background: "#EDEDED",
                                        width: "40px",
                                        height: "40px",
                                        mr: 2,
                                    }}
                                >
                                    {member.avatar}
                                </Avatar>
                                <Typography>{`${member.name} owes you`}</Typography>
                            </Box>
                            <Typography
                                sx={{
                                    background: "#D4F8D4",
                                    padding: "4px 8px",
                                    borderRadius: "8px",
                                    fontWeight: "bold",
                                }}
                            >
                                {member.owesYou}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            ))}

            {/* Total Amount */}
            <Box
                sx={{
                    background: "#D4F8D4",
                    borderRadius: "8px",
                    width: "90%",
                    padding: "8px",
                    mt: 2,
                }}
            >
                <Typography textAlign="center">You will received</Typography>
                <Typography textAlign="center" fontWeight="bold">
                    $450.00
                </Typography>
            </Box>

            {/* Action Buttons */}
            <Box
                display="flex"
                justifyContent="space-around"
                width="90%"
                mt={2}
                gap={2}
            >
                <Button
                    variant="contained"
                    sx={{
                        flex: 1,
                        backgroundColor: "#34C759",
                        color: "#fff",
                        borderRadius: "20px",
                        "&:hover": {
                            backgroundColor: "#28A745",
                        },
                    }}
                >
                    All clear!
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        flex: 1,
                        backgroundColor: "#F8EFD4",
                        color: "#000",
                        borderRadius: "20px",
                        "&:hover": {
                            backgroundColor: "#E0D4AA",
                        },
                    }}
                >
                    Pending pay
                </Button>
            </Box>

            {/* Bottom Navigation */}
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

export default GroupDetails;
