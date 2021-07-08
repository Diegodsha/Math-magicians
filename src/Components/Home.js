import React from 'react';
import styled from 'styled-components';
import { TextWithShadow } from './Calculator';
import welcome from '../assets/welcome.jpg';

const StyledHome = styled.div`
  background-color: #ffffff82;
  border-radius: 0.5rem;
  img {
    width: 500px;
    border-radius: 0.5rem;
    margin: 16px 0;
  }
`;

const Home = () => (
  <StyledHome className="container text-center">
    <TextWithShadow className="text-white display-2">
      Welcome to Math Magicians!
    </TextWithShadow>
    <img className="img-fluid" src={welcome} alt="welcome" />
    <TextWithShadow className="text-white">
      We are an enthusiastic team based in France that loves teaching and
      helping with all topics related to Mathematics. Our goal is that you start
      loving it as much as we do by providing efficient, fun to use and,
      beautifully designed web and mobile tools (free to use of course) that
      will help you through your learning path and will enhance your experience
      as a Mathematics lover.
    </TextWithShadow>
  </StyledHome>
);

export default Home;
