import React, { useState } from "react";

import { Container, Button } from 'reactstrap'
import PageHeader from "../Components/PageHeader";

const Contact = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();
    let name = state.name;
    let email = state.email;
    let message = state.message;
    var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdpirHf9BKD8cJIjXtm27DNNkkXQXeOOztnqdVSukjIdZ3awg/formResponse?usp=pp_url&entry.888954386=" + name + "&entry.851013145=" + email + "&entry.1107742114=" + message;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", formUrl);
    xmlHttp.send(null);
    setState({
      name: "",
      email: "",
      message: "",
    });
    setIsSent(true);
  }

  const handleChange = (event) => {
    setIsSent(false);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <div style={{ padding: "0 0 70px 0" }}>
      <PageHeader title="Contact Us" />
      <div style={{ padding: "70px 0 0 0" }}>
        <Container>
          <h3 className="font-weight-bold text-primary">Get in touch</h3>
          <form onSubmit={submitMessage}>
            <div className="form-group">
              <input type="text" name="name" value={state.name} onChange={handleChange} className="form-control" id="nameContact" placeholder="Full Name" aria-describedby="nameHelp" required />
              <label className="floating-label">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" value={state.email} onChange={handleChange} className="form-control" id="emailContact" placeholder="Email" aria-describedby="emailHelp" required />
              <label className="floating-label">Email</label>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" value={state.message} onChange={handleChange} id="messageContact" placeholder="Message" rows="10" maxLength="500" required ></textarea>
              <label className="floating-label">Message</label>
            </div>
            <div className="d-flex">
              <Button outline type="submit" color="success" size="lg" className="text-uppercase rounded-0 px-4">Send</Button>
              <div className={`mb-0 ml-auto d-flex align-items-center small border-0 py-0 text-uppercase alert alert-success hidden ${isSent ? "" : "hide"}`}>Success!</div>
            </div>
          </form>
        </Container>
      </div>
    </div >
  );
}

export default Contact;
