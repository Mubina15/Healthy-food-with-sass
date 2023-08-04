import React from 'react'
import "./Section6.scss"

export const Section6 = () => {
  return (
    <section className='Main__sect'>
        <div className='Main Main__container6'>
            <h4 className='Main__contact'>Contact </h4>
            <h1 className='Main__also'>Food Stalls with Persons but also specialized equipment, Skills to manage.</h1>

            <form className='Main__form'>
                <input className='Main__input' type="text" placeholder='Enter Your Message' />
                <button className='Main__Send'>Send</button>
            </form>

        </div>
    </section>
  )
}
