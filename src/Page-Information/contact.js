import React, {useEffect} from "react";
import contact from '../Icons/contact.png'
import Button from '@mui/material/Button';
import {Box, TextField} from "@mui/material";

const Contact = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Contact")
    handlePictureChange(contact)
    changeFavicon(contact)

    useEffect(() => {
        document.title = "Contact Information"
    }, [])

    //Sending Email
    //Changing Email Text
    const [email, setEmail] = React.useState("");
    const handleEmail= (event) => {
        setEmail(event.target.value);
    };

    //Changing Subject Text
    const [subject, setSubject] = React.useState("");
    const handleSubject = (event) => {
        setSubject(event.target.value);
    };

    //Changing Body Text
    const [body, setBody] = React.useState("");
    const handleBody = (event) => {
        setBody(event.target.value);
    };

    //Function to send email, you must have SMTP Server running
    function sendEmail () {
        window.Email.send({
            Host : "mail.bryanwandrych.com",
            Username : "",
            Password : "",
            To : 'bwandrych@bryanwandrych.com',
            From : email,
            Subject : subject,
            Body : body
        }).then(
            message => alert(message)
        );
        handleEmail("");
        handleSubject("");
        handleBody("");
    }

    return (
        <div>
            <h1>Contact</h1>
            <h3>If you would like to get in contact with me, feel free to email me at bwandrych@gmail.com</h3>

            <h3>Would you like to send me an email?</h3>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '97%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Your Email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Email Subject"
                        value={subject}
                        onChange={handleSubject}
                    />
                </div>
                <div>
                    <br/>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email Body"
                        multiline
                        maxRows={4}
                        value={body}
                        onChange={handleBody}
                    />
                </div>
            </Box>

            <Box textAlign='center'>
                <br/>
                <Button variant="contained" onClick={sendEmail}>Send Email</Button>
            </Box>
        </div>
    );
};

export default Contact;