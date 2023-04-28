import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({error}) => {
    return(
        <div className="errorContainer">
            <h2 style={{ marginBottom: "30px"}}>{error}</h2>
            <Link to="/">Back to Home</Link>
        </div>
    )
};

export default ErrorPage;