import React from 'react'


import { ImageSectionStyled } from './style'

const ImageSection = ({image}) => {
  return (
    <ImageSectionStyled image={image}>
        <div className="text">
            <p>Latest trending</p>
            <h2>Electronic items</h2>
        </div>
        <button>Learn more</button>
    </ImageSectionStyled>
  )
}

export default ImageSection