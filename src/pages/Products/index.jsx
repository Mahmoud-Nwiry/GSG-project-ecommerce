import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Countainer from '../../components/Container'

import { HomeStyled } from '../Home/style'
import ProductsArea from './ProductsArea'
import Sidebar from './Sidebar'
import { ProductsStyled } from './style'

const Products = () => {

  const [selected, setSelected] = useState([])

  const addItemToSelected = (value, select) => {
    if(select) setSelected(prev => [...prev, value]);
    else setSelected(prev => prev.map(item => item !== value))
  }

  return (
    <HomeStyled>
        <Countainer>
            <Breadcrumb />
            <ProductsStyled>
              <Sidebar addItem={addItemToSelected} />
              <ProductsArea />
            </ProductsStyled>
        </Countainer>
    </HomeStyled>
  )
}

export default Products