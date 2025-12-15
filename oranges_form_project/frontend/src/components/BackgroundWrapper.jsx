import React from "react";
import background from "../assets/login_page_background_img_2.jpg";

const BackgroundWrapper = ({ children }) => {
  return (
    <div
      className="background-wrapper"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
