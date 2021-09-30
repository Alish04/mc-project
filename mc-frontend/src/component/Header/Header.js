import Logo from "../../img/logo.svg"
import "./index.css"
import {Link, animateScroll as scroll} from "react-scroll";

function Header() {
    return (
      <div className="header">
        <div className = "logo">
            <img   src = {Logo}></img>
        </div>

        <div className="header-links">
            <div className = "header-item">
                <Link activeClass = "active" to = "SecondPage" spy={true} smooth={true} offset = {-50} duration = {500} >
                О нас 
                </Link>
            </div>

            <div className = "header-item">
                <Link activeClass = "active" to = "ThirdPage" spy={true} smooth={true} offset = {-50} duration = {500}>
                Для кого
                </Link>
            </div>

            <div className = "header-item">
                <Link activeClass = "active" to = "Slider" spy={true} smooth={true} offset={-50} duration={500}>
                Программы
                </Link>
            </div>

            <div className = "header-item">
                <Link activeClass = "active" to = "SixPage" spy={true} smooth={true} offset = {-50} duration = {500}>
                Тренера
                </Link>
            </div>

            <div className = "header-item">
                <Link activeClass = "active" to = "SeventhPage" spy={true} smooth={true} offset = {-50} duration = {500}>
                Стоимость
                </Link>
            </div>
        </div>
      </div>
    );
  }
  export default Header;