import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody } from "reactstrap";
import styled from "styled-components";

const EventCard = ({ data, sizeLg }) => {
  const [eventImg, setEventImg] = useState(null);

  useEffect(() => {
    let imgOccur = data.body.indexOf("![event-img]");
    if (imgOccur !== -1) {
      let cutString = data.body.substr(imgOccur);
      let imgStart = cutString.indexOf('(') + 1;
      let imgEnd = cutString.indexOf(')');
      let lenOfImgUrl = imgEnd - imgStart;
      setEventImg(cutString.substr(imgStart, lenOfImgUrl));
    }
  }, [data.body]);

  return (
    <Col sm="12" lg={sizeLg ? sizeLg : "3"} className={`my-4 ${eventImg ? "" : "d-none"}`}>
      <LinkCustom to={`/event/${data.title}/${data.number}`}>
        <CardCustom className="border-0 rounded-0 h-100">
          <EventImg className="rounded-0" top width="100%" src={eventImg} alt="" />
          <CardBody className="p-3">
            <p className="text-primary mb-0" style={{ letterSpacing: '1px' }}>{data.title}</p>
          </CardBody>
        </CardCustom>
      </LinkCustom>
    </Col>
  );
}

const CardCustom = styled(Card)`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`

const LinkCustom = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

const EventImg = styled(CardImg)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export default EventCard;