import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import BidDetails from './bidDetails'
import Timer from './timer'


const HeroSection = () => {
    return (
        <Card
            elevation={0}
            sx={{
                width: "100%",
                position: "relative",
                borderRadius: "7px"
            }}
        >
            <CardMedia
                sx={{ height: "20rem", width: "100%" }}
                image={"/images/2.webp"}
                title="abstract"
            />
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    padding: "1.5rem",
                    borderRadius: "7px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1.5rem",
                }}
            >
                <Typography
                    color={"#FFFFFF"}
                    fontSize={"28px"}
                    fontWeight={500}
                    fontFamily={"Audiowide"}
                >
                    Blue and Coral Abstract
                </Typography>
                <BidDetails display={"block"} mainColor={"#2C9EDB"}>
                    <Timer
                        initialHours={23}
                        initialMinutes={1}
                        initialSeconds={1}
                        fontsize={"20px"}
                        color={"#2C9EDB"}
                    />
                </BidDetails>

                <Button
                    variant="contained"
                    // color={color ? color : "primary"}
                    disableRipple
                    sx={{
                        display: { xs: "none", md: "inherit" },
                        paddingX: { xs: "0.3rem", lg: "1.4rem" },
                        paddingY: { xs: "0.1rem", lg: "0.4rem" },
                        fontSize: "20px",
                        fontFamily:"Audiowide",
                        backgroundImage: "linear-gradient(90deg, hsla(261, 87%, 60%, 1) 0%, hsla(210, 96%, 54%, 1) 77%);",
                        boxShadow: "0px 2px 6px  #1B89FA",
                        textTransform: "none",
                        borderRadius: { xs: "4px", lg: "5px" },
                        borderWidth: "1px",
                        borderColor: "primary",
                        ":hover": {
                            bgcolor: "#525EF7",
                            color: "white",
                        },
                        width: "100%",
                        maxWidth: "fit-content",
                    }}

                >
                    View Collection
                </Button>

            </Box>
        </Card>
    )
}

export default HeroSection
