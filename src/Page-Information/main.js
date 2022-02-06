import React from 'react';
import home from '../Icons/home.png'

const Home = ({handlePageLocation, handlePictureChange}) => {
    handlePageLocation("Home")
    handlePictureChange(home)

    return (
        <div>
            <h1>Main - Please note this website is a work in progress.</h1>
            <h3>Soil Infiltrometer (Hosted on this Site): <a href={"https://soilinfiltrometer.bryanwandrych.com/"}>Click Here</a></h3>
            <h3>Soil Infiltrometer (Hosted on School Server): <a href={"https://cshci.cs.mtu.edu/soilinfiltrometer/index.html"}>Click Here</a></h3>
        </div>
    );
};

export default Home;