import "./index.css"
import AdinasPhoto from "../../img/adinasPhoto.jpg"
import KirillsPhoto from "../../img/kirillsPhoto.jpg"

function SixPage(){
    return(
        <div className = "sixPage">
            <div className =  "title">
                Тренерский состав
            </div>
            <div className = "coaches">
                <div className = "blockAdina">
                    <div className = "adinasPhoto">
                        <img src = {AdinasPhoto}></img>
                    </div>
                    <div className = "adinasFullName">
                        Адина Магавина
                    </div>
                    <div className = "adinasAchiviements">
                        • Международная Евразийская олимпиада серебро 2012
                        <br/>• Республиканская Олимпиада золото 2012, бронза 2011
                        <br/>• Полуфиналист чемпионата мира по программированию ACM ICPC
                        <br/>• Google I/O, Mountain View, California, USA
                        <br/>• Google Conference Grant, Craft Conference, Budapest, Hungary
                    </div>
                </div>
                <div className = "blockKirill">
                    <div className = "kirillsPhoto">
                        <img src = {KirillsPhoto}></img>
                    </div>
                    <div className = "kirillsFullName">
                        Кирилл Хлыновский
                    </div>
                    <div className = "kirillsAchiviements">
                        • Java/Kotlin разработчик
                        <br/>• Разработал астропроцессор для расчета координат планет относительно небесной сферы
                        <br/>• Разработал фреймворк для создания CLI-интерфейсов
                        <br/>• Преподает стек технологий: ORMLite - Javalin - Jackson
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixPage;