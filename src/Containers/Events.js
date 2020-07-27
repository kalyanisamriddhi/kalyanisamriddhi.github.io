import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import Loader from '../Components/Loader'
import EventCard from '../Components/EventCard'

import { Container, Row, Col } from 'reactstrap'

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: {direction: DESC, field: CREATED_AT}) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        id
      }
    }
  }
}
`

const Events = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }
      if (data) {
        setPosts(data?.repository?.issues?.nodes)
      }
    }
  }, [loading, error, data]);

  return (
    <div style={{ padding: "70px 0" }}>
      <Container fluid>
        <Row>
          <Col className="text-center" sm="12" md={{ offset: 2, size: 8 }} lg={{ offset: 4, size: 4 }}>
            <h1 className="text-primary font-weight-bold mb-4">Explore our latest causes that we works</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center" style={{minHeight: "40vh"}}>
          {
            loading
              ? <Loader />
              : posts.map((v, i) => {
                return <EventCard data={v} key={i} sizeLg="4" />;
              })
          }
        </Row>
      </Container>
    </div>
  );
}

export default Events;
