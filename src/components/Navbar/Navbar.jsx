import logo from '../../assets/img/dominos-logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (

    <div className='d-flex justify-content-center align-items-center'>
      <div className='headerAllnavbars d-flex justify-content-between align-items-center'>
        <a className='navbar-brand' href="#">
          <div className='logo h-100 d-flex justify-content-center align-items-center'>
            <img className='navbar-brand p-0 m-0' src={logo} alt="Logo Dominos Pizza" width={'250px'}/>
          </div>
        </a>
        <section className='navbars'>
          <nav className='first-nav navbar navbar-expand-lg'>
            <ul className='navbar-nav ms-auto gap-2 fw-bold p-0 m-0'>
              <li className='nav-item'>
                <a className='nav-link' href="#">Seleccionar tienda</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="tel:+34901905905">901 905 905</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href="#" role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Castellano
                </a>
                <ul className='dropdown-menu'>
                  <li><a className='dromdown-item' href="#">Link 1</a></li>
                  <li><a className='dromdown-item' href="#">Link 1</a></li>
                  <li><a className='dromdown-item' href="#">Link 1</a></li>
                </ul>
              </li>
              <button type='button' className='nav-item btn btn-primary' data-bs-toggle='modal' data-bs-target='#modal-login-user'>
                Login
              </button>
              <div className='modal fade' id='modal-login-user' tabIndex={-1} aria-labelledby='modal-login-user' aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title'></h5>
                      <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                      <p className='modal-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, molestias! Omnis dolor hic repellat aspernatur, facere possimus doloribus placeat! Ducimus hic molestiae autem rerum, quo saepe consequatur id culpa odio?</p>
                    </div>
                    <div className='modal-footer'>
                      <button type='button' className='btn btn-secondary'>Reset</button>
                      <button type='button' className='btn btn-primary'>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
          <nav className='second-nav navbar navbar-expand-lg p-0 pt-0 d-flex align-items-center'>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarItemsShow" aria-controls='navbarItemsShow' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse fs-5 gap-5 p-2' id='navbarItemsShow'>
              <ul className='navbar-nav ms-auto gap-2 fw-bold me-2'>
                <li className='navbar-item'>
                  <a className='navbar-link' href="#">Promociones</a> 
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href="#">Nuestra Carta</a> 
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href="#">Crea tu pizza</a> 
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href="#">Siente la Calidad</a> 
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href="#">Pizza Tracker</a> 
                </li>
              </ul>
              <button className="btn btn-danger py-2">INICIAR PEDIDO</button>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
}
export default Navbar;