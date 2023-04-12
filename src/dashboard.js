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
                display: "flex"
            }}
        >
            <Menu value={value} handleFn={handleChange} />

            {
                value === 1 ?
                    <DashboardComp />
                    :
                    <ComingSoon />
            }
        </Box>
    );
}