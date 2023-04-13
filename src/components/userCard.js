import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import React from 'react'

const UserCard = ({ avatarImg, name, designation }) => {
    return (
        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center",bgcolor:"transparent" }}>
            <CardMedia
                component="img"
                sx={{ width: 50, height: 50, borderRadius: "7px" }}
                image={avatarImg}
                alt="avatar"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        fontSize={"12px"}
                        color={"#A2A2AE"}
                    >
                        {designation}
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={"#9D9C9F"}
                        fontWeight={550}
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    )
}

export default UserCard

