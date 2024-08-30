import React from "react";
import Wrapper from "../components/Wrapper";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
  const navigate = useNavigate();
  const goToMap = () => {
    navigate("/map");
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Button variant="info" onClick={goToMap}>
              Map
            </Button>
          </Col>
          <Col>
            <Button variant="info" onClick={goToHome}>
              Home
            </Button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;
