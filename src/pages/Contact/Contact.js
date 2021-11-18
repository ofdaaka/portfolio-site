import React from "react";
import emailjs from "emailjs-com";
import {
  CssBaseline,
  Grid,
  Icon,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
  FormGroup,
} from "@material-ui/core";
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Container,
    NavbarBrand,
  } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";
import { Telegram } from "@material-ui/icons";

const Contact = () => {

    function sendEmail(e) {

        e.preventDefault();

    emailjs.sendForm('service_1bqj8zo', 'template_fblr1np', e.target, 'user_v2cOujQT28pmDiTtiXore')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  return (
    <>
    <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Contact Me</h6>
        </Grid>
    <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Company" name="company"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn contact_button" value="Send Message" icon={<Telegram/>}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Grid>
      
    </>
  );
};

export default Contact;

