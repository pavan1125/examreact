import React, { Fragment } from 'react'
import Header from './Header'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import Screen from './Screen'
export default function Movie() {
  return (
    <div>
         <Header/>
         <div className='d-flex container gap-3 h-25 '>

         <LeftMenu/>
         <Screen/>
         <RightMenu/>
         </div>
    </div>
  )
}
