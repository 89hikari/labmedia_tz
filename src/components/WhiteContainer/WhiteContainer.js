import React from 'react'
import MainContent from './../MainContent/MainContent'
import Members from './../Members/Members'
import './WhiteContainer.scss'
import vrMan from './../../assets/vr_man.jpg'

function WhiteContainer() {
    return (
        <div className="container">
            <MainContent vrMan={vrMan}/>
            <Members />
        </div>
    )
}

export default WhiteContainer
