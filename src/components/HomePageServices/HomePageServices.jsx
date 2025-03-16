import "./HomePageServices.css";
import tierMenu1 from "../../assets/img/02_Tier-Menu-DELUXES-2022.png";
import tierMenu2 from "../../assets/img/02_Tier-Menu-CLAZZICAS-2022.webp";
// import tierMenu3 from "../../assets/img/Crea-tu-pizza-PC.png";
import texasBbq from "../../assets/img/TexasBBQCrispyDelivery_TS220921.webp";

const HomePageServices = () => {
  return (
    <>
      {/* MAIN CONTAINER STARTS here */}
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <img
              src={tierMenu1}
              className="d-block w-100 tierMenu"
              alt="Image 1"
            />
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-md-3'> */}
        {/* carouselExample that contains the carousel and buttons starts here */}
        <div id="carouselExampleControls" className="carousel slide">
          {/* carouselInner starts here */}
          <div className="carousel-inner innerCarou">
            {/* First carouselItem starts here */}
            <div className="carousel-item active carouItem1">
              <div className="row d-flex justify-content-around align-items-center">
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Parmesana Carbonara</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Cabramelizada</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Cremozza Al Estilo Bourbon</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Cheesix</p>
                </div>
              </div>
            </div>
            {/* First carouselItem ends here */}

            {/* Second carouselItem starts here */}
            <div className="carousel-item carouItem2">
              <div className="row d-flex justify-content-around align-items-center">
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Alabama Pulled Pork</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Buffalo Chicken</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Hawaiana Crispy</p>
                </div>
                <div className="col-sm-3">
                  <img src={texasBbq} className="d-block w-100" alt="Image 1" />
                  <p>Texas BBQ Crispy</p>
                </div>
              </div>
            </div>
            {/* Second carouselItem starts here */}
          </div>
          {/* carouselInner ends here */}
          <div>
            <button
              className="carousel-control-prev carouselBtn"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon button-prev"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carouselBtn"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon button-next"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* carouselExample that contains the carousel and buttons ends here */}
        {/* </div> */}
        {/* carouselContainer ends here */}
        {/* </div> */}

        <div className="row tierMenu2 mt-3">
          <div className="col-sm-12 ">
            <img src={tierMenu2} className="d-block w-100 " alt="Image 1" />
          </div>
        </div>
      </div>
      {/* MAIN CONTAINER ENDS here */}
    </>
  );
};
export default HomePageServices;
