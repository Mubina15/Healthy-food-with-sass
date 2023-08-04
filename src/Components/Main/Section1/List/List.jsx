import React from 'react'
import "./List.scss"

export const List = ({children}) => {
  return (
    <ul className='Main__list'>
        {children}
    </ul>
  )
}
