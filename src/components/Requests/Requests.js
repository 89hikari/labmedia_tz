import React, { useState } from 'react'
import { render } from 'react-dom';
import classnames from 'classnames';
import './Requests.scss'
import Info from './Info';
import History from './History';

class Requests extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selection: 'info',
            active: false
        }
    }
    
      toggleContent = (event) => {
        const currentState = this.state.active;
        event.preventDefault();
        this.setState({
            selection: event.target.value,
            active: !currentState
        })
    }

      switchContent = (value) => {
        switch (value) {
          case 'info':
            return <Info />
          case 'history':
            return <History />
          default:
            return null;
        }
      }

    render() {
        const { selection } = this.state;
        const { active } = this.state;

        return (
            <div className="requests">
                <div className="requests__title">Заявки</div>
                <div className="requests__types">
                    <button className={selection === 'info' ? 'requests__types__info--active' : 'requests__types__info'} value="info" onClick={this.toggleContent}>Основные сведения</button>
                    <button className={selection === 'history' ? 'requests__types__history--active': 'requests__types__history'} value="history" onClick={this.toggleContent}>История согласования</button>
                </div>
                { this.switchContent(selection) }
            </div>
        )
    }
}

export default Requests
