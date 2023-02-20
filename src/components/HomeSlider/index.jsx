import React, { useContext } from 'react'
import CategoriesList from './CategoriesList'
import ImageSection from './ImageSection'
import { MainBoxStyled } from './style'

import Image from '../../assets/images/slider-img.png'
import AuthCard from './AuthCard'
import Card from './Card'
import AuthContext from '../../AuthContext'

const HomeSlider = ({children, ...other}) => {

  const {isAuth} = useContext(AuthContext)

  return (
    <MainBoxStyled {...(other)}>
        <CategoriesList />
        <ImageSection image={Image} />
        <div>
            {!isAuth ? <AuthCard /> : 'Welcome'}
            <Card background='#F38332'>Get US $10 off with a new supplier</Card>
            <Card background='#55BDC4'>Send quotes with supplier preferences</Card>
        </div>
    </MainBoxStyled>
  )
}

export default HomeSlider