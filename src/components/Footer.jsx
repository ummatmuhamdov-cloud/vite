import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="footer__content">

                <div className="footer__left">
                    <form action="" className='form'>
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                    <input type="email" placeholder='Email address'/>
                    <button className="footer__btn">SUBMIT</button>

                    </form>
                </div>

                <div className="footer__right">
                    <ul className="footer__list">
                        <li><a href="" className="footer__link">CONTACT</a></li>
                        <li><a href="" className="footer__link">998 98 888 98 98</a></li>
                        <li><a href="" className="footer__link">porshe@gmail.com</a></li>
                        <li><a href="" className="footer__link">zipcode 32323232</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li><a href="" className="footer__social">SOCIAL</a></li>
                        <li><a href="" className="footer__link">Instagram</a></li>
                        <li><a href="" className="footer__link">Facebook</a></li>
                        <li><a href="" className="footer__link">Telegram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer