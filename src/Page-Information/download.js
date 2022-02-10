import React, {useEffect} from "react";
import download from '../Icons/download.png'

const Download = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Downloads");
    handlePictureChange(download);
    changeFavicon(download);

    useEffect(() => {
        document.title = "Downloads"
    }, [])

    const TermuxFiles = [
        {Text: "Exagear - Complete with XFCE + Wine 7", location: "https://bryanwandrych.com/Downloads/Termux/Files/Exagear-Debian-Buster-Termux.zip", Description: "Not Yet Setup"},
    ]

    return (
        <div>
            <h1>Download <a href={"https://termux.com/"}>Termux-App</a> Based Scripts & Files</h1>
            <h2>Scripts: </h2>

            <h2>Files: </h2>
            {TermuxFiles.map((Text) => (
                <div>
                    <h3><li>{Text.Text}: <a href={Text.location}>Download</a></li> </h3>
                </div>
            ))}
            <hr/>
        </div>
    );
};

export default Download;