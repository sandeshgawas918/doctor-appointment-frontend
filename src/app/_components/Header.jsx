import Image from 'next/image'
import React from 'react'

const Header = () => {
    const NavLink=[
        {
            id:1,
            name:'products',
            link:'/'
        },
        {
            id:2,
            name:'products2',
            link:'/'
        }
    ]
  return (
    <div>
        <nav className=' flex flex-row items-center gap-20 p-5 sm:px-20 shadow-sm transition-all ease-in-out cursor-pointer'>
            <Image src='/logo.svg' width={190} height={50} alt='logo' />

            <div className=' flex flex-row gap-7 text-purple-600  '>
            {
                NavLink.map((item,index)=>(
                    <h3 className='hover:scale-110 transition-all ease-in-out '>{item.name}</h3>
                ))
            }
            </div>
        </nav>
    </div>
  )
}

export default Header