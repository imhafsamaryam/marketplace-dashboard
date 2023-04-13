import React from 'react'
import CustomButton from './customButton'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import UserCard from './userCard'
import Timer from './timer'
import BidDetails from './bidDetails'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SailingIcon from '@mui/icons-material/Sailing';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';

const BidData = ({ name, avatarImg, avatarName, bgImage}) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem",
                    bgcolor: "#F5F4FA",
                    padding: "1rem",
                    borderRadius: "7px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <UserCard avatarImg={avatarImg} designation={"Creator"} name={avatarName} />
                    <UserCard avatarImg={"/images/avatar4.webp"} designation={"Owner"} name={"Leonel Lee"} />
                </Box>
                <Card
                    elevation={0}
                    sx={{
                        width: "94%",
                        position: "relative",
                        borderRadius: "7px"
                    }}
                >
                    <CardMedia
                        sx={{ height: "15rem" }}
                        image={bgImage}
                        title="abstract"
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            margin: "auto"
                        }}

                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "1rem"
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    height: "2.5rem",
                                    width: "2.5rem",
                                    borderRadius: "4px"
                                }}
                            >
                                <SailingIcon
                                    color='action'

                                    sx={{
                                        width: "100%",
                                        fontSize: 36,
                                        padding: "0.4rem",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: "0.8rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        height: "2.5rem",
                                        width: "2.5rem",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <FavoriteIcon
                                        color='action'

                                        sx={{
                                            width: "100%",
                                            fontSize: 36,
                                            padding: "0.4rem",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        height: "2.5rem",
                                        width: "2.5rem",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <ShoppingBagIcon
                                        color='action'

                                        sx={{
                                            width: "100%",
                                            fontSize: 36,
                                            padding: "0.4rem",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        height: "2.5rem",
                                        width: "2.5rem",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <SettingsIcon
                                        color='action'

                                        sx={{
                                            width: "100%",
                                            fontSize: 36,
                                            padding: "0.4rem",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                <Typography
                    fontSize={"20px"}
                    fontWeight={500}
                    fontFamily={"Audiowide"}
                >
                    {name}
                </Typography>
            </Box >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem"
                }}
            >
                <BidDetails gap={"1rem"} mainbg={"transparent"} display={"none"} mainColor={"#000000"} secondColor={"#9D9C9F"} bgCol={"#F5F4FA"} >
                    <Timer
                        initialHours={18}
                        initialMinutes={24}
                        initialSeconds={1}
                        fontsize={"20px"}
                        color={"#000000"}
                    />
                </BidDetails>
                <Typography
                    fontSize={"14px"}
                    color={"#9D9C9F"}
                    textAlign={"justify"}
                >
                    Blue and pink abstracts is one of the abstract objects created by James Will. This abstract belongs to art gallery, and this abstract was published on August 12, 2020
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "1rem",
                        paddingY: "0.5rem"
                    }}
                >
                    <CustomButton
                        fontsize={"13px"}
                        px={"1.8rem"}
                        py={"0.8rem"}
                        text={"View artwork"}
                        color={"secondary"}
                        elevation={true}
                        border={"2px solid #9D9C9F"}
                    />
                    <CustomButton
                        fontsize={"13px"}
                        px={"1.8rem"}
                        py={"0.8rem"}
                        text={"Place a Bid"}
                        color={"primary"}
                    />

                </Box>
            </Box>
        </Box>
    )
}

export default BidData
