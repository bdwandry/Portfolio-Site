import React, {useEffect} from 'react';
import home from '../Icons/home.png'

const Home = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Home");
    handlePictureChange(home);
    changeFavicon(home);

    useEffect(() => {
        document.title = "Bryan Wandrych Portfolio"
    }, [])

    return (
        <div>
            <h1>Main - Please note this website is a work in progress.</h1>
            <h3>Soil Infiltrometer (Hosted on this Site): <a href={"https://soilinfiltrometer.bryanwandrych.com/"}>Click Here</a></h3>
            <h3>Soil Infiltrometer (Hosted on School Server): <a href={"https://cshci.cs.mtu.edu/soilinfiltrometer/index.html"}>Click Here</a></h3>
        </div>
    );
};

export default Home;