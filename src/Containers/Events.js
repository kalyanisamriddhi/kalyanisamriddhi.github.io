import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import Loader from '../Components/Loader'
import EventCard from '../Components/EventCard'

import { Container, Row } from 'reactstrap'
import PageHeader from "../Components/PageHeader";

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "event" }, orderBy: {direction: DESC, field: CREATED_AT}) {
      nodes {
        title
        body
        number
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
    <div style={{ padding: "0 0 70px 0" }}>
      <PageHeader title="Our Events" />
      <Container>
        <Row className="justify-content-center mt-5" style={{ minHeight: "40vh" }}>
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
