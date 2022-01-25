import React from "react";
import {AppBar, Icon, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

//Picture/Icon Imports
import home from "../Icons/home.png";
import about from "../Icons/about.png";
import contact from "../Icons/contact.png";
import resume from "../Icons/resume.png";
import minecraft from "../Icons/minecraft.png";

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge="start" component={Link} to="/">
                        <img src={home} width={"25"} height={"25"}/> Home
                    </IconButton>

                    <IconButton color="inherit" edge="start" component={Link} to="/about">
                        <img src={about} width={"25"} height={"25"}/> About
                    </IconButton>

                    <IconButton color="inherit" edge="start" component={Link} to="/contact">
                        <img src={contact} width={"25"} height={"25"}/> Contact
                    </IconButton>

                    <IconButton color="inherit" edge="start" component={Link} to="/resume">
                        <img src={resume} width={"25"} height={"25"}/> Resume
                    </IconButton>

                    <IconButton color="inherit" edge="start" href={"https://minecraft.bryanwandrych.com/"}>
                        <img src={minecraft} width={"25"} height={"25"}/> Minecraft
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;