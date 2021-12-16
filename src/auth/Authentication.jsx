import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";

const spinnerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fe8f7c",
};

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(false);

  if (pending) {
    return (
      <Container fluid style={spinnerStyle}>
        <Spinner animation="border" role="status" size="md">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
