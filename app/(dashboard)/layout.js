import React from 'react'
import SideNavBar from './_components/SideNavBar'
import TopHeader from './_components/TopHeader'
function layout({children}) {
  return (
    <div>
        <div className=' h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
          <SideNavBar/>
        </div>
        <div className='md:ml-64'>
          <TopHeader/>
          {children}
        </div>
    </div>
  )
}

export default layout