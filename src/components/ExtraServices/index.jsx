import React from 'react'
import { H4 } from '../Typography'
import ServiceBox from './ServiceBox'
import { MainBox, ServicesContainerStyled } from './styled'

import ServiceImage1 from '../../assets/images/serviceE1.png';
import ServiceImage2 from '../../assets/images/serviceE2.png';
import ServiceImage3 from '../../assets/images/serviceE3.png';
import ServiceImage4 from '../../assets/images/serviceE4.png';

import { AiOutlineSearch, AiOutlineSend } from 'react-icons/ai'
import { MdOutlineInventory2, MdSecurity } from 'react-icons/md'

const ExtraServices = () => {

  

  return (
    <MainBox>
      <H4>Our extra services</H4>
      <ServicesContainerStyled>
        <ServiceBox text={<p>Source from Industry Hubs</p>} image={ServiceImage1} icon={<AiOutlineSearch fontSize={20} />} />
        <ServiceBox text={<p>Customize Your Products</p>} image={ServiceImage2} icon={<MdOutlineInventory2 fontSize={20} />} />
        <ServiceBox text={<p>Fast, relible shiping by ocean or air</p>} image={ServiceImage3} icon={<AiOutlineSend fontSize={20} />} />
        <ServiceBox text={<p>Product monitoring and inspection</p>} image={ServiceImage4} icon={<MdSecurity fontSize={20} />} />
      </ServicesContainerStyled>
    </MainBox>
  )
}

export default ExtraServices