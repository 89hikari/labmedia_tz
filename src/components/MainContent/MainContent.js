import React from 'react'
import './MainContent.scss'
import Description from './Description'
import ImageGallery from 'react-image-gallery';
import { FormOutlined } from '@ant-design/icons'

function MainContent(props) {
    const classNames = require('classnames');
    const images = [
        {
          original: props.vrMan,
          description: 'Из курса вы узнаете о возможностях раздела "Обучение  и развитие", о том, что поможет в развитии собственных компетенций и о дополнительных возможностях в рамках обучения на портале.',
          media : '(width: 606px)'
        },
        {
          original: 'https://lh3.googleusercontent.com/proxy/FHfOGDXqgX3zK5Jx2oox-QNwDJwxVWpoVtO6bq_M3cToJdwgyJ8AInvkC_MOtLOTdNR5x3b_RelJRSjkU460LekNL8AmtQKyl8Qp5vGDFME_rVaY9cMIy0UW5BGHp1ZQdPLcZisbnA',
          media : '(width: 606px;)',
        },
        {
          original: 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg',
          media : '(width: 606px)',
        },
      ];
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
                    <ImageGallery items={images} 
                                showPlayButton={false} 
                                showGalleryFullscreenButton={false} 
                                showFullscreenButton={false}
                                showBullets={true}
                                /></div>
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
