import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-404">
      <h1>404 Page Not Found</h1>
      <h4>Sorry!! The Page You Are Looking For Is Not Exists.</h4>
      <Link to="/">
        {" "}
        <button className="go-to-home-btn">Go To Home</button>
      </Link>
    </div>
  );
};

export default Error;
