import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CollectionCard({ name, items, bgImage, avatarImg }) {
    return (
        <Card
            elevation={0}
            sx={{
                width: 215,
                position: "relative",
                borderRadius:"7px"
            }}
        >
            <CardMedia
                sx={{ height: "4rem" }}
                image={bgImage}
                title="nft"
            />
            <CardMedia
                sx={{
                    width: 56,
                    height: 56,
                    border: "1px solid #FFFFFF",
                    borderRadius: "30px",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto"
                }}
                image={avatarImg}
                title="avatar"
            />
            <CardContent
                sx={{
                    height: "4rem",
                    "&.MuiCardContent-root": { padding: "8px" },
                    bgcolor: "#EAECF5",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "end"
                }}
            >
                <Typography
                    fontSize={"14px"}
                    color={"black"}
                >
                    {name}
                </Typography>
                <Typography
                    fontSize={"12px"}
                    color={"#B7B7BA"}
                >
                    {items} items
                </Typography>
            </CardContent>

        </Card>
    );
}