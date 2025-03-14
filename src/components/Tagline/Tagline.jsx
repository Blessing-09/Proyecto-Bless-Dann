import './Tagline.css';

import PruebalosAhora from '../../assets/img/2_pakecomp_pollos_MV.webp'
import Pakecomartas from '../../assets/img/1_pakecomp_pollos_PC.webp'
import Stylecroissant from '../../assets/img/999crois_rec_coreg_nopedido_PC.webp'

const Tagline = () => {
  return (
    <div className='tagline-box container-xl p-0'>
      <div className='tagline-imagen-precio row'>
        <a href="https://www.just-eat.es/restaurants-croissant-showtime-madrid/menu" target="_blank" rel="noreferrer">
          <img className='tagline-imagen-croissant' src={Stylecroissant} alt=""/>
        </a>
        <span className='tagline-precio-oferta col-12'>9'99€</span>
      </div>
      <div className='row'>
        <img className='col-6 col-lg-6 p-0' src={Pakecomartas} alt="" />
        <img className='col-6 col-lg-6 p-0' src={PruebalosAhora} alt="" />
      </div>
    </div>
  )
}
export default Tagline;