import React, {useEffect} from "react";
import error from '../Icons/about.png'

const NotFound = ({handlePageLocation, handlePictureChange, changeFavicon}) => {
    handlePageLocation("404 Page Not Found");
    handlePictureChange(error);
    changeFavicon(error);

    useEffect(() => {
        document.title = "404 PAGE NOT FOUND"
    }, [])

    return (
        <div>
            <h1>ERROR: 404 PAGE NOT FOUND</h1>
        </div>
    );
};

export default NotFound;