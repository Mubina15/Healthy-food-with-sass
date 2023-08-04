import React from 'react'
import "./Section5.scss"
import Women from "../../../Assets/img/women.png"
import four from "../../../Assets/img/4.png"

export const Section5 = () => {
  return (
    <section>
        <div className='Main Main__container5'>
            <h2 className='Main__Testi'>Testimonial</h2>
            <h1 className='Main__Making'>
            Making Food great again and again
            </h1>
            <p className='Main__just'>
            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
            </p>

            <img className='Main__woman' src={Women} alt="" />

            <p className='Main__with'>
            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
            </p>

            <img className='Main__four' src={four} alt="" />

            <h2 className='Main__reyno'>Augusta W. Reynoso</h2>
            <h5 className='Main__design'>
            UI&UX DeSIGNER
            </h5>

        </div>
    </section>
  )
}
