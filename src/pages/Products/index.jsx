import React, { useState, useContext } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Countainer from '../../components/Container'

import { HomeStyled } from '../Home/style'
import { FilterContext } from './FilterContext'
import ProductsArea from './ProductsArea'
import Sidebar from './Sidebar'
import { ProductsStyled } from './style';

const initFilter = {
  category : '',
  brands : [],
  features : [],
  price : {min : 0, max: 9999},
  condition : '',
  rate : []
}

const Products = () => {

  const [filter, setFilter] = useState(initFilter);


  return (
    <HomeStyled>
        <Countainer>
            <Breadcrumb />
            <FilterContext.Provider value={{filter, setFilter}}>
              <ProductsStyled>
                <Sidebar />
                <ProductsArea />
              </ProductsStyled>
            </FilterContext.Provider>
        </Countainer>
    </HomeStyled>
  )
}

export default Products