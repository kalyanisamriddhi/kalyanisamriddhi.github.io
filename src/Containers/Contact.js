import React, { useState } from "react";
import Icon from "@mdi/react";

import { contactArray } from '../text';
import { Container, Button, Row, Col } from 'reactstrap'
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
    <div style={{ padding: "0 0 40px 0" }}>
      <PageHeader title="Contact Us" />
      <div style={{ padding: "70px 0 0 0" }}>
        <Container>
        <iframe width="100%" height="500px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Kalyani Samriddhi" src="https://maps.google.com/maps?width=692&amp;height=524&amp;hl=en&amp;q=Kalyani%20Solvex,%20Sudarshanpur,%20Raiganj,%20Uttar%20Dinajpur,%20West%20Bengal%20-%20733134%20West%20Bengal+(Kalyani%20Solvex)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=e619af8393e11b886abdce2995ede4f6a2243a6e'></script>
          <Row className="mt-5">
            <Col sm="12" lg="7">
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
            </Col>
            <Col sm="12" lg={{ offset: 1, size: 4 }} className="mt-5 mt-lg-0">
              {contactArray.map((data, i) => {
                return (
                  <div className="media" key={i}>
                    <span><Icon path={data.icon} color="#072366" size={1} /></span>
                    <div className="media-body ml-2">
                      <h5 className="mb-0 text-primary font-weight-light">{data.title}</h5>
                      <p className="mb-4 text-secondary pr-5">{data.text}</p>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  );
}

export default Contact;
