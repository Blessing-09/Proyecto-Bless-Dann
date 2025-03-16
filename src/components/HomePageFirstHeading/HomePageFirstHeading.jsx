import "./HomePageFirstHeading.css";
import masaRoll from "../../assets/img/masa_roll.webp";

const HomePageFirstHeading = () => {
  return (
    <>
      <NavbarFirstHeading />
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="pizzas-text">Pizzas</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-12 black">
            <div
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#demo"
            >
              ¿Conoces nuestras masas?
            </div>

            <div className="collapse hidden" id="demo">
              <div id="carouselExample" className="carousel slide w-50">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 1"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 2"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 3"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 4"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 6"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 7"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 8"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 9"
                        />
                      </div>
                      <div className="col-2">
                        <img
                          src={masaRoll}
                          className="d-block w-100"
                          alt="Image 10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>¡No olvides elegir tu masa cuando hagas tu pedido!</p>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//! AQUI ESTA EL CODIGO DEL NAVBAR DEL FIRST HEADING

function NavbarFirstHeading() {
  return (
    <>
      <h1>Soy el Navbar del FirstHeading</h1>
    </>
  );
}

export default HomePageFirstHeading;
