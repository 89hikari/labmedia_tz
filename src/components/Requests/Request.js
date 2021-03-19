import React from 'react'
import './Requests.scss'

function Request(props) {
    return (
        <div className="requests__info__elements">
            <div className="requests__info__elements__element">{props.name}</div>
            <div className="requests__info__elements__element">{props.func}</div>
            <div className="requests__info__elements__element">{props.initiator}</div>
            <div className="requests__info__elements__element">{props.position}</div>
            <div className="requests__info__elements__element">{props.date}</div>
            <div className="requests__info__elements__element">{props.program}</div>
            <div className="requests__info__elements__element">{props.cost} руб.</div>
            <div className="requests__info__elements__element">{props.status}</div>
        </div>
    )
}

export default Request
