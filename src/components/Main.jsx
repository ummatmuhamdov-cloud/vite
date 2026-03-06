import React from 'react'
import img1 from '../assets/img/img1.png'

const Main = () => {
  return (
    <>
    <main className="main">
        <div className="container">
            <div className="main__content">
                <div className="main__content-left">
                    <div className="main__content-title">PORSCHE 911 GT3 R5</div>
                    <p className="main__content-text">
                        The Porsche 911 GT3 R (or 911 GT3 R5) is a specialized race car designed for participation in various racing series, including GT championships and other international competitions.
                        <br />
                        <br />
                        It represents an enhanced version of the legendary Porsche 911, with a reinforced structure, improved aerodynamic characteristics, and a powerful engine to ensure maximum performance on the track.
                    </p>
                </div>
                <div className="main__content-right">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Main