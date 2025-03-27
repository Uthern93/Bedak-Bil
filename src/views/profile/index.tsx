import React, { useEffect, useState} from "react";
import { 
    Grid, 
    Card, 
    Avatar, 
    Typography, 
    IconButton, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Divider,
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions 
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useAuth} from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../../lotties/success.json';
import animationData2 from '../../lotties/failed.json';

interface User {
    name: string;
    email: string;
    phone?: string;
    birthDate?: string;
    updated_at?: string;
}

const ProfileSection = () => {
    const navigate = useNavigate();
    const { logoutUser, fetchUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetchUser();
            setUser(response.data);
        };
        
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const response = await logoutUser();
            console.log('Logout response:' + response);
            setStatus(response.success);

            if (response.success) {
                setDialogMessage("Logout successful!");
            } else {
                setDialogMessage(response.message || "Login failed.");
            }
            setDialogOpen(true);
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setDialogOpen(true);
            setIsLoading(false);
        }
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);

        if (status) {
            navigate('/auth/login');
        }
    };

    // const user = {
    //     name: "Uthern Sutin",
    //     email: "uthern@gmail.com",
    //     phone: "+6 0194456776",
    //     birthDate: "14 October 2000",
    //     avatar: "https://i.pravatar.cc/100", // Placeholder avatar image
    // };

    //lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card 
                    sx={{
                        padding: 3,
                        borderRadius: "12px",
                        boxShadow: 3,
                        background: "white",
                        textAlign: "left",
                    }}
                >
                    {/* Header Section */}
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item display="flex" alignItems="center" gap={2}>
                            <Avatar src={"https://i.pravatar.cc/100"} sx={{ width: 50, height: 50 }} />
                            <Typography variant="h6" fontWeight="bold">
                                {user?.name || ''}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton size="small" sx={{ color: "blue" }}>
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    {/* Personal Info Section */}
                    <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "black", mb: 1 }}>
                        Personal Info
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List sx={{ padding: 0 }}>
                                <ListItem disablePadding>
                                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                    <ListItemText primary="Name" secondary={user?.name || ''} />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon><MailIcon /></ListItemIcon>
                                    <ListItemText primary="Email" secondary={user?.email || ''} />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon><PhoneIcon /></ListItemIcon>
                                    <ListItemText primary="Phone Number" secondary={user?.phone || 'Update the profile'} />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon><CakeIcon /></ListItemIcon>
                                    <ListItemText primary="Birth Date" secondary={user?.birthDate || 'Update the profile'} />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    {user?.updated_at && (
                    <Grid item xs={12}>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle2" sx={{ color: "gray" }}>
                            Last Updated: {new Date(user.updated_at).toLocaleString()}
                        </Typography>
                    </Grid>
                )}

                    <Divider sx={{ my: 2 }} />

                    {/* Logout Section */}
                    <Button 
                        variant="outlined" 
                        sx={{ width: "100%", fontWeight: "bold", color: "red", borderColor: "red" }}
                        onClick={handleLogout}
                    >
                        {isLoading ? 'Logging out..' : 'Log Out'}
                    </Button>
                </Card>
            </Grid>

            <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
                <DialogTitle 
                    className={`${status ? "text-green-600" : "text-red-600"} text-center text-3xl font-extrabold mt-3`}
                >
                    {status ? "Success!" : "Oh no!"}
                </DialogTitle>
                <DialogContent className="flex flex-col items-center">
                    <Lottie options={status ? defaultOptions : defaultOptions2} height={100} width={100} />
                    <p className="mt-4 text-center md:text-base sm:text-base">{dialogMessage}</p>
                </DialogContent>
                <DialogActions className="flex justify-center w-full pb-4">
                    <div className="w-full flex justify-center">
                        <Button onClick={handleCloseDialog} color="primary" variant="outlined">
                            {status ? "Done" : "Try again"}
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>

        </Grid>
    );
};

export default ProfileSection;
