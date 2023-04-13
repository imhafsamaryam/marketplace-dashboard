import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setData } from '../slices/singleBidSlice';

export default function BidsCard({ name, items, bgImage, avatarImg, avatarName, endsIn, currentBid, idKey, data }) {
    const dispatch = useDispatch()

    return (
        <Card
            elevation={0}
            sx={{
                width: 300,
                position: "relative",
                borderRadius: "18px",
                border: "2px solid #E7E6EB"
            }}
            key={idKey}
            onClick={() => dispatch(setData(data))}
        >
            <CardMedia
                sx={{ height: "12rem" }}
                image={bgImage}
                title="nft"
            />
            <Box
                sx={{
                    width: "85%",
                    height: "fit-content",
                    border: "2px solid #E7E6EB",
                    borderRadius: "12px",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 60,
                    bottom: 0,
                    margin: "auto",
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start",
                    paddingX: "15px",
                    paddingY: "8px"
                }}
            >
                <Box>

                    <Typography
                        fontSize={"12px"}
                        color={"#A2A2AE"}
                    >
                        Sale ends in
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={"black"}
                        fontWeight={500}
                        fontFamily={"Audiowide"}
                    >
                        {endsIn} days
                    </Typography>
                </Box>
                <Box>

                    <Typography
                        fontSize={"12px"}
                        color={"#A2A2AE"}
                    >
                        current Bid
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={"black"}
                        fontWeight={500}
                        fontFamily={"Audiowide"}
                    >
                        {currentBid} ETH
                    </Typography>
                </Box>
            </Box>
            <CardContent
                sx={{
                    height: "8rem",
                    "&.MuiCardContent-root": { padding: "12px" },
                    bgcolor: "#EAECF5",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem",
                    justifyContent: "end"
                }}
            >
                <Typography
                    fontSize={"18px"}
                    color={"black"}
                    fontWeight={500}
                    fontFamily={"Audiowide"}
                >
                    {name}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem",
                        alignItems: "start"
                    }}
                >
                    <CardMedia
                        sx={{
                            width: 38,
                            height: 38,
                            border: "1px solid #FFFFFF",
                            borderRadius: "7px",

                        }}
                        image={avatarImg}
                        title="avatar"
                    />
                    <Box>
                        <Typography
                            fontSize={"14px"}
                            color={"black"}
                            fontWeight={550}
                        >
                            {avatarName}
                        </Typography>
                        <Typography
                            fontSize={"12px"}
                            color={"#A2A2AE"}
                        >
                            {items} items
                        </Typography>
                    </Box>
                </Box>
            </CardContent>

        </Card>
    );
}