import React from 'react';

const Home = ({handlePageLocation}) => {
    handlePageLocation("Home")

    return (
        <div>
            <h1>Main - Please note this website is a work in progress.</h1>
            <h3>If you would like to view personal projects please visit: <a href={"https://github.com/bdwandry"}>Github</a> </h3>
            <h3>Soil Infiltrometer (Hosted on this Site): <a href={"https://soilinfiltrometer.bryanwandrych.com/"}>Click Here</a></h3>
            <h3>Soil Infiltrometer (Hosted on School Server): <a href={"https://cshci.cs.mtu.edu/soilinfiltrometer/index.html"}>Click Here</a></h3>
        </div>
    );
};

export default Home;