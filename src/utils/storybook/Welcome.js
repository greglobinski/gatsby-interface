import React from 'react';
import styled from 'react-emotion';

const Welcome = styled(`div`)`
  padding: 2rem;
  font-family: sans-serif;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

export default () => (
  <Welcome>
    <h1>Welcome to Gatsby Interface</h1>
    <p>Shared User Interface components for use with Gatsby Cloud</p>
  </Welcome>
);
