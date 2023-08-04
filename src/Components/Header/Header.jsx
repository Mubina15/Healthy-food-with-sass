import React from 'react'
import "./Header.scss"
import logo from "../../Assets/img/logo.png"
import { List } from './List/List'
import { ListItem } from './ListItem/ListItem'

export const Header = () => {
    return (
        <header>
            <div className="header header__container">
                <div className='header__div'>
                    <a href="#">
                        <img src={logo} alt="logo" width="43" height="44" />
                    </a>
                    <List>
                        <ListItem />
                    </List>
                </div>
                <button className='header__btn'>Booking Now</button>
            </div>
        </header>
    )
}
