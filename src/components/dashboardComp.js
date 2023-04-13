import { Box } from '@mui/material'
import React from 'react'


import HotBids from './hotBids'
import HotCollections from './hotCollections'
import HeroSection from './heroSection'
import SingleBid from './singleBid'



const DashboardComp = () => {


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
                    flexDirection: { xs: "column", md: "row" },
                    columnGap: "1.8rem"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "1.5rem",
                        width: "70%"
                    }}
                >
                    <HeroSection />
                    <HotCollections />
                    <HotBids />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "1.5rem",
                        width: "30%"
                    }}
                >
                    <SingleBid />
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardComp
