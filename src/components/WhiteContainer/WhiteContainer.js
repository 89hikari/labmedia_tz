import React from 'react'
import MainContent from './../MainContent/MainContent'
import './WhiteContainer.scss'
import vrMan from './../../assets/vr_man.jpg'

function WhiteContainer() {
    return (
        <div className="container">
            <MainContent vrMan={vrMan}/>
        </div>
    )
}

export default WhiteContainer
