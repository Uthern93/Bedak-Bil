import React from "react";
import { Typography, Box, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";

const Profile = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #f0f8ff, #1E88E5)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 2,
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                }}
            >
                <IconButton>
                    <Typography variant="h6" sx={{ color: "#000" }}>
                        &#8592;
                    </Typography>
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                    Profile
                </Typography>
                <Box sx={{ width: "24px" }} /> {/* Empty space for alignment */}
            </Box>

            {/* Profile Card */}
            <Box
                sx={{
                    background: "#fff",
                    borderRadius: "20px",
                    height: "150%",
                    width: "80%",
                    padding: 2,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                {/* Avatar and Edit Icon */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                            sx={{ width: 80, height: 80 }}
                            src="profile_pic.svg"
                            alt="User Avatar"
                        />
                        <Typography
                            variant="h6"
                            sx={{ ml: 2, fontWeight: "bold", color: "#000" }}
                        >
                            Uthern Sutin
                        </Typography>
                    </Box>
                    <IconButton>
                        <EditIcon sx={{ color: "#3f51b5" }} />
                    </IconButton>
                </Box>

                {/* Personal Info Section */}
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#000", mb: 1 }}
                >
                    Personal Info
                </Typography>
                {[
                    {
                        icon: <PersonIcon sx={{ color: "#000" }} />,
                        label: "Name",
                        value: "Uthern Sutin",
                    },
                    {
                        icon: <EmailIcon sx={{ color: "#000" }} />,
                        label: "Email",
                        value: "uthern@gmail.com",
                    },
                    {
                        icon: <PhoneIcon sx={{ color: "#000" }} />,
                        label: "Phone Number",
                        value: "+6 0194456776",
                    },
                    {
                        icon: <CakeIcon sx={{ color: "#000" }} />,
                        label: "Birth Date",
                        value: "14 October 2000",
                    },
                ].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f0f0f0",
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                mr: 2,
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="body1"
                                sx={{ color: "#000", fontWeight: "500" }}
                            >
                                {item.label}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray", fontWeight: "400" }}
                            >
                                {item.value}
                            </Typography>
                        </Box>
                    </Box>
                ))}

                {/* Logout Section */}
                <Typography
                    variant="body1"
                    sx={{
                        mt: 3,
                        fontWeight: "bold",
                        color: "#000",
                    }}
                >
                    My Account
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mt: 1,
                        fontWeight: "bold",
                        color: "red",
                        cursor: "pointer",
                    }}
                >
                    Log Out
                </Typography>
            </Box>


        </Box>
    );
};

export default Profile;
