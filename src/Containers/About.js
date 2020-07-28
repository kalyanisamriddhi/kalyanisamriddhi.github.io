import React from "react";

import { text, aboutArray } from "../text";
import { Container, Row, Col } from 'reactstrap'
import PageHeader from "../Components/PageHeader";
import AboutCard from "../Components/AboutCard";
import aboutImg from '../img/about.png';
import styled from "styled-components";

const About = () => {

  return (
    <div style={{ padding: "0 0 70px 0" }}>
      <PageHeader title="About Us" />
      <div style={{ background: "#F8FCFF", padding: "100px 0" }}>
        <Container fluid>
          <Row>
            <Col className="text-center" sm="12" md={{ offset: 2, size: 8 }} lg={{ offset: 3, size: 6 }}>
              <h5 className="text-success font-weight-bold mb-3">{text.about.title2}</h5>
              <h1 className="text-primary font-weight-bold mb-4">{text.about.head2}</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {aboutArray.map((data, i) => {
              return <AboutCard title={data.title} icon={data.icon} text={data.text} isLight={i % 2 === 0} key={i} />;
            })}
          </Row>
        </Container>
      </div>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="d-flex justify-content-center flex-column" sm="12" lg={{ offset: 1, size: 5 }}>
            <h5 className="text-success font-weight-bold mb-3">{text.about.title}</h5>
            <h1 className="text-primary font-weight-bold mb-4">{text.about.head}</h1>
            <p className="text-secondary">{text.about.text1}</p>
            <p className="text-secondary">{text.about.text2}</p>
          </Col>
          <Col className="text-center mt-4 mt-lg-0" sm="12" lg="5">
            <AboutImg src={aboutImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const AboutImg = styled.img`
  @media (max-width: 991.98px) { 
    width: 100%;
  }
`

export default About;
