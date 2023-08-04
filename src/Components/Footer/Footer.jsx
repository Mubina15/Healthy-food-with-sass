import React from 'react'
import "./Footer.scss"
import logo from "../../Assets/img/logo.png"
import ins from "../../Assets/img/ins.png"
import face from "../../Assets/img/facebook.png"
import twitter from "../../Assets/img/twitter.png"
import youtubr from "../../Assets/img/youtube.png"

export const Footer = () => {
  return (
    <footer className='Fott'>
        <div className='Footer Footer__container'>
            <div>
                <img src={logo} alt="" />

                <p className='Footer__item--link'>www.company name.com</p>
                <p className='Footer__item--link'>companyname@gmail.com</p>
                <a className='Footer__item--link' href="+74851180325">Phone: +7 485-118-03-25</a>

            </div>

                <ul className='Footer__list'>
                    <li className='Footer__item'>
                        <a className='Footer__item--link Footer__home' href="#">Home</a>
                        </li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Landingp
                        age</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Document
                        ation</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Referral
                         Program</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">UI & UX 
                        Design</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Web Desi
                        gn</a></li>
                </ul>

                <ul className='Footer__list'>
                    <li className='Footer__item'>
                        <a className='Footer__item--link Footer__home' href="#">Menu</a>
                        </li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Landingp
                        age</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Document
                        ation</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Referral
                         Program</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">UI & UX 
                        Design</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Web Desi
                        gn</a></li>
                </ul>

                <ul className='Footer__list'>
                    <li className='Footer__item'>
                        <a className='Footer__item--link Footer__home' href="#">company</a>
                        </li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Landingp
                        age</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Document
                        ation</a></li>
                    <li className='Footer__item'>
                        <a className='Footer__item--link' href="#">Referral
                         Program</a></li>
                         <img src={ins} alt="" />
                         <img src={face} alt="" />
                         <img src={twitter} alt="" />
                         <img src={youtubr} alt="" />

                </ul>
            </div>

    </footer>
  )
}
