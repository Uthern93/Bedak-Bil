import React from "react";
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";


const SplitTheBill = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                background: "linear-gradient(to bottom, #ffffff, #87CEFA)",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: 2 }}>
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
                    Split the Bill
                </Typography>
            </Box>

            {/* Form Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    padding: 2,
                    boxShadow: 3,
                }}
            >
                {/* Bill Name */}
                <Typography variant="subtitle1">Bill Name</Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Dinner @ Kaitod Decha"
                    defaultValue="Dinner @ Kaitod Decha"
                    sx={{ mb: 2 }}
                />

                {/* Category */}
                <Typography variant="subtitle1">Category</Typography>
                <Select fullWidth defaultValue="Dinner @ Kaitod Decha" sx={{ mb: 2 }}>
                    <MenuItem value="Dinner @ Kaitod Decha">Dinner @ Kaitod Decha</MenuItem>
                </Select>

                {/* Split With Group */}
                <Typography variant="subtitle1">Split With Group</Typography>
                <Select fullWidth defaultValue="Trip to Thailand" sx={{ mb: 2 }}>
                    <MenuItem value="Trip to Thailand">Trip to Thailand</MenuItem>
                </Select>

                {/* Items Section */}
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Items <Button size="small">Add Image</Button>
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Dinner for 4 people"
                    defaultValue="Dinner for 4 people"
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Amount"
                    defaultValue="RM 100.00"
                    sx={{ mb: 2 }}
                />

                {/* Add Item Button */}
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<SwapHorizIcon />}
                    sx={{
                        mb: 2,
                        backgroundColor: "#000",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#333" },
                    }}
                >
                    Add New Item
                </Button>

                {/* Summary Section */}
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1">Summary</Typography>
                <List disablePadding>
                    <ListItem>
                        <ListItemText primary="Sub Total" />
                        <Typography>RM 100.00</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Total" />
                        <Typography>RM 100.00</Typography>
                    </ListItem>
                </List>
            </Box>


        </Box>
    );
};

export default SplitTheBill;
