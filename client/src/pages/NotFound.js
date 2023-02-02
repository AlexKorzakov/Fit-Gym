import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const noMatch = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Spinner animation="grow" />
      <h1>There is nothing to show here!</h1>
    </Container>
  );
};

export default noMatch;
