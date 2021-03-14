import React from 'react'
import './Members.scss';

function Member(props) {
    return (
        <div className="member">
            <img className="member__avatar" src={props.avatar} />
            <div className="member__info">
                <h3 className="member__info__name">{props.name}</h3>
                <p className="member__info__role">{props.role}</p>
                { props.tags ? props.tags.map(el => <p className="member__info__tag">{el}</p>) : null }
                <p className="member__info__acieves">{props.achieves}</p>
                <p className="member__info__rating">Рейтинг активности: {props.rating}</p>
                <span className="member__info__action">{props.action}</span>
            </div>
        </div>
    )
}

export default Member
