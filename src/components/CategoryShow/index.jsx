import React from 'react'
import Products from './Products'
import { CategoryInfo, CategoryShowStyled } from './style'

import data1 from '../../mock/categoryShow'
import { H3 } from '../Typography'

const CategoryShow = ({products, bacground, text, link}) => {
  return (
    <CategoryShowStyled>
      <CategoryInfo background={data1.background}>
          <H3>{data1.title}</H3>
          <button>Source now</button>
      </CategoryInfo>
      <Products products={data1.products} />
    </CategoryShowStyled>
  )
}

export default CategoryShow