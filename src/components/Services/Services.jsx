import './Services.css';
import tierMenu from '../../assets/img/02_Tier-Menu-CLAZZICAS-2022.webp';
import texasBbq from '../../assets/img/TexasBBQCrispyDelivery_TS220921.webp';

const Services = () => {
  return (
    <>
    {/* MAIN CONTAINER STARTS here */}
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'> 
        <div className='row'>
          <div className='col-sm-12'>
             <img src={tierMenu} className="d-block w-100 tierMenu" alt="Image 1"/>
          </div>
        </div>
          {/* First carousel starts here with a div to store it all */}
        <div className='hello row'>
          <div className='col-sm-12'>
          {/* carouselExample that contains the carousel and buttons starts here */}
         <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">  
          {/* carouselInner starts here */}
          <div className="carousel-inner">
             {/* First carouselItem starts here */}
            <div className="carousel-item active">
              <div className='row'> 
                <div className='col-sm-3'>
                  <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                  <p>Parmesana Carbonara</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Cabramelizada</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Cremozza Al Estilo Bourbon</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Cheesix</p>
                </div>
            </div>
            </div>
            {/* First carouselItem ends here */}
            
            {/* Second carouselItem starts here */}
            <div className="carousel-item">
              <div className='row'> 
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Alabama Pulled Pork</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Buffalo Chicken</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Hawaiana Crispy</p>
                </div>
                <div className='col-sm-3'>
                <img src={texasBbq} className="d-block w-100 img-fluid" alt="Image 1"/>
                <p>Texas BBQ Crispy</p>
                </div>
              </div>
            </div>
            {/* Second carouselItem starts here */}
          </div>
          {/* carouselInner ends here */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>  
        </div>
         {/* carouselExample that contains the carousel and buttons ends here */}
         </div>
        </div>
        {/* And the first carousel MAIN container ends here */}

        <div className='row tierMenu2'>
          <div className='col-sm-12 '>
             <img src={tierMenu} className="d-block w-100 " alt="Image 1"/>
          </div>
        </div>

      </div>
      {/* MAIN CONTAINER ENDS here */}
    </>
  )
}
export default Services;