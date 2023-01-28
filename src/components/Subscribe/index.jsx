import React from 'react'
import Button from '../Buttons/Button'
import Countainer from '../Container'
import Input from '../inputs/Input'
import { Body1, H4 } from '../Typography'
import { SubscribeBoxStyled } from './style'

const index = () => {
  return (
    <SubscribeBoxStyled>
        <Countainer>
            <H4>Subscribe on our newsletter</H4>
            <Body1>Get daily news on upcoming offers from many suppliers all over the world</Body1>
            <div className='inputs'>
                <Input placeholder='Email' style={{width : '270px'}} />
                <Button style={{width : 'fit-content'}}>Subscribe</Button>
            </div>
        </Countainer>
    </SubscribeBoxStyled>
  )
}

export default index