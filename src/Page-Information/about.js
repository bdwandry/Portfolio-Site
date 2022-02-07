import React, {useEffect} from "react";
import about from '../Icons/about.png'

const About = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("About");
    handlePictureChange(about);
    changeFavicon(about);

    useEffect(() => {
        document.title = "About Me"
    }, [])

    return (
        <div>
            <h1>About</h1>
            <h3>Hi, my name is Bryan Wandrych. I am a recent graduate from Michigan Technological University in which I have received my Bachelors in Software Engineering.</h3>
            <h3>My proficient languages that I enjoy to write in is C, Java, and Javascript (Reactjs FrontEnd). However, I am very self-taught in ReactJs + Javascript, so my programming style can go amongst the norm. But I learn new implementation standards every time I write in it. </h3>
            <h3>My favorite hobbies outside of programming are to Ski, Hiking, and Hanging out with friends/family</h3>
        </div>
    );
};

export default About;