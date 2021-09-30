import "./index.css"
import TrianglesIcon from "../../img/triangles-icon.svg"
import Polygon from "../../img/polygon-icon.svg"
import PersonIcon from "../../img/person-icon.svg"
import ArrowIcon from "../../img/arrow-icon.svg"

function FirstPage(){
    return(
        <div className = "page">
            <div className = "left-block">
                <div className = "pageTheme"> 
                    <div className = "themeText">
                        ПРОЕКТНОЕ 
                        ПРОГРАММИРОВАНИЕ              
                        <br/>M&C - JAVA РАЗРАБОТКА
                    </div>
                </div>
                <div className = "left-block__item">
                    <div className = "left-block__btn-block">
                    <button className = "applicationForm">Оставить заявку</button>
                    </div>
                    <div className =  "arrowIcon">
                        <img src = {ArrowIcon}></img>
                    </div>
                </div>
            </div>
            <div className = "backgroundTriangles">
                <div className = "trianglesIcon">
                    <img src = {TrianglesIcon}></img>
                </div>
                <div className = "polygon">
                    <img src = {Polygon}></img>
                </div>
                <div className = "personIcon">
                    <img src = {PersonIcon}></img>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;