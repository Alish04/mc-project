import "./index.css"
import Backpack from "../../img/backpack-icon.svg"
import HatIcon from "../../img/hat-icon.svg"

function ThirdPage(){
    return(
        <div className = "thirdPage">
            <div className = "pageName"> Для кого предназначено наше обучение? </div>
            <div className = "blocks">
                <div className = "blockForSchool">
                    <div className = "backpackIcon">
                        <img src = {Backpack}></img>
                    </div>
                    <div className = "blockTheme"> 
                        Для школьников 9-11 классов, желающих изучить программирование 
                    </div>
                </div>
                <div className = "blockForUniversity">
                    <div className = "hatIcon"> 
                        <img src = {HatIcon}></img>
                    </div>
                    <div className = "blockTheme"> 
                        Для студентов 1-4 курсов, желающих углубить свои знания в разработке 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;