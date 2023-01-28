import React from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbStyled } from './style'

const paths = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing']

const Breadcrumb = () => {
  return (
    <BreadcrumbStyled>
        {
            paths.map((item, index) => {
                return <>
                    <Link to="/">{item} </Link>
                {index !== paths.length-1?<p>{'>'}</p>:''}
                </>
            })
        }
    </BreadcrumbStyled>
  )
}

export default Breadcrumb