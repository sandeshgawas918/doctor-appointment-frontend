import React from 'react'
import AdminSidebar from '../_components/AdminSidebar'

const layout = ({ children }) => {

  return (
    <div className='grid grid-cols-5 bg-gray-200 mx-0'>
      <div>
        <AdminSidebar className='' />
      </div>
      <div className=' col-span-4 mt-7 '>
        {children}
      </div>
    </div>
  )
}

export default layout