import React from 'react'
import { Body1 } from '../../components/Typography'
import { ServicesStyled } from './style'

import { MdLock } from 'react-icons/md'

const Services = () => {
  return (
    <ServicesStyled>

        <div className="service">
            <div className="icon">
                <MdLock />
            </div>
            <div className="text">
                <Body1>Secure payment</Body1>
                <Body1 muted={true}>Have you ever finally just </Body1>
            </div>
        </div>

        <div className="service">
            <div className="icon">
                <MdLock />
            </div>
            <div className="text">
                <Body1>Secure payment</Body1>
                <Body1 muted={true}>Have you ever finally just </Body1>
            </div>
        </div>
        
        <div className="service">
            <div className="icon">
                <MdLock />
            </div>
            <div className="text">
                <Body1>Secure payment</Body1>
                <Body1 muted={true}>Have you ever finally just </Body1>
            </div>
        </div>
    </ServicesStyled>
  )
}

export default Services