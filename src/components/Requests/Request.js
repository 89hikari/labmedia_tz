import React from 'react'
import './Requests.scss'

function Request(props) {
    return (
        <tr id="row" className="requests__table__elements">
            <td className="requests__info__element">{props.name}</td>
            <td className="requests__info__element">{props.func}</td>
            <td className="requests__info__element">{props.initiator}</td>
            <td className="requests__info__element">{props.position}</td>
            <td className="requests__info__element">{props.date}</td>
            <td className="requests__info__element">{props.program}</td>
            <td className="requests__info__element">{props.cost}</td>
            <td className="requests__info__element">{props.status}</td>
        </tr>
    )
}

export default Request
