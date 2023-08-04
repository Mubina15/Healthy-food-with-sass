import React from 'react'
import "./Section2.scss"
import qiz from "../../../Assets/img/qiz.jpg"

export const Section2 = () => {
  return (
    <section>
      <div className='Main2 Main2__container'>
        <img src={qiz} alt="qiz" width="555" height="500" />
        <div className='Main2__div'>
          <h4 className='Main2__about'>About us</h4>
          <h2 className='Main2__div--title'>
            Food Stalls with Persons but  to  Product marketing plane
            catlogues etc to.
          </h2>
          <p className='Main2__div--text'>
            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
            equipment  make your marketing plane Effective.
          </p>
          <a className='Main2__div--link' href="#">Read More</a>
        </div>
      </div>
    </section>
  )
}
