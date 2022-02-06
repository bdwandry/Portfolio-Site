import React from 'react';
import ResumePDF from "../Files/Bryan Wandrych - Resume.pdf"
import resume from '../Icons/resume.png'

const Resume = ({handlePageLocation, handlePictureChange}) => {
    handlePageLocation("Resume")
    handlePictureChange(resume)

    return (
        <div>
            <h1>Resume</h1>
            <h3>If you would like to view personal projects please visit: <a href={"https://github.com/bdwandry"}>Github</a> </h3>
            <h3>If you would like to view my resume: <a href={ResumePDF}>Click Here</a> </h3>

        </div>
    );
};

export default Resume;