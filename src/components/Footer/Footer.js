import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <div className="footer__column__element--large">База знаний</div>
                    <div className="footer__column__element--small">Классификатор</div>
                    <div className="footer__column__element--small">Сообщества</div>
                    <div className="footer__column__element--large">Каталог курсов</div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__element--large">Университет</div>
                    <div className="footer__column__element--small">Меню развивающих действий</div>
                    <div className="footer__column__element--small">Электронное обучение</div>
                    <div className="footer__column__element--small">Целевые программы</div>
                    <div className="footer__column__element--small">Факультеты и кафедры</div>
                    <div className="footer__column__element--small">Об университете</div>
                    <div className="footer__column__element--small">Учебные центры</div>
                    <div className="footer__column__element--small">Компетиции</div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__element--large">Развитие</div>
                    <div className="footer__column__element--small">Конкурсы</div>
                    <div className="footer__column__element--small">Мой план развития</div>
                    <div className="footer__column__element--small">Ваша функция</div>
                    <div className="footer__column__element--small">Карьера</div>
                    <div className="footer__column__element--small">Мероприятия</div>
                    <div className="footer__column__element--small">Заявки на обучение</div>
                    <div className="footer__column__element--small">Кабинет руководителя</div>
                    <div className="footer__column__element--small">Кабинет HR</div>
                    <div className="footer__column__element--small">Кабинет тренера и эксперта</div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__element--large">Профиль</div>
                    <div className="footer__column__element--small">Результаты оценки</div>
                    <div className="footer__column__element--small">Требования компании</div>
                    <div className="footer__column__element--small">Государственные требования</div>
                    <div className="footer__column__element--small">Подписки</div>
                    <div className="footer__column__element--large">Помощь</div>
                </div>
            </div>
            <div className="footer__credits">© 2016–2017 ПАО «Газпром Нефть»</div>
        </div>
    )
}

export default Footer
