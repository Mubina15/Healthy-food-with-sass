import React from 'react'
import "./ListItem.scss"
import home from "../../../../Assets/img/Group_94.png"
import smile from "../../../../Assets/img/Group_93.png"
import dostavka from "../../../../Assets/img/food-delivery.png"

export const ListItem = () => {
    return (
        <>
            <li className='Main__item'>
                <img className='Main__item--img Main__img1' src={home} alt="uy" width="44" height="44" />
                <h4 className='Main__item--title'>
                Quality Food
                </h4>
                <p className='Main__item--text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>

            <li className='Main__item'>
                <img className='Main__item--img Main__img2' src={dostavka} alt="uy" width="44" height="44" />
                <h4 className='Main__item--title'>
                Food Delivery
                </h4>
                <p className='Main__item--text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>

            <li className='Main__item'>
                <img className='Main__item--img Main__img3' src={smile} alt="uy" width="44" height="44" />
                <h4 className='Main__item--title'>
                Super Taste
                </h4>
                <p className='Main__item--text'>
                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                </p>
            </li>
        </>
    )
}
