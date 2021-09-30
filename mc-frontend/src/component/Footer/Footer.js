import Facebook from "../../img/facebook-icon.svg"
import Twitter from "../../img/twitter-icon.svg"
import Youtube from "../../img/youtube-icon.svg"
import Instagram from "../../img/instagram-icon.svg"
import "./index.css"

function Footer(){
    return(
        <div className = "footer">
            <div className="footer-links">
                <div className="contacts">
                    <div className="links">
                        Контакты:
                    </div>
                    <div className="socials">
                        <img className = "facebook" src = {Facebook}></img>

                        <img className = "twitter" src = {Twitter}></img>

                        <img className = "youtube" src = {Youtube}></img>

                        <a href = "https://www.instagram.com/mathncode/"><img className = "instagram" src = {Instagram}></img></a>
                    </div>
                </div>
                <div className="map">КАРТА</div>
            </div>
            <div className="mnc-footer-icon" > © M&C 2021 </div>
        </div>
    )
}

export default Footer