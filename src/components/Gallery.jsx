import React from 'react'

const Gallery = () => {
  return (
    <>
      <main className="gallery">
        <div className="container">
          <div className="gallery-title">GALLERY</div>
          <div className="gallery__content">
            <div className="gallery__item">
              <img src="/src/assets/img/img2.png" alt="" />
              <img src="/src/assets/img/img3.png" alt="" />
              <img src="/src/assets/img/img4.png" alt="" />
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Gallery