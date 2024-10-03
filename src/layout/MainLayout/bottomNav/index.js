import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useState} from "react";

const BottomNav = () => {
    const [active, setActive] = useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
            <BottomNavigation
                showLabels
                value={active}
                onChange={(event, newValue) => {
                    setActive(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Group" icon={<GroupAddIcon />} />
                <BottomNavigationAction label="" icon={<DocumentScannerIcon />} />
                <BottomNavigationAction label="Transaction" icon={<ReceiptIcon />} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;