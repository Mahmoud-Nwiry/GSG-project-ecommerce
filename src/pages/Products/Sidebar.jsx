import React, { useState } from 'react'
import According from '../../components/According'



const Catigories = ({addItem}) => {

  const [numOfShow, setNumOfShow] = useState(4);

  const handelItem = (id) => {
    
  }

  return (
    <ul>
      {data.map((item, index) => {
        if(index >= numOfShow) return '';
          return <li key={item.id} onClick={()=>  addItem(item.value, true)}>{item.name}</li>
        })}
        {data.length > numOfShow ? <li onClick={()=> setNumOfShow(data.length) }>See all</li>:''}
    </ul>
  )
}



const Sidebar = ({addItem}) => {
  return (
    <div>
      <According title='Category' content={<Catigories addItem={addItem} />} />
      <According title='Brands' content={<Catigories addItem={addItem} />} />
      <According title='Features' content={<Catigories addItem={addItem} />} />
      <According title='Price range' content={<Catigories addItem={addItem} />} />
      <According title='Condition' content={<Catigories addItem={addItem} />} />
      <According title='Ratings' content={<Catigories addItem={addItem} />} />
    </div>
  )
}

const data = [
  {
    id :1,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :2,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :3,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :4,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :5,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :6,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :7,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
  {
    id :8,
    name : 'Mobile accessory',
    value : 'Mobile accessory',
    selected : false
  },
]


export default Sidebar