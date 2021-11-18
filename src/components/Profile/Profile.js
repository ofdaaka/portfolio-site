import { Typography } from "@material-ui/core";
import React from "react";
import pic from "../../assets/images/femi.jpg";
import CustomTimeLine, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import "./Profile.css";
//import Timeline from "@material-ui/lab/Timeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span> {""}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

export const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={pic} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeLine icon={<PersonOutlineOutlinedIcon />}>
            <CustomTimeLineItem title='Name' text={resumeData.name} />
            <CustomTimeLineItem title='Title' text={resumeData.title} />
            <CustomTimeLineItem title='Email' text={resumeData.email} />
           {/* <CustomTimeLineItem title='Job' text={resumeData.job} />
            <CustomTimeLineItem title='City' text={resumeData.city} /> */}
            

            {Object.keys(resumeData.socials).map(key => (
                <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            ))}
        </CustomTimeLine>
        
      </div>
    </div>
  );
};

export default Profile;
