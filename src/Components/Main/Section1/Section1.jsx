import React from 'react'
import "./Section1.scss"
import { List } from './List/List'
import { ListItem } from './ListItem/ListItem'

export const Section1 = () => {
  return (
        <section>
            <div className='Main Main__container'>
                <h4 className='Main__title'>
                    FEATURES
                </h4>
                <h2 className='Main__text'>
                Food with a New Passion
                </h2>

                <List>
                    <ListItem />
                </List>
            </div>
        </section>
    )
}
