import React from 'react'

import { HomeStyled } from './style'


import HomeSlider from '../../components/HomeSlider'
import Countainer from '../../components/Container'
import OfferSection from '../../components/OfferSection'
import CategoryShow from '../../components/CategoryShow'
import QuoteSection from '../../components/QuoteSection'
import RecommendedItems from '../../components/RecommendedItems'
import ExtraServices from '../../components/ExtraServices'
import SuppliersRegion from '../../components/SuppliersRegion'
import Subscribe from '../../components/Subscribe'


const Home = () => {
  return (
    <HomeStyled>
        <Countainer>
            <HomeSlider />
            <OfferSection />
            <CategoryShow />
            <CategoryShow />
            <QuoteSection />
            <RecommendedItems />
            <ExtraServices />
            <SuppliersRegion />
        </Countainer>

        <Subscribe />
    </HomeStyled>
  )
}

export default Home