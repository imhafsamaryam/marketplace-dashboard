import { Button } from '@mui/material'
import React from 'react'



const CustomButton = ({ text, color, elevation, handleActive, key, fontsize, px, py, border }) => {


    return (
        <Button
            variant="contained"
            color={color ? color : "primary"}
            disableElevation={elevation}
            onClick={handleActive}
            disableRipple
            key={key}
            sx={{
                paddingX: { xs: "0.3rem", lg: px ? px : "1.2rem" },
                paddingY: { xs: "0.1rem", lg: py ? py : "0.5rem" },
                fontSize: fontsize ? fontsize : "14px",
                textTransform: "none",
                borderRadius: { xs: "4px", lg: "5px" },
                border: border ? border : "none",
                ":hover": {
                    bgcolor: "#525EF7",
                    color: "white",
                    border:"none"
                },
                width: "100%",
                maxWidth: "fit-content",
                letterSpacing:"1px"
            }}

        >
            {text}
        </Button>
    )
}

export default CustomButton
