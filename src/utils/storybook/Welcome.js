import React from "react"
import styled from "@emotion/styled"

const Welcome = styled(`div`)`
  font-family: sans-serif;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`

export default () => (
  <Welcome>
    <h1>Welcome to Gatsby Interface</h1>
    <p>Shared User Interface components for use with Gatsby Cloud</p>
  </Welcome>
)
