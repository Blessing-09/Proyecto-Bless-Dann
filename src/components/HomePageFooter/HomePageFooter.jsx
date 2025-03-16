import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePageFooter.css";

function HomePageFooter() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <a
              href="https://www.facebook.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.instagram.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://x.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://play.google.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGooglePlay} size="2x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.apple.com/app-store/"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faApple} size="2x" />
            </a>
          </Col>
          {/* Logo de Domino's Pizza */}
          <Col>
            <img
              src="https://imgs.search.brave.com/y_mB27OqqtrxPvmEV0uLdr6Hs4lKYWxnITx9bbvkeG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2Rvd24uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L2RvbWlub3MtcGl6/emEtbG9nby0wLTIw/NDh4MjA0OC0xLTMw/MHgzMDAucG5n"
              alt="Domino's Pizza"
              height="50"
            />
          </Col>
          {/* Icono de teléfono */}
          <Col>
            <a href="tel:+123456789" className="mx-2">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePageFooter;
