import "./HomePageContact.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImgCocinero from "../../assets/img/chef-uniforme-blanco-prepara-piz.webp";
import ImgMasterpizza from "../../assets/img/composicion-profesional-pizza-co.webp";
import { Button, Collapse, Form } from "react-bootstrap";

const HomePageContact = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={ImgCocinero} />
            <h5 className="card-title">LA BONA PIZZA</h5>
            <p className="La masa tradicional"></p>
            <div className="col-6">
              <img src={ImgMasterpizza} />
              <h5 className="card-title">MAESTROS DE LA BONA PIZZA</h5>
              <p className="card-text">
                Crea tu propia pizza eligiendo los ingredientes que mas te
                gusten
              </p>
              <Button
                variant="primary"
                onClick={() => setOpen(true)}
                aria-controls="contacto"
                aria-expanded={open}
              >
                Ver más
              </Button>
            </div>

            {/* Formulario de contacto que se muestra cuando se hace clic en "Ver más" */}
            <Collapse in={open}>
              <div className="mt-4">
                <h2>Cuestionario de Contacto</h2>
                <Form>
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Introduce tu nombre"
                    />
                  </Form.Group>
                </Form>
              </div>
            </Collapse>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu correo electrónico"
              />
            </Form.Group>

            <Form.Group controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje aquí"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageContact;
