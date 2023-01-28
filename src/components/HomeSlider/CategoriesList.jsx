import React, { useState } from 'react'
import { CategoryListStyled } from './style';

import categories from '../../mock/categories';

const CategoriesList = () => {

    const [activeEl, setActiveEl] = useState(0)

  return (
    <CategoryListStyled>
        {
            categories.map((category, index) => {
                if(index >= 8) return '';
                return <li key={index} onClick={()=>setActiveEl(index)} className={activeEl === index ? "active" : '' }>{category}</li>
            })
        }
        {
            categories.length > 8 ? <li>More Category</li> : ''
        }
    </CategoryListStyled>
  )
}

export default CategoriesList