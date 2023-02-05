import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Countainer from '../../components/Container'
import RelatedProducts from '../../components/RelatedProdcuts'
import SuperDiscount from '../../components/SuperDiscount'
import { HomeStyled } from '../Home/style'
import DetailsBox from './DetailsBox'
import MayLike from './MayLike'
import { GridStyled } from './style'
import Tabs from './Tabs'

const ProductsDetails = () => {
  return (
    <HomeStyled>
        <Countainer>
            <Breadcrumb />
            <DetailsBox />
            <GridStyled>
                <Tabs />
                <MayLike />
            </GridStyled>
            <RelatedProducts />
            <SuperDiscount style={{marginBottom: 88}} />
        </Countainer>
    </HomeStyled>
  )
}

export default ProductsDetails