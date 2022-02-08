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


    //Handling Email Sending
    const [emailAlerts, setEmailAlerts] = React.useState("Nothing Sent");
    const handleEmailAlerts = (event) => {
        setEmailAlerts(event);
    };

    async function postEmail(message) {
        await handleEmailAlerts(message)
    }

    const emailSuccess = () => {
        if (emailAlerts === "OK") {
            return (
                <center>
                    <br/>
                    <div>
                        <hr/>
                        <h3>Your email has successfully been sent to bwandrych@bryanwandrych.com.</h3>
                        <h3>I will reply to you as soon as I can.</h3>
                        <table style={{marginLeft: "auto", marginRight: "auto", border: "1px solid black"}}>
                            <tr>
                                <th><td>From:</td></th>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <th><td>Subject:</td></th>
                                <td>{subject}</td>
                            </tr>
                            <tr>
                                <th><td>Email Message/Body:</td></th>
                                <td> {body}</td>
                            </tr>
                        </table>
                    </div>
                </center>
            )
        }
    }

    //Function to send email, you must have SMTP Server running
    async function sendEmail () {
        await window.Email.send({
            Host : "mail.bryanwandrych.com",
            Username : "",
            Password : "",
            To : 'bwandrych@bryanwandrych.com',
            From : email,
            Subject : subject,
            Body : body
        }).then(
            async message => {
                await postEmail(message)
            }
        );
    }

    return (
        <div>
            <br/>
            <Box textAlign='center'>
                <h2>Would you like to send me an email?</h2>
            </Box>
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
                        label="Your Email Address"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Subject"
                        value={subject}
                        onChange={handleSubject}
                    />
                </div>
                <div>
                    <br/>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email Message/Body"
                        multiline
                        minRows={10}
                        value={body}
                        onChange={handleBody}
                    />
                </div>
            </Box>

            <Box textAlign='center'>
                <h3>Status: {emailAlerts}</h3>
                <br/>
                <Button variant="contained" onClick={sendEmail}>Send Email</Button>
            </Box>

            {emailSuccess()}
        </div>
    );
};

export default Contact;