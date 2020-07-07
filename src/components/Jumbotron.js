import React from 'react';
import { Jumbotron as Jumbo, Container,  } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 350px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Hi I'm Asghar Sheikh, A Dynamic Software Developer skilled at developing complex solutions, possessing creative thinking skills, high energy integrity. I am dedicated to constantly improve on  tools and infrastructure to maximize productivity,
           minimize system downtime and quickly respond to the changing needs of a business
        </p>
        
      </Container>
    </Jumbo>
  </Styles>
)