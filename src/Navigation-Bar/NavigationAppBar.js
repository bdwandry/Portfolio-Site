//Used code: https://medium.com/@tsubasakondo_36683/create-responsive-drawer-menu-with-react-material-ui-617a42764b69

//Picture/Icon Imports
import home from "../Icons/home.png";
import about from "../Icons/about.png";
import contact from "../Icons/contact.png";
import resume from "../Icons/resume.png";
import minecraft from "../Icons/minecraft.png";
import github from "../Icons/github.png"

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));
function NavBar() {
    const DifferentPages = [
        {Text: "Home", location: "/", Image: home},
        {Text: "About", location: "/about", Image: about},
        {Text: "Contact", location: "/contact", Image: contact},
        {Text: "Resume", location: "/resume", Image: resume},
        {Text: "Minecraft", location: "/minecraft", Image: minecraft},
    ]

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <div>
            <List>
                {DifferentPages.map((Text) => (
                    <ListItem button component={Link} to={Text.location}>
                        <img src={Text.Image} width={"25"} height={"25"}/>
                        <ListItemText primary={Text.Text} />
                    </ListItem>
                ))}
                <ListItem button href={"https://github.com/bdwandry/"}>
                    <img src={github} width={"25"} height={"25"}/>
                    <ListItemText>
                        Github
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon/>
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
            </div>
        </div>
    );
}
NavBar.propTypes = {
    container: PropTypes.object,
};
export default NavBar;

//--------------------------------------------------------------------------------------------------------------------//
//
// const Navbar = () => {
//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton color="inherit" edge="start" component={Link} to="/">
//                         <img src={home} width={"25"} height={"25"}/> Home
//                     </IconButton>
//
//                     <IconButton color="inherit" edge="start" component={Link} to="/about">
//                         <img src={about} width={"25"} height={"25"}/> About
//                     </IconButton>
//
//                     <IconButton color="inherit" edge="start" component={Link} to="/contact">
//                         <img src={contact} width={"25"} height={"25"}/> Contact
//                     </IconButton>
//
//                     <IconButton color="inherit" edge="start" component={Link} to="/resume">
//                         <img src={resume} width={"25"} height={"25"}/> Resume
//                     </IconButton>
//
//                     <IconButton color="inherit" edge="start" component={Link} to="/minecraft">
//                         <img src={minecraft} width={"25"} height={"25"}/> Minecraft
//                     </IconButton>
//
//                     <IconButton color="inherit" edge="start" href={"https://github.com/bdwandry/"}>
//                         <img src={github} width={"25"} height={"25"}/> Github
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// };
//
// export default Navbar;