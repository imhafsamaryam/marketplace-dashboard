import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import bidsDefault from "../data/bidsSports.json"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import UserCard from './userCard'
import { useSelector } from 'react-redux'
import BidData from './bidData';

const defaultBid = bidsDefault[0]

const SingleBid = () => {

    const userName = useSelector((state) => state.profile.name)
    const profileImage = useSelector((state) => state.profile.profileImg)
    const selectedBid = useSelector((state) => state.singleBid.data)
    return (
        <Box>

            <Box
                sx={{
                    width: "95%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "0.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1.5rem"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "0.5rem",
                        alignItems: "center",

                    }}
                >
                    <AccountBalanceWalletIcon color='action' />
                    <Typography
                        fontSize={"14px"}
                        color={"#9D9C9F"}
                        fontWeight={550}
                    >
                        99.760 ETH
                    </Typography>
                </Box>
                <UserCard avatarImg={profileImage} name={userName} />
            </Box>

            {
                selectedBid.name ?
                    <BidData name={selectedBid.name} avatarImg={selectedBid.avatarImg} avatarName={selectedBid.avatarName} bgImage={selectedBid.bgImage} />
                    :
                    <BidData name={defaultBid.name} avatarImg={defaultBid.avatarImg} avatarName={defaultBid.avatarName} bgImage={defaultBid.bgImage} />
            }

        </Box >
    )
}

export default SingleBid
