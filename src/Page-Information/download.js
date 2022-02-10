import React, {useEffect} from "react";
import download from '../Icons/download.png'

const Download = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("Downloads");
    handlePictureChange(download);
    changeFavicon(download);

    useEffect(() => {
        document.title = "Downloads"
    }, [])

    return (
        <div>
            <h1>Download</h1>
        </div>
    );
};

export default Download;