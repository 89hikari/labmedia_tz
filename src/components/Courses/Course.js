import React from 'react'
import triangle from './../../assets/triangle.png';
import star from './../../assets/star.png';
import heart from './../../assets/heart.png';

function Course(props) {
    return (
        <div className="courses__list--element">
            <img className="courses__list--element--triangle" src={triangle} />
            <img className="courses__list--element--star" src={star} />
            <p className="courses__list--element--type">{props.type}</p>
            <div className="courses__list--element--title--container">
                <p className="courses__list--element--title">{props.title}</p>
            </div>
            <div className="courses__list--element--tags--container">
                { props.tags ? props.tags.map(el => <p className="courses__list--element--tags">{el}</p>) : null }
            </div>
            <div className="courses__list--element--info">
                <p className="courses__list--element--info--grade">проходной балл: {props.grade}</p>
                <p className="courses__list--element--info--passed">прошло человек: {props.passed}</p>
                <div class="courses__list--element--info--liked--container">
                    <img className="courses__list--element--info--liked--heart" src={heart} />
                    <p className="courses__list--element--info--liked">{props.liked}</p>
                </div>
            </div>
        </div>
    )
}

export default Course
