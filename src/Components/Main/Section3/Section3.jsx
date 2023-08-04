import React from 'react'
import "./Section3.scss"
import plus from "../../../Assets/img/Group.png"
import salat1 from "../../../Assets/img/salad1.png"
import salat2 from "../../../Assets/img/salad2.png"
import salat3 from "../../../Assets/img/salad3.png"
import salat4 from "../../../Assets/img/salad4.png"
import salat5 from "../../../Assets/img/salad5.png"
import salat6 from "../../../Assets/img/salad6.png"
import two from "../../../Assets/img/2.png"
import three from "../../../Assets/img/3.png"
import four from "../../../Assets/img/4.png"
import five from "../../../Assets/img/5.png"



export const Section3 = () => {
  return (
    <section>
        <div className='Main Main__container3'>
            <h4 className='Main__menu'>Menu</h4>
            <h2 className='Main__treaty'>Food Full of treaty Love</h2>
            <p className='Main__treaty--text'>
            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, 
            </p>
            <div className='Main__cards'>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat1} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={four} alt="four" />
                    </div>
                </div>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat2} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={five} alt="four" />
                    </div>
                </div>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat3} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={three} alt="four" />
                    </div>
                </div>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat4} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={two} alt="four" />
                    </div>
                </div>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat5} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={four} alt="four" />
                    </div>
                </div>
                <div className='Main__card'>
                    <img className='Main__salat' src={salat6} alt="salat" width="408px" height="255px" />
                    <h1 className='Main__vegie'>Vegie Muffen <span className='Main__span'>16$</span></h1>
                    <p className='Main__salat--text'>There are many things are needed to start the Fast Food Business.</p>
                    <div className='Main__img--rotate'>
                        <img className='Main__plus' src={plus} alt="plus" />
                        <img src={three} alt="four" />
                    </div>
                </div>
            </div>

            <a className='Main__more' href="#">
                Learn More
            </a>

        </div>
    </section>
    )
}
