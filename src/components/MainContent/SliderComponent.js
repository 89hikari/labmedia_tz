import React from 'react'

function SliderComponent(props) {
    return (
        <div className="main__content--slider__container">
            <p className="main__content--slider__container__title">{props.title}</p>
            <div className="main__content--slider__container__description">{props.description}</div>
            <div className="main__content--slider__container__image">
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}

export default SliderComponent
