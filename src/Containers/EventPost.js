import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import Loader from '../Components/Loader'

import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function EventPost() {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`{
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        title
        body
        bodyHTML
        url
        bodyText
        number
        bodyHTML
        updatedAt
        id
      }
    }
  }
  `;
  const [post, setPost] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        setPost(issues);
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
      {post.title &&
        <Container className="mt-4" style={{ minHeight: "70vh" }}>
          <Breadcrumb className="small p-0">
            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/events">Events</Link></BreadcrumbItem>
            <BreadcrumbItem active>{post.title}</BreadcrumbItem>
          </Breadcrumb>
          <h2 className="text-primary font-weight-bold mb-3">{post.title}</h2>
          <Markdown>
            {post.body}
          </Markdown>
        </Container>
      }
    </>
  );
}
