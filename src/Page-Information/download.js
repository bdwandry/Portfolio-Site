import React, {useEffect} from "react";
import download from '../Icons/download.png'

const Download = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Downloads");
    handlePictureChange(download);
    changeFavicon(download);

    useEffect(() => {
        document.title = "Downloads"
    }, [])

    const TermuxScripts = [
        {Text: "Exagear - Easy install script - Complete with XFCE + Wine 7 (Filesystem) and Scripts to add extra features", location: "https://bryanwandrych.com/Downloads/Termux/Scripts/setup-Exagear-Debian10-XFCE-Wine7.sh", Description: "Not Yet Setup"},
    ]

    const TermuxFiles = [
        {Text: "Exagear Pre-Packaged Filesystem - Complete with XFCE + Wine 7", location: "https://bryanwandrych.com/Downloads/Termux/Files/Exagear-Debian-Buster-Termux.zip", Description: "Not Yet Setup"},
        {Text: "Exagear Automation Scripts - Scripts designed for automating features", location: "https://bryanwandrych.com/Downloads/Termux/Files/Exagear-Scripts.zip", Description: "Not Yet Setup"},
    ]

    return (
        <div>
            <h1>Download <a href={"https://termux.com/"}>Termux-App</a> Based Scripts & Files</h1>
            <h2>Download Usage: wget [Script/File URL]</h2>
            <h2>Scripts: </h2>
            <ul>
                {TermuxScripts.map((Text) => (
                    <div>
                        <h3><li>{Text.Text}: <a href={Text.location}>Download</a></li> </h3>
                    </div>
                ))}
            </ul>

            <h2>Files: </h2>
            <ul>
                {TermuxFiles.map((Text) => (
                    <div>
                        <h3><li>{Text.Text}: <a href={Text.location}>Download</a></li> </h3>
                    </div>
                ))}
            </ul>
            <hr/>
        </div>
    );
};

export default Download;