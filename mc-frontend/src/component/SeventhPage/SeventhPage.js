import "./index.css"

// const elems = document.querySelectorAll('.itemInput')
// let newName = '', newLastName = '', newEmail = ''

// const onChange = (event) => {
//     const { target: { name, value } } = event
//     switch(name) {
//         case 'name': {
//             newName = value
//         }
//         case 'lastname': {
//             newLastName = value
//         }
//         case 'email': {
//             newEmail = value
//         }
//         default:
//             break
//     }
//     console.log({name, value})
// }

// elems.forEach((elem, i) => {
//     elem.addEventListener('change', onChange)
// })

// const button = document.querySelector('.leaveApplication')
// console.log({button})
// const onClick = () => {
//     console.log({ newName, newLastName, newEmail})
    
// }

// button.addEventListener('click', onClick)

function SeventhPage(){
    return(
        <div className = "seventhPage">
            <div className = "seventhPageName">
                Стоимость
            </div>
            <div className = "prices">
                <div className = "aboutPrice">
                    <div className = "lessonCount">
                        8 уроков
                    </div>
                    <div className = "aboutLesson">
                        Занятия проходят 2 раза в неделю по 2 часа
                    </div>
                    <div className = "lessonPrice">
                        20 000 тенге
                    </div>
                </div>
                <form className = "form">
                    <div className = "formName">
                        Оставить заявку на курс
                    </div>
                    <div className = "nameItem">
                        Ваше Имя: 
                        <input className = "itemInput" type="text" name="name" ></input>
                    </div>
                    <div className = "lastNameItem">
                        Ваша Фамилия: 
                        <input className = "itemInput" type="text"  name="lastname"></input>
                    </div>
                    <div className = "emailItem">
                        Ваша Электронная почта: 
                        <input className = "itemInput" type="text" name="email"></input>
                    </div>
                    <button  type = "button" className = "leaveApplication"> Оставить заявку </button>
                </form>
            </div>
        </div>
    )
}

export default SeventhPage;