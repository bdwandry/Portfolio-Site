import React, {useEffect} from "react";
import contact from '../Icons/contact.png'

const Contact = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Contact")
    handlePictureChange(contact)
    changeFavicon(contact)

    useEffect(() => {
        document.title = "Contact Information"
    }, [])

    return (
        <div>
            <h1>Contact</h1>
            <h3>If you would like to get in contact with me, feel free to email me at bwandrych@gmail.com</h3>
        </div>
    );
};

export default Contact;