import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CollectionCard from './collectionCard'
import collectionCardsData from "../data/hotCollections.json"

const HotCollections = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
                width: { xs: "100%", lg: "100%" },
                maxWidth: "2xl",
                overflow: "hidden",
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
                    fontWeight={500}
                    fontFamily={"Audiowide"}
                >
                    Hot Collections
                </Typography>
                <Button
                    disableRipple
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#BFC1C5",
                        textTransform: "none",
                    }}
                >
                    View All
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.6rem",
                    overflowX: "scroll",
                    scrollBehavior:"smooth",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
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
        </Box>
    )
}

export default HotCollections
