import Logo from "../../assets/img/dominos-logo.svg";
import LoginIcon from "../../assets/icons/user-icon-animated.gif";
import "./HomePageNavbar.css";

const HomePageNavbar = () => {
  return (
    <div className="NavbarAll row d-flex justify-content-center bg-body-tertiary navbar-expand-lg">
      <section className="logo col-3 d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="#">
          <div>
            <img
              className=""
              src={Logo}
              alt="Logo Dominos Pizza"
              width={"225px"}
              height={"86px"}
            />
          </div>
        </a>
      </section>
      <section className="navbars col-9 pt-2 mb-3">
        <NavbarFirst />
        <NavbarSecond />
      </section>
    </div>
  );
};
function NavbarFirst() {
  return (
    <nav
      id="first-nav"
      className="first-nav navbar bg-body-tertiary justify-content-end align-items-center p-0"
    >
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Seleccionar tienda
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tel:+34901905905">
              901 905 905
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Castellano
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dromdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a className="dromdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a className="dromdown-item" href="#">
                  Link 1
                </a>
              </li>
            </ul>
          </li>
          <button
            type="button"
            className="btn p-0"
            data-bs-toggle="modal"
            data-bs-target="#modal-login-user"
          >
            <span style={{ color: "#006AAA", fontWeight: "bold" }}>
              Mi Domino's
            </span>
            <img className="icon icon-login" src={LoginIcon} />
          </button>
          <div
            className="modal fade"
            id="modal-login-user"
            tabIndex={-1}
            aria-labelledby="modal-login-user"
            aria-hidden="true"
          >
            <section className="modal-dialog">
              <div className="modal-content">
                <section className="modal-header">
                  <h5 className="modal-title"></h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </section>
                <section className="modal-body">
                  <p className="modal-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis, molestias! Omnis dolor hic repellat aspernatur,
                    facere possimus doloribus placeat! Ducimus hic molestiae
                    autem rerum, quo saepe consequatur id culpa odio?
                  </p>
                </section>
                <section className="modal-footer">
                  <button type="button" className="btn btn-secondary">
                    Reset
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </section>
              </div>
            </section>
          </div>
        </ul>
      </div>
    </nav>
  );
}
function NavbarSecond() {
  return (
    <nav className="second-nav navbar p-0">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarItemsShow"
        aria-controls="navbarItemsShow"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarItemsShow"
      >
        <ul className="navbar-nav lista-element-navbar2">
          <li className="nav-item">
            <a className="nav-link element-navbar2" href="#">
              Promociones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link element-navbar2" href="#">
              Nuestra Carta
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link element-navbar2" href="#">
              Crea tu pizza
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link element-navbar2" href="#">
              Siente la Calidad
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link element-navbar2" href="#">
              Pizza Tracker
            </a>
          </li>
        </ul>
        <button className="btn-element-navbar2">INICIAR PEDIDO</button>
      </div>
    </nav>
  );
}
export default HomePageNavbar;
