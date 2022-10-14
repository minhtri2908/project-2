import '../styles/css/bootstrap.min.css';
import './home.css';
import hinh1 from '../image/173281189.jpg';
import hinh2 from '../image/1651729679291.jpg';
import hinh3 from '../image/hinh1_dxxx.jpg';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light justify-content-center">
          <a href="/" className="navbar-brand logo_team">
            Tour & Travel
          </a>
          <form className="form-inline">
            <button
              type="button"
              className="btn btn-outline-info color_hover_btn_outline_info"
            >
              Đăng thông tin phòng nghỉ của quý khách
            </button>
            <Link to="/login">
              <button type="button" className="btn btn-light btn_sign">
                Đăng Nhập
              </button>
            </Link>
          </form>
        </nav>
        <nav className="navbar navbar-light justify-content-center">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Lưu Trú
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuyến Bay
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuyến Bay + Khách sạn
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Thuê xe
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Địa điểm tham quan
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Taxi sân bay
          </button>
        </nav>
      </header>
      <div className="contener">
        {/* <img src={body} alt={'body'} /> */}
        {/*=========================================*/}

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner image-slide">
            <div className="carousel-item active">
              <img className="d-block w-100" src={hinh1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={hinh2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={hinh3} alt="Third slide" />
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev button-left-right "
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next button-left-right"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
            <div className="info_select">
              <div className="text_1">Áp dụng đến 3/1/2023</div>
              <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
              <div className="text_3">
                Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của
                bạn
              </div>
              <button
                type="button"
                className="btn btn-primary buton_text zindex"
              >
                Khám phá ưu đãi
              </button>
            </div>
          </div>
          <div>
            <ol className="carousel-indicators position-relative location-select-image">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
        {/*=========================================*/}
      </div>
      <img className="d-block w-100 h-100" src={hinh1} alt={'body'} />
    </div>
  );
}

export default home;
