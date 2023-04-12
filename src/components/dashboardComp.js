import { Box, Typography } from '@mui/material'
import React from 'react'
import CollectionCard from './collectionCard'

const collectionCardsData = [
    {
        bgImage: "/images/nft.jpg",
        avatarImg: "/images/avatar2.jpg",
        name: "AvatarName",
        items: "23"
    },
    {
        bgImage: "/images/nft.jpg",
        avatarImg: "/images/avatar2.jpg",
        name: "AvatarName",
        items: "12"
    },
    {
        bgImage: "/images/nft.jpg",
        avatarImg: "/images/avatar2.jpg",
        name: "AvatarName",
        items: "44"
    },
    {
        bgImage: "/images/nft.jpg",
        avatarImg: "/images/avatar2.jpg",
        name: "AvatarName",
        items: "34"
    },

]

const DashboardComp = () => {
    return (
        <Box
            sx={{
                padding: "1.8rem"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "1.8rem"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "0.8rem"
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            fontSize={"24px"}
                            fontWeight={600}
                        >
                            Hot Collections
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={500}
                            color={"#BFC1C5"}
                        >
                            View All
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.6rem"
                        }}
                    >
                        {collectionCardsData.map((data, index) => {
                            return (
                                <Box

                                >
                                    <CollectionCard
                                        name={data.name}
                                        items={data.items}
                                        bgImage={data.bgImage}
                                        avatarImg={data.avatarImg}
                                    />
                                </Box>

                            )

                        })}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            fontSize={"24px"}
                            fontWeight={600}
                        >
                            Hot Bids
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={500}
                            color={"#BFC1C5"}
                        >
                            View All
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    column
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardComp
