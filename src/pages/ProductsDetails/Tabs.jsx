import React, { useState } from 'react'
import Description from './Description';
import { TabsStyled } from './style';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handelActiveTabs = (index) => setActiveTab(index);

  return (
    <TabsStyled>
        <HeaderTabs index={activeTab} handelActiveTabs={handelActiveTabs} />
        <ContentTab index={activeTab} />
    </TabsStyled>
  )
}

const HeaderTabs = ({index, handelActiveTabs}) => {
    return (
    <ul className="header">
        <li className={index === 1 ? 'active' : ''} onClick={()=>handelActiveTabs(1)}>Description</li>
        <li className={index === 2 ? 'active' : ''} onClick={()=>handelActiveTabs(2)}>Reviews</li>
        <li className={index === 3 ? 'active' : ''} onClick={()=>handelActiveTabs(3)}>Shipping</li>
        <li className={index === 4 ? 'active' : ''} onClick={()=>handelActiveTabs(4)}>About company</li>
    </ul>
    )
}

const ContentTab = ({index}) => (
    <div className="content">
        {
            index === 1 ? <Description />
            : index === 2? 'Reviews'
            : index === 3? 'Shipping'
            : index === 4? 'About company'
            : ''
        }
    </div>
)

export default Tabs