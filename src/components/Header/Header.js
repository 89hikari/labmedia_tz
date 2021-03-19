import React from 'react'
import './Header.scss'
import search from './../../assets/search.png'
import avatar from './../../assets/avatar.png'
import blob from './../../assets/blob.png'
import bell from './../../assets/bell.png'
import Dropdown from './Dropdown'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
        return (
            <div className="header">
                <div className="header__list" onClick={this.handleClick}>
                    <div className="header__list__line"></div>
                    <div className="header__list__line"></div>
                    <div className="header__list__line"></div>
                </div>
                {this.state.isToggleOn ? <Dropdown /> : null}
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
                    <img src={search} className="header--tools__search"></img>
                    <img src={avatar} className="header--tools__profile"></img>
    
                    <div className="header--tools__blob__container">
                        <img src={blob} className="header--tools__blob"></img>
                        <span className="header--tools__counter2">150</span>
                    </div>
                    
                    <div className="header--tools__notifications__container">
                        <img src={bell} className="header--tools__notifications"></img>
                        <span className="header--tools__counter1">+20</span>
                    </div>
    
                </div>
            </div>
        )
    }

}

export default Header