import React from 'react'
import Member from './Member';
import './Members.scss'
import avatar1 from './../../assets/avatar1.png';

function Members() {
    return (
        <div className="members">
            <h1 className="members__title">Участники</h1>
            <div className="members__sort">
                <p className="members__sort__element">По алфавиту</p>
                <p className="members__sort__element">По популярности</p>
                <p className="members__sort__element">Эксперты</p>
                <p className="members__sort__element">Внутренние тренеры</p>
            </div>
            <div className="members__container">
                <Member avatar={avatar1} name="Константин Константинович Константинопольский" role="Руководитель сообщества" tags={["Эксперт", "Внутренний тренер"]} achieves="Кандидат экономическиъ наук, профессор, старший преподаватель" rating="49" action="Задать вопрос"/>
            </div>
        </div>
    )
}

export default Members
