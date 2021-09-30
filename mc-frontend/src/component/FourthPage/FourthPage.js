import "./index.css"
import CurrentProgramsIcon from "../../img/currentPrograms-icon.svg"
import TeacherIcon from "../../img/teacher-icon.svg"
import PortfolioIcon from "../../img/portfolio-icon.svg"

function FourthPage(){
    return(
        <div className = "fourthPage">
            <div className =  "pageTitle">
                Наши преимущества
            </div>
            <div className = "about">
                <div className = "currentPrograms">
                    <div className = "programsIcon">
                        <img src = {CurrentProgramsIcon}></img>
                    </div>
                    <div className = "programsTheme">
                        Актуальные программы.
                    </div>
                    <div className = "programsText">
                        Программа обучения включает в себя актуальные технологии программирования. 
                        Каждый год мы совершенствуем план занятий, вносим изменения в задачи.
                    </div>
                </div>
                <div className = "teachers">
                    <div className = "teachersIcon">
                        <img src = {TeacherIcon}></img>
                    </div>
                    <div className = "teachersTheme">
                        Практикующие тренера.
                    </div>
                    <div className = "teachersText">
                        Наши тренера являются практиками, работают в сфере разработки программного обеспечения.
                    </div>
                </div>
                <div className = "projectForPortfolio">
                    <div className = "portfolioIcon">
                        <img src = {PortfolioIcon}></img>
                    </div>
                    <div className = "portfolioTheme">
                        Проект в портфолио.
                    </div>
                    <div className = "portfolioText">
                        По завершению обучения наши студенты разрабатывают проект, который публикуется в их портфолио.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage;