import React from 'react'
import { ServiceBoxStyled } from './styled'

const ServiceBox = ({icon, image, text}) => {
  return (
    <ServiceBoxStyled background={image}>
        <div className="image"></div>
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
    </ServiceBoxStyled>
  )
}

export default ServiceBox