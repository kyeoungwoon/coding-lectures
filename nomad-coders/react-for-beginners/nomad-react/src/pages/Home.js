import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Svg from "../components/Svg";

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };

  const [showButton, setShowButton] = useState(false);
  // useEffect to show the button after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // control showButton visibility
    }, 5800);

    const handleClick = () => {
      setShowButton(true);
      clearTimeout(timer); // Clear the timer to prevent it from running after click
    };
    document.body.addEventListener("click", handleClick);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="d-flex ms-3 justify-content-center align-items-center vh-100">
        <Col>
          <Row>
            <Svg text={"Hello! i'm,"} />
          </Row>
          <Row>
            <Col>
              <Svg text={"kyeoungwoon"} />
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-around">
          {showButton && ( // render the button after 2 seconds
            <Button variant="info" onClick={goToAbout}>
              Learn More
            </Button>
          )}
        </Col>
      </div>
    </>
  );
}

export default Home;
