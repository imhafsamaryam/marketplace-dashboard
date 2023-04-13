import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from './customButton'
import BidsCard from './bidsCard'
import bidsSports from "../data/bidsSports.json"
import bidsArts from "../data/bidsArts.json"
import bidsGaming from "../data/bidsGaming.json"
import bidsAvatar from "../data/bidsAvatar.json"
import bidsMemes from "../data/bidsMemes.json"
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory } from '../slices/categorySlice'


const bidsArray = ["Sports", "Arts", "Gaming", "Avatar", "Memes"]


const HotBids = () => {


    const active = useSelector((state) => state.category.selectedCategory)
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem"
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
                    Hot Bids
                </Typography>


                <Box
                    sx={{
                        display: "flex",
                        gap: "0.6rem",
                    }}
                >
                    {
                        bidsArray.map((item, idx) => {
                            return <CustomButton
                                key={idx}
                                text={item}
                                color={active === item ? "primary" : "secondary"}
                                handleActive={() => {
                                    dispatch(setSelectedCategory(item))
                                }}
                                elevation={active === item ? false : true}
                            />
                        })
                    }


                </Box>

            </Box>
            {
                active === "Sports" &&

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    {bidsSports.map((data, idx) => {
                        return <BidsCard
                            data={data}
                            idKey={idx}
                            name={data.name}
                            avatarName={data.avatarName}
                            items={data.items}
                            bgImage={data.bgImage}
                            avatarImg={data.avatarImg}
                            endsIn={data.endsIn}
                            currentBid={data.currentBid}
                        />
                    })}
                </Box>



            }
            {
                active === "Arts" &&
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    {bidsArts.map((data, idx) => {
                        return <BidsCard
                            data={data}
                            idKey={idx}
                            name={data.name}
                            avatarName={data.avatarName}
                            items={data.items}
                            bgImage={data.bgImage}
                            avatarImg={data.avatarImg}
                            endsIn={data.endsIn}
                            currentBid={data.currentBid}
                        />
                    })}
                </Box>
            }
            {active === "Gaming" &&
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    {bidsGaming.map((data, idx) => {
                        return <BidsCard
                            data={data}
                            idKey={idx}
                            name={data.name}
                            avatarName={data.avatarName}
                            items={data.items}
                            bgImage={data.bgImage}
                            avatarImg={data.avatarImg}
                            endsIn={data.endsIn}
                            currentBid={data.currentBid}
                        />
                    })}
                </Box>
            }
            {active === "Avatar" &&
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    {bidsAvatar.map((data, idx) => {
                        return <BidsCard
                            data={data}
                            idKey={idx}
                            name={data.name}
                            avatarName={data.avatarName}
                            items={data.items}
                            bgImage={data.bgImage}
                            avatarImg={data.avatarImg}
                            endsIn={data.endsIn}
                            currentBid={data.currentBid}
                        />
                    })}
                </Box>
            }
            {active === "Memes" &&
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    {bidsMemes.map((data, idx) => {
                        return <BidsCard
                            data={data}
                            idKey={idx}
                            name={data.name}
                            avatarName={data.avatarName}
                            items={data.items}
                            bgImage={data.bgImage}
                            avatarImg={data.avatarImg}
                            endsIn={data.endsIn}
                            currentBid={data.currentBid}
                        />
                    })}
                </Box>
            }
        </Box>
    )
}

export default HotBids
