import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.signature}</Typography>
      </div>
      <div classsName="footer_right">
        <Typography className="footer_copyright">
          {" "}
          Designed and Developed By{" "}
          <a href="/" target="_blank">
            Olufemi Daaka
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
