import React from 'react'

import { Box } from '@mui/material';
import Menu from './components/menu';
import ComingSoon from './components/comingSoon';
import DashboardComp from './components/dashboardComp';

export default function Dashboard() {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%"
            }}
        >
            <Menu value={value} handleFn={handleChange} />

            <Box
                sx={{ marginLeft: "6.2vw" }}
            >
                {
                    value === 1 ?
                        <DashboardComp />
                        :
                        <ComingSoon />
                }
            </Box>
        </Box>
    );
}