import React from 'react'
import MainContent from './../MainContent/MainContent'
import Members from './../Members/Members'
import './WhiteContainer.scss'
import vrMan from './../../assets/vr_man.jpg'
import Courses from '../Courses/Courses'
import Requests from '../Requests/Requests'

function WhiteContainer() {
    return (
        <div className="container">
            <MainContent vrMan={vrMan}/>
            <Members />
            <Courses />
            
        </div>
    )
}

export default WhiteContainer
