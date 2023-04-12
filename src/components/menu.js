import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SailingIcon from '@mui/icons-material/Sailing';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Menu = ({ handleFn, value }) => {


    return (
        <Tabs
            value={value}
            onChange={handleFn}
            orientation='vertical'
            aria-label="icon tabs example"
            indicatorColor='primary'
            TabIndicatorProps={{
                style: {
                    width: "6px",
                    height: "4rem",
                    position: "absolute",
                    left: 0,
                    borderTopRightRadius: "full",
                    borderBottomRightRadius: "full",
                }
            }}
            sx={{
                width: "6.2vw",
                height: "100vh",
                bgcolor: "#EAECF5",
                paddingY: "4rem"
            }}

        >

            <Tab
                sx={{
                    height: "4rem",
                    marginBottom: "2rem",
                    ":disabled": { color: "#525EF7" }
                }}
                icon={<SailingIcon />}
                aria-label="iconn"
                disabled

            />
            <Tab
                sx={{
                    height: "4rem",
                    "&.Mui-selected": {
                        bgcolor: "#DEE3F9",
                        color: "#525EF7"
                    },
                    marginY: "1rem",
                    color: "#A2A2AE"
                }}
                icon={<HomeIcon />}
                aria-label="home"
                disableRipple
                defaultChecked
            />
            <Tab
                sx={{
                    height: "4rem",
                    "&.Mui-selected": {
                        bgcolor: "#DEE3F9",
                        color: "#525EF7"
                    },
                    marginY: "1rem",
                    color: "#A2A2AE"
                }}
                icon={<FavoriteIcon />}
                aria-label="favorite"
                disableRipple
            />
            <Tab
                sx={{
                    height: "4rem",
                    "&.Mui-selected": {
                        bgcolor: "#DEE3F9",
                        color: "#525EF7"
                    },
                    marginY: "1rem",
                    color: "#A2A2AE"
                }}
                icon={<ShoppingBagIcon />}
                aria-label="shopping"
                disableRipple
            />
            <Tab
                sx={{
                    height: "4rem",
                    "&.Mui-selected": {
                        bgcolor: "#DEE3F9",
                        color: "#525EF7"
                    },
                    marginY: "1rem",
                    color: "#A2A2AE"
                }}
                icon={<SettingsIcon />}
                aria-label="settings"
                disableRipple
            />
            <Tab
                sx={{
                    height: "4rem",
                    "&.Mui-selected": {
                        bgcolor: "#DEE3F9",
                        color: "#525EF7"
                    },
                    marginY: "1rem",
                    color: "#A2A2AE"
                }}
                icon={<LogoutIcon />}
                aria-label="logout"
                disableRipple
            />
        </Tabs>
    )
}

export default Menu
