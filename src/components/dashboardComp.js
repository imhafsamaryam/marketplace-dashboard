import { Box, FormControl, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'


import HotBids from './hotBids'
import HotCollections from './hotCollections'
import HeroSection from './heroSection'
import SingleBid from './singleBid'
import CustomSelect from './customSelect'

const options = [
    { label: 'Zacker', value: 'zacker' },
    { label: 'Richard', value: 'richard' },
    { label: 'Charles Will', value: 'charleswill' },
];



const DashboardComp = () => {


    const [selectedOption, setSelectedOption] = useState('zacker');

    return (
        <Box
            sx={{
                padding: "1.8rem",
                width: "93vw"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    columnGap: "1.8rem",
                    rowGap: "1.8rem"

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "1.5rem",
                        width: { xs: "100%", lg: "70%" }
                    }}
                >

                    <CustomSelect
                        options={options}
                        label="Select an option"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                
                    <HeroSection />
                    <HotCollections />
                    <HotBids />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "1.5rem",
                        width: { xs: "100%", lg: "30%" }
                    }}
                >
                    <SingleBid />
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardComp
