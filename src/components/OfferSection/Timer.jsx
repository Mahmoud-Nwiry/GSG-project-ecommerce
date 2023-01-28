import React from 'react'
import { Body1, H4 } from '../Typography'
import { CountdownStyled, TimePartStyled, TimerStyled } from './style'

const Timer = () => {
  return (
    <TimerStyled>
        <div className="text">
            <H4>Deals and offers</H4>
            <Body1>Hygiene equipments</Body1>
        </div>
        <Countdown />
    </TimerStyled>
  )
}

const Countdown = ({time}) => (
    <CountdownStyled>
        <TimePartStyled>
            <p className='num'>04</p>
            <p className='text'>Day</p>
        </TimePartStyled>
        <TimePartStyled>
            <p className='num'>13</p>
            <p className='text'>Hour</p>
        </TimePartStyled>
        <TimePartStyled>
            <p className='num'>34</p>
            <p className='text'>Min</p>
        </TimePartStyled>
        <TimePartStyled>
            <p className='num'>56</p>
            <p className='text'>Sec</p>
        </TimePartStyled> 
    </CountdownStyled>
)

export default Timer