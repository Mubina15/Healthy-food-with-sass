import React from 'react'
import "./List.scss"

export const List = ({ children }) => {
    return (
        <ul className="header__list">
            {children}
        </ul>
    )
}
