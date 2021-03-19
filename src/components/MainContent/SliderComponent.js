import React from 'react'

function SliderComponent(props) {
    return (
        <div className="main__content--slider__container">
            <div className="main__content--slider__container__title">{props.title}</div>
            <div className="main__content--slider__container__description">{props.description}</div>
            <div className="main__content--slider__container__image">
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}

export default SliderComponent
