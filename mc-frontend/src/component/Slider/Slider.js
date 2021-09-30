import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = () => {
    const arr = [
        {
            name: 'Основы программирования на Java - алгоритмизация. Введение в Java.',
            list: [
              '• Ввод-вывод',
              <p> • Условные операторы </p> ,
              <p>• Операторы цикла</p>,
              <p>• Массивы</p>,
              '• Строки',
            ],
        },
        {
            name: 'Back-end с фреймворком Javalin.',
            list : [
              '• Основы сетей(OSI, TCP, UDP, HTTP)',
              <p>• Основы баз данных(нормаьные формы до 3NF, SQL), ORM</p>,
              <p>• Сериализация/десериализация JSON(Jackson)</p>,
              <p>• Методологии разработки веб-сервисов(REST)</p>,
              <p>• Основы информационной безопасности(Authentification/Authorization, Passwords salting + hashing)</p>,
              '• Git',
            ],
        },
        {
            name: 'Обьектно-ориентированнное программирование на Java.',
            list : [
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
            ],
        },
    ]
  return (
    <div className = "sliderPage">
      <div className = "sliderPageName">
        Уровни обучения:
      </div>
      <div className="slider">
          <Carousel centerMode={true} itemClass={'slider__main-item'} draggable={false} infinite={true} showDots={true} responsive={responsive}>
            {arr.map((elem, i) => (
            <div className="slider__item">
              <div className = "slider__item-title">
                {elem['name']}
              </div>
              <div className = "slider__item-text">
                {elem['list']}
              </div>
            </div>
            ))}</Carousel>
      </div>
    </div>
  )
}

export default Slider;
