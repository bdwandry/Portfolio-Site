import React, {useEffect} from 'react';
import minecraft from '../Icons/minecraft.png'

const Minecraft = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Minecraft")
    handlePictureChange(minecraft)
    changeFavicon(minecraft)

    useEffect(() => {
        document.title = "Minecraft Server"
    }, [])

    return (
        <div>
            <h1>Minecraft - Please note this website is a work in progress.</h1>
            <h3>If you would to play on a beautiful 1.18.1 survival world in minecraft.</h3>
            <h3>Server Address or Server IP is: minecraft.bryanwandrych.com</h3>
        </div>
    );
};

export default Minecraft;