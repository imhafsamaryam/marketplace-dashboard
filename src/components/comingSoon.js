import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const ComingSoon = () => {
    return (
        <Box
            sx={{
                display: "flex",
                // backgroundImage: "url('/images/bids1.webp')",
                // objectFit:"cover",
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh"
            }}

        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Typography fontFamily={"Audiowide"} fontSize={{ xs: '25px', lg: "40px" }} paddingBottom={"2rem"} textAlign={'center'} >
                    Page Coming Soon
                </Typography>
            </Box>
        </Box>
    )
}

export default ComingSoon
