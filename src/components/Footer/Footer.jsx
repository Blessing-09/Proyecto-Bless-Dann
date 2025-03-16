 import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faX, faPhone } from '@fortawesome/free-brands-svg-icons';
// import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';

function ContainerExample() {
  return (
  <>
    <Container>
      <Row>
        <Col>
          <a href="https://www.facebook.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
          </a>
        </Col>
        <Col>
          <a href="https://x.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={faX} size="2x" /> */}
          </a>
        </Col>
        <Col>
          <a href="https://play.google.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={faGooglePlay} size="2x" /> */}
          </a>
        </Col>
        <Col>
          <a href="https://www.apple.com/app-store/" className="mx-2" target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={faApple} size="2x" /> */}
          </a>
        </Col>
        //* Logo de Domino's Pizza */
        <col>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Domino%27s_Pizza_Logo.svg" alt="Domino's Pizza" height="50" />
        </col>
        //* Icono de teléfono */
        <Col>
          <a href="tel:+123456789" className="mx-2">
            {/* <FontAwesomeIcon icon={faPhone} size="2x" /> */}
          </a>
        </Col>     
      </Row>
    </Container>
  </> 
);
}



export default ContainerExample;
// Compare this snippet from src/components/FirstHeading/FirstHeading.css: