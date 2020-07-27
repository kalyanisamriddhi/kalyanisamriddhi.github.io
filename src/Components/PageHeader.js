import React from "react";
import headerBg from '../img/header-title.png';
import styled from "styled-components";

const PageHeader = ({ title }) => {
  return (
    <>
      <Header>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <h1 className="text-primary font-weight-bold mb-4">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

const Header = styled.div`
  height: 300px;
  background-image: url(${headerBg});
  background-size: cover;
  @media (max-width: 991.98px) { 
    height: 250px;
  }
`

export default PageHeader;