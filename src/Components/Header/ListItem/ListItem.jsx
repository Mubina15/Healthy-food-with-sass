import React from 'react'
import "./ListItem.scss"

export const ListItem = () => {
  return (
    <>
    <li className='header__item'>
        <a className='header__item--link1' href="#">
            Home
            </a>
            </li>
    <li className='header__item'>
        <a className='header__item--link' href="#">
            About us
            </a>
            </li>
    <li className='header__item'>
        <a className='header__item--link' href="#">
            Menu
            </a>
            </li>
    <li className='header__item'>
        <a className='header__item--link' href="#">
            Features
            </a>
            </li>
    <li className='header__item'>
        <a className='header__item--link' href="#">
            Contact us
            </a>
            </li>
    </>
  )
}
