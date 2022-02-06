import React from 'react';
import ResumePDF from "../Files/Bryan Wandrych - Resume.pdf"

const Resume = ({handlePageLocation}) => {
    handlePageLocation("Resume")

    return (
        <div>
            <h1>Resume</h1>
            <h3>If you would like to view my resume: <a href={ResumePDF}>Click Here</a> </h3>
        </div>
    );
};

export default Resume;