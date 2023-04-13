import React from 'react'
import Timer from './timer'
import { Box, Divider, Typography } from '@mui/material'


const BidDetails = ({ display, gap, mainColor, secondColor, children, bgCol, mainbg }) => {
    return (
        <Box
            sx={{
                bgcolor: mainbg ? mainbg : "#0B1320",
                paddingY: "12px",
                display: "flex",
                width: "fit-content",
                borderRadius: "7px",
                flexDirection: "row",
                columnGap: `${gap}`
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem",
                    paddingX: "18px",
                    paddingY: "6px",
                    bgcolor: `${bgCol}`,
                    borderRadius: "7px",
                }}
            >
                <Typography
                    fontSize={"12px"}
                    color={"#A2A2AE"}
                >
                    Current Bid
                </Typography>
                <Typography
                    fontSize={"20px"}
                    fontWeight={600}
                    color={mainColor}
                >
                    1.69 ETH
                </Typography>
                <Typography
                    fontSize={"14px"}
                    color={secondColor ? secondColor : "#FFFFFF"}
                    fontWeight={500}
                >
                    $3900,67
                </Typography>
            </Box>
            <Divider variant='middle' sx={{ display: `${display}`, borderColor: "#191E2F", borderStyle: "dashed", borderLeftWidth: "2px" }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem",
                    paddingX: "18px",
                    paddingY: "6px",
                    bgcolor: `${bgCol}`,
                    borderRadius: "7px",
                }}
            >
                <Typography
                    fontSize={"12px"}
                    color={"#A2A2AE"}
                >
                    Auction Ending In
                </Typography>

                {children}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "1.2rem"
                    }}
                >
                    <Typography
                        fontSize={"14px"}
                        color={secondColor ? secondColor : "#FFFFFF"}
                        fontWeight={500}
                    >
                        Hrs
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={secondColor ? secondColor : "#FFFFFF"}
                        fontWeight={500}
                    >
                        Mins
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={secondColor ? secondColor : "#FFFFFF"}
                        fontWeight={500}
                    >
                        Secs
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default BidDetails
