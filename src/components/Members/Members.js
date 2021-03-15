import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Member from './Member';
import './Members.scss'
import avatar1 from './../../assets/avatar1.png';
import avatar2 from './../../assets/avatar2.png';
import avatar3 from './../../assets/avatar3.png';

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
                <Member avatar={avatar1} name="Константин Константинович Константинопольский" role={["Руководитель сообщества"]} tags={["Эксперт", "Внутренний тренер"]} achieves="Кандидат экономических наук, профессор, старший преподаватель" rating="49" action="Задать вопрос"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор, старший преподаватель" rating="49" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор, старший преподаватель" rating="49" action="Пригласить к общению"/>
                <Member avatar={avatar3} name="Евгения Константинопольская" role={["Руководитель сообщества", "Модератор"]} achieves="Аналитик сменная должность" rating="15" action="Пригласить к общению"/>
                <Member name="Иван Алексеев" tags={["Внутренний тренер", "Эксперт"]} achieves="Технический директор" rating="68" action="Задать вопрос"/>
                <Member name="Иван Алексеев" tags={["Внутренний тренер", "Эксперт"]} achieves="Технический директор" rating="68" action="Задать вопрос"/>
                <Member name="Иван Алексеев" tags={["Внутренний тренер", "Эксперт"]} achieves="Технический директор" rating="68" action="Задать вопрос"/>
                <Member avatar={avatar1} name="Константин Константинович Константинопольский" role={["Руководитель сообщества"]} tags={["Эксперт", "Внутренний тренер"]} achieves="Кандидат экономических наук, профессор, старший преподаватель" rating="49" action="Задать вопрос"/>
                <Member avatar={avatar1} name="Константин Константинович Константинопольский" role={["Руководитель сообщества"]} tags={["Эксперт", "Внутренний тренер"]} achieves="Кандидат экономических наук, профессор, старший преподаватель" rating="49" action="Задать вопрос"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
                <Member avatar={avatar2} name="Дмитрий Белоусов" role={["Модератор"]} achieves="Кандидат экономическиъ наук, профессор" rating="110" action="Пригласить к общению"/>
            </div>
            
            <div className="members__actions">
                <span className="members__actions--become">Стать участником</span>
                <span className="members__actions--showAll" onClick={() => $('.members__container').css('max-height', '100%') && $('.members__actions').css('margin-top', '0')}>Показать всех</span>
            </div>
        </div>
    )
}

export default Members
