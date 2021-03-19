import React from 'react'
import './MainContent.scss'
import Description from './Description'
import ImageGallery from 'react-image-gallery';
import { FormOutlined } from '@ant-design/icons'
import vr_man from './../../assets/vr_man.jpg';
import SliderComponent from './SliderComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MainContent(props) {

    const classNames = require('classnames');

    return (
        <div className="main">
            <div className="main__sections">
                <p className="main__sections--element">Головной раздел</p>
                <p className="main__sections--element">Предшествующий странице раздел</p>
            </div>
            <h1 className="main__headline">Кафедра экономики и инвестиций</h1>
            <div className="main__content">
                <div className="main__content--container">
                    <Description text={"24/36. Крупный текст под основным заголовком. Кодекс определяет порядок действий работников ситуации конфликта интересов, объявляет нетерпимость к коррупционному поведению, закрепляет принципы заботы об экологии, запрета на дискриминацию. Отступ абзаца равен пустой строке. Положения кодекса обязательны для исполнения работниками компании (в том числе всеми членами Правления)."} />
                    <Description text={"Отступ абзаца равен пустой строке. Положения кодекса обязательны для исполнения работниками компании (в том числе всеми членами Правления)."} />
                </div>
                <div className="main__content--slider">
                    <Carousel>
                    <SliderComponent title="Применение технологий искусственного интеллекта в нефтегазовой области"
                                            description="Вы узнаете, что такое машинное обучение, как применить его в работе и где учиться, чтобы начать заниматься такими проектами"
                                            img={vr_man}/>
                    <SliderComponent title="Применение технологий искусственного интеллекта в нефтегазовой области"
                                            description="Вы узнаете, что такое машинное обучение, как применить его в работе и где учиться, чтобы начать заниматься такими проектами"
                                            img={vr_man}/>
                    <SliderComponent title="Применение технологий искусственного интеллекта в нефтегазовой области"
                                            description="Вы узнаете, что такое машинное обучение, как применить его в работе и где учиться, чтобы начать заниматься такими проектами"
                                            img={vr_man}/>
                    </Carousel>
                </div>
            </div>
            <div className="main__tags">
                <span className="main__tags--element">Машинное обучение</span>
                <span className="main__tags--element">IBM</span>
                <span className="main__tags--element">AI</span>
                <span className="main__tags--element">Бухгалтерский учет и аудит</span>
            </div>
            <div className="main__classificators">
                <h3 className="main__classificators--headline">Классификаторы</h3>
                <div className="main__classificators--elements">
                    <span className="main__classificators--elements--element">Гидролиз в ходе реакций катаболизма</span>
                    <span className="main__classificators--elements--element">Авиационная техника по горюче-смазочным материалам</span>
                </div>
            </div>
            <div className="main__competence">
                <h3 className="main__competence--headline">Компетиции</h3>
                <div className="main__competence--elements">
                    <span className="main__competence--elements--element">Изучение английского языка</span>
                    <span className="main__competence--elements--element">Новая тест</span>
                    <span className="main__competence--elements--element">Формирование стоимости строительства скважин и ЗБС</span>
                    <span className="main__competence--elements--element">Изучение английского языка</span>
                    <span className="main__competence--elements--element">Геонавигация горизонтальных скважин</span>
                </div>
            </div>
            <div className="main__editing">
                <FormOutlined style={{ fontSize: '20px' }}/> 
                <h4 className="main__editing__title">Редактировать</h4>
            </div>
        </div>
    )
}

export default MainContent
