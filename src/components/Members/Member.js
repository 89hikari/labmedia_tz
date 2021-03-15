import React from 'react'
import './Members.scss';
import { nameParser}  from './../../utils';

function Member(props) {
    return (
        <div className="member">
            {props.avatar ? <img className="member__avatar" src={props.avatar}/> : <div className="member__avatar--none">{nameParser(props.name)}</div>}
            <div className="member__info">
                <div className="member__info__name__container">
                    <h3 className="member__info__name">{props.name}</h3>
                </div>
                {props.role ? props.role.map(el => <p className="member__info__role">{el}</p>) : null}
                { props.tags ? props.tags.map(el => <p className="member__info__tag">{el}</p>) : null }
                <p className="member__info__acieves">{props.achieves}</p>
                <p className="member__info__rating">Рейтинг активности: {props.rating}</p>
                <span className="member__info__action">{props.action}</span>
            </div>
        </div>
    )
}

export default Member
