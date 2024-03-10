import React from "react";
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="light text-center my-4">
      <Alert.Heading>EPIBOOKS</Alert.Heading>
      <p>
        Welcome to a different book store, where all your favourites stories starts.
      </p>
      </Alert>
  );
}

export default Welcome;