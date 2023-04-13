import React from 'react';
import { MenuItem, Select, createTheme, styled } from '@mui/material';
import SearchIcon from './searchIcon';

const CustomSelectComp = styled(Select)(({ theme }) => ({
    paddingRight:"1rem",
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "inset 0px 1px 6px 0px #A2A2AE;",
    border: `1px solid  ${theme.palette.background.paper}`,
    fontFamily: "Audiowide",
    '&:focus': {
        backgroundColor: theme.palette.background.paper,
    }
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Audiowide",
    '&:hover': {
        backgroundColor: "#B7B7BA"
    },
}));

const CustomSelect = ({ options, value, onChange }) => {

    return (
        <>
            <CustomSelectComp
                IconComponent={SearchIcon}
                value={value}
                onChange={onChange}
            >
            {options.map((option) => (
                <CustomMenuItem key={option.value} value={option.value} disableRipple>
                    {option.label}
                </CustomMenuItem>
            ))}
        </CustomSelectComp >
        </>
    );
};

export default CustomSelect;