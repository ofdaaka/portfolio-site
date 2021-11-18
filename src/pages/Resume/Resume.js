import { Grid, Icon, Paper, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineContent from "@material-ui/lab/TimelineContent";

const Resume = () => {
  return (
    <div>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <h5 className="aboutme_text ml_10">1ST ACT</h5>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
          <h5 className="aboutme_text pt_45 ml_10">2ND ACT</h5>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.aboutSecond}
          </Typography>
        </Grid>
      </Grid>

      {/* Experience and Education */}
      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>

            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {education.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="service">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography className="serice_title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service_description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid
        container
        className="section graybg pb_45 bbrl_6 bbrr_6"
      >
          <Grid item className="section_title mb_30 mt_10">
          <span></span>
          <h6 className="section_title_text">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" className="skill_title">
                      {skill.title}
                    </Typography>
                    {skill.description.map((element) => {
                      return (
                        <Typography
                          variant="body2"
                          className="skill_description"
                        >
                          <TimelineDot
                            variant={"outlined"}
                            className="timeline_dot"
                          />
                          {element}
                        </Typography>
                      );
                    })}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </div>
  );
};

export default Resume;
