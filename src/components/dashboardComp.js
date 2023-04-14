import { Box, FormControl, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'


import HotBids from './hotBids'
import HotCollections from './hotCollections'
import HeroSection from './heroSection'
import SingleBid from './singleBid'
import CustomSelect from './customSelect'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setProfileImg } from '../slices/profileSlice'

const options = [
    { label: 'Zacker', value: 'Zacker' },
    { label: 'Richard', value: 'Richard' },
    { label: 'Charles Will', value: 'Charles Will' },
];



const DashboardComp = () => {

    const name = useSelector((state) => state.profile.name)
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                padding: "1.8rem",
                width: { xs: "100vw", lg: "92vw" }
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
                        value={name}
                        onChange={(e) => {
                            dispatch(setName(e.target.value))
                            switch (e.target.value) {
                                case "Zacker":
                                    dispatch(setProfileImg("/images/avatar2.webp"))
                                    break;
                                case "Richard":
                                    dispatch(setProfileImg("/images/avatar3.webp"))
                                    break;
                                case "Charles Will":
                                    dispatch(setProfileImg("/images/avatar4.webp"))
                                    break;

                                default:
                                    break;
                            }
                        }}
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
