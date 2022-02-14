import React, {useEffect} from "react";
import contact from '../Icons/contact.png'
import sendingbar from '../Icons/sendingbar.gif'
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

    //Disabling TextFields When Submit Email button is pressed
    const [textField, setTextField] = React.useState(false);
    const handleTextField = (event) => {
        setTextField(event);
    };

    //Handling Email Sending
    const [emailAlerts, setEmailAlerts] = React.useState("Nothing Sent");
    const handleEmailAlerts = (event) => {
        setEmailAlerts(event);

        if (event === "OK") {
            handleTextField(true)
        }
    };

    async function postEmail(message) {
        await handleEmailAlerts(message)
    }


    const emailSuccess = () => {
        if (emailAlerts === "OK") {
            return (
                <center>
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
                        <hr/>
                    </div>
                </center>
            )
        }

        if (emailAlerts === "Sending Email") {
            return (
                <div>
                    <img src={sendingbar} width={"100%"} />
                </div>
            )
        }
    }

    function resetInformation() {
        setEmail("")
        setSubject("")
        setBody("")
        setEmailAlerts("Send Another Email")
        handleTextField(false)
    }

    const sendAnotherEmail = () => {
        if (emailAlerts !== "OK") {
            return (
                <div>
                    <Button variant="contained" disabled={textField} onClick={sendEmail}>Send Email</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <Button variant="contained" onClick={resetInformation}>Send Another Email</Button>
                </div>
            )
        }
    }


        //Function to send email, you must have SMTP Server running
    async function sendEmail () {
        handleEmailAlerts("Sending Email")
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
                    '& .MuiTextField-root': { m: 0, width: '100%' },
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
                        disabled={textField}
                    />
                </div>
                <div>
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Subject"
                        value={subject}
                        onChange={handleSubject}
                        disabled={textField}
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
                        disabled={textField}
                    />
                </div>
            </Box>

            <Box textAlign='center'>
                <h3>Status: {emailAlerts}</h3>
                {emailSuccess()}
                <br/>
                {sendAnotherEmail()}
            </Box>
        </div>
    );
};

export default Contact;