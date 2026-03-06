import React from 'react'
import { img2, img3, img4 } from './images'


const Gallery = () => {
  return (
    <>
      <main className="gallery">
        <div className="container">
          <div className="gallery-title">GALLERY</div>
          <div className="gallery__content">
            <div className="gallery__item">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Gallery