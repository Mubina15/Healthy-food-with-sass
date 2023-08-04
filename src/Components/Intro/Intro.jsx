import React from 'react'
import "./Intro.scss"
import skavarodka from "../../Assets/img/skavarodka.png"

export const Intro = () => {
    return (
        <intro className="intro">
            <div className='intro intro__container'>
                <div>
                    <h1 className='intro__title'>
                        Making time a good time by making food the good food.
                    </h1>
                    <p className='intro__text'>
                        There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
                    </p>
                    <button className='intro__order'>Order Now</button>
                    <a href='#' className='intro__food'>Food details</a>
                </div>
                <div>
                    <img src={skavarodka} alt="skavarodka" width="580" height="503" />
                </div>
            </div>
        </intro>
    )
}
