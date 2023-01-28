import React from 'react'
import { H6 } from '../Typography'

const LinksList = ({title, links}) => {
  return (
    <div>
        <H6>{title}</H6>
        <ul>
            {
                links?.map(link => <li key={link.id}><a href={link.href}>{link.text}</a></li>)
            }
        </ul>
    </div>
  )
}

export default LinksList