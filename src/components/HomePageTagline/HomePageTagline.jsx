import "./HomePageTagline.css";

import PruebalosAhora from "../../assets/img/2_pakecomp_pollos_MV.webp";
import Pakecomartas from "../../assets/img/1_pakecomp_pollos_PC.webp";
import Stylecroissant from "../../assets/img/999crois_rec_coreg_nopedido_PC.webp";

const HomePageTagline = () => {
  return (
    <div className="tagline-box container-xl p-0 overflow-hidden">
      <div className="tagline-imagen-precio">
        <a
          className="p-0 m-0 w-100 h-100"
          href="https://www.just-eat.es/restaurants-croissant-showtime-madrid/menu"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="tagline-imagen-croissant w-100"
            src={Stylecroissant}
            alt="Imagen de Pizza estilo croissant"
          />
        </a>
        <span className="tagline-precio-oferta">9'99€</span>
      </div>
      <div className="row">
        <img
          className="col-6 col-lg-6 p-0"
          src={Pakecomartas}
          alt="Imagen de Oferta , donamos 50 cent"
        />
        <img
          className="col-6 col-lg-6 p-0 img-fluid"
          src={PruebalosAhora}
          alt="Imagen nuevo mega Combo"
        />
      </div>
    </div>
  );
};
export default HomePageTagline;
