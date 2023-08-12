import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useMediaQuery,
} from "@mui/material";
import {
    Search,
    Message,
    Notifications,
    Help,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");


    return (
        <FlexBetween padding="1rem 6%" backgroundColor="black">
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "red",
                            cursor: "pointer",
                        },
                    }}
                >
                    Snapedia
                </Typography>
                {isNonMobileScreens && (
                    <FlexBetween
                        borderRadius="9px"
                        gap="3rem"
                        padding="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                )}
            </FlexBetween>
            <Box>
                {/* CLOSE ICON */}
                <Box display="flex" justifyContent="flex-end" p="1rem">
                </Box>

                {/* MENU ITEMS */}
                <FlexBetween
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="3rem"
                >

                    <Message sx={{ fontSize: "25px" }} />
                    <Notifications sx={{ fontSize: "25px" }} />
                    <Help sx={{ fontSize: "25px" }} />
                    <FormControl variant="standard" >
                        <Select

                            sx={{
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                },
                                "& .MuiSelect-select:focus": {
                                },
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem >
                                <Typography></Typography>
                            </MenuItem>
                            <MenuItem onClick={() => console.log("logout")}>
                                Log Out
                            </MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetween>
            </Box>
        </FlexBetween>
    );
};

export default Navbar;