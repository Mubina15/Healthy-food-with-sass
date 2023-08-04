import React from 'react'
import "./Section4.scss"
import App from "../../../Assets/img/App_store.png"
import Google from "../../../Assets/img/Google.png"
import Phone from "../../../Assets/img/tel.png"

export const Section4 = () => {
  return (
    <section className='Main__sec'>
        <div className='Main Main__container4'>
            <div className='Main__div4'>
                <h4 className='Main__Take'>
                Take away
                </h4>
                <h2 className='Main__Stalls'>
                Food Stalls with Persons but  to  Product marketing plane. 
                </h2>
                <p className='Main__person'>
                There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.
                </p>
                <div>
                    <img className='Main__App' src={App} alt="App" width="163" height="48"/>
                    <img src={Google} alt="App" width="163" height="48"/>
                </div>
            </div>
            <img className='Main__phone' src={Phone} alt="phone" width="451" height="753" />
        </div>
    </section>
  )
}
