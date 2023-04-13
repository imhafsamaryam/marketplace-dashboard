import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Timer = ({ initialHours, initialMinutes, initialSeconds, color, fontsize }) => {
    // const {initialMinute } = {initialMinute};
    // const {initialSeconds} = {initialSeconds};
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                    // clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {hours === 0 && minutes === 0 && seconds === 0 ? null : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "0.8rem"
                    }}
                >
                    <Typography color={color} fontSize={fontsize} fontWeight={600}>
                        {hours < 10 ? `0${hours}` : hours}

                    </Typography>
                    <Typography color={color} fontSize={fontsize} fontWeight={600}>
                        :
                    </Typography>
                    <Typography color={color} fontSize={fontsize} fontWeight={600}>
                        {minutes < 10 ? `0${minutes}` : minutes}

                    </Typography>
                    <Typography color={color} fontSize={fontsize} fontWeight={600}>
                        :
                    </Typography>
                    <Typography color={color} fontSize={fontsize} fontWeight={600}>
                        {seconds < 10 ? `0${seconds}` : seconds}

                    </Typography>
                </Box>
            )}
        </div>
    );
};

export default Timer;
