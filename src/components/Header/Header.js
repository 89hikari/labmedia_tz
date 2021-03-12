import React from 'react'
import './Header.scss'
import search from './../../assets/search.png'
import avatar from './../../assets/avatar.png'
import blob from './../../assets/blob.png'
import bell from './../../assets/bell.png'

export default function Header() {
    return (
        <div className="header">
            <h1 className="header--logo">КОРПОРАЦИЯ ЗНАНИЙ</h1>
            <ul className="header--nav">
                <li className="header--nav--element">База знаний</li>
                <li className="header--nav--element">Каталог курсов</li>
                <li className="header--nav--element">Университет</li>
                <li className="header--nav--element">Развитие</li>
                <li className="header--nav--element">Профиль</li>
                <li className="header--nav--element">Помощь</li>
            </ul>
            <div className="header--tools">
                <span className="header--tools__counter">+20</span>
                <img src={search} className="header--tools__search"></img>
                <img src={avatar} className="header--tools__profile"></img>
                <img src={blob} className="header--tools__blob"></img>
                <img src={bell} className="header--tools__notifications"></img>
            </div>
        </div>
    )
}
