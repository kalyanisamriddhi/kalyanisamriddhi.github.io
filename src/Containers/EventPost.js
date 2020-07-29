import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import Loader from '../Components/Loader'
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function EventPost() {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`{
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        title
        body
      }
    }
  }
  `;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [drive, setDrive] = useState('');
  const [img, setImg] = useState('');
  const [post, setPost] = useState('');
  const { loading, error, data } = useQuery(GET_POSTS);

  const extractData = (tag, text) => {
    let tagOccur = text.indexOf(tag);
    if (tagOccur !== -1) {
      let cutString = text.substr(tagOccur);
      let tagStart = cutString.indexOf('(') + 1;
      let tagEnd = cutString.indexOf(')');
      let lenOfTag = tagEnd - tagStart;
      return cutString.substr(tagStart, lenOfTag);
    }
    return '';
  }

  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        let scrapeText = issues.body;
        let imgLink = extractData("![event-img]", scrapeText);
        let authorName = extractData("[author]", scrapeText);
        let eventDate = extractData("[date]", scrapeText);
        let eventLocation = extractData("[location]", scrapeText);
        let driveLink = extractData("[drive]", scrapeText);
        setAuthor(authorName);
        setDate(eventDate);
        setLocation(eventLocation);
        setDrive(driveLink);
        setImg(imgLink);
        let driveIndex = scrapeText.indexOf("[drive]");
        scrapeText = scrapeText.substr(driveIndex);
        driveIndex = scrapeText.indexOf(')');
        scrapeText = scrapeText.substr(driveIndex + 1);
        setTitle(issues.title);
        setPost(scrapeText);
      }
    }
  }, [loading, error, data]);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {title &&
        <Container className="mt-4" style={{ minHeight: "70vh", paddingBottom: "30px" }}>
          <Breadcrumb className="small p-0">
            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/events">Events</Link></BreadcrumbItem>
            <BreadcrumbItem active>{title}</BreadcrumbItem>
          </Breadcrumb>
          <Row className="mt-3 mb-lg-2">
            <Col className="order-2 order-lg-1 mb-2">
              <h2 className="text-primary font-weight-bold mb-0">{title}</h2>
              {author && <p className="text-secondary font-weight-light mb-0">Author: {author}</p>}
              {date && <p className="text-secondary font-weight-light mb-0">Date: {date}</p>}
              {location && <p className="text-secondary font-weight-light mb-1">Location: {location}</p>}
              {drive && <><p className="text-secondary font-weight-light mb-0">For more event images and details follow the link below.</p>
                <Button color="success" href={drive} className="px-3 rounded-0 mt-1" size="sm" target="_blank" rel="noopener noreferrer">Drive</Button></>}
            </Col>
            <Col sm="12" lg="5" className="order-1 order-lg-2 mb-2">
              <img src={img} className="w-100 img-fluid shadow" alt="" />
            </Col>
          </Row>
          <Markdown>
            {post}
          </Markdown>
        </Container>
      }
    </>
  );
}