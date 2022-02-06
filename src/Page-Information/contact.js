import React from "react";
import contact from '../Icons/contact.png'

const Contact = ({handlePageLocation, handlePictureChange}) => {
    handlePageLocation("Contact")
    handlePictureChange(contact)

    return (
        <div>
            <h1>Contact</h1>
            <h3>If you would like to get in contact with me, feel free to email me at bwandrych@gmail.com</h3>
        </div>
    );
};

export default Contact;