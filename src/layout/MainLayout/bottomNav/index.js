import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Import images statically
import HomeIcon from "./home.png";
import HomeActiveIcon from "./home_blue.png";
import Transactions from "./transaction.png";
import TransactionsActive from "./transaction_blue.png";
import DocumentScannerIcon from "./scanner.png";
import GroupIcon from "./group.png";
import GroupActiveIcon from "./group_blue.png";

const BottomNav = () => {
    const location = useLocation();
    const [active, setActive] = useState(0);

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 15,
                left: 0,
                right: 0,
                borderRadius: 25,
                overflow: 'hidden',
                marginLeft: 3,
                marginRight: 3,
                backgroundColor: '#404042',
            }}
            elevation={6}
        >
            <BottomNavigation
                value={active}
                onChange={(event, newValue) => {
                    setActive(newValue);
                }}
                sx={{
                    height: 50,
                    backgroundColor: '#404042',
                    '& .MuiBottomNavigationAction-root': {
                        minWidth: 'auto',
                        padding: '6px 0',
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .Mui-selected': {
                        color: 'white',
                    },
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    icon={<img src={active === 0 ? HomeActiveIcon : HomeIcon} alt="Home" style={{ width: 30, height: 30 }} />}
                    sx={{ fontSize: '0.7rem' }}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/transaction"
                    icon={<img src={active === 1 ? TransactionsActive : Transactions} alt="Transactions" style={{ width: 30, height: 30 }} />}
                    sx={{ fontSize: '0.7rem' }}
                />
                <BottomNavigationAction
                    icon={<img src={DocumentScannerIcon} alt="Scanner" style={{ width: 30, height: 30 }} />}
                    sx={{ fontSize: '0.7rem' }}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/group"
                    icon={<img src={active === 3 ? GroupActiveIcon : GroupIcon} alt="Group" style={{ width: 30, height: 30 }} />}
                    sx={{ fontSize: '0.7rem' }}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/profile"
                    icon={<AccountCircleIcon sx={{ fontSize: 34, color: active === 4 ? '#3f51b5' : 'white' }} />}
                    sx={{ fontSize: '0.7rem' }}
                />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;