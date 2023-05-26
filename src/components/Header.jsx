import React from 'react'
import {MdOutlineMenuOpen} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
import {MdFastfood} from 'react-icons/md'
import { useState } from 'react'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
<div className="bg-[#e9e9e9] p-4">
        <div className='max-w-[1240px] py-[12px] mx-auto items-center flex justify-between'>
          <div className='text-2xl md:text-3xl font-bold 	flex	text-black		'>
          <MdFastfood />
            Resturent Website
          </div>
            {/*  md:hidden for large screen it will be hidden, for mobile screen it will b vissible block*/}

          {
            toggle ? 
            <GrClose onClick={ () => setToggle(!toggle)} className='text-white text-2xl md:text-3xl md:hidden block'/>
            : <MdOutlineMenuOpen onClick={ () => setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
          }
            
            

                {/* hidden for small device, md-> mideum device it will show */}
            <ul className=' hidden md:flex text-black gap-10 '>
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
            </ul>


          {/* responsive drawer */}

                {/* hidden for small device, md-> mideum device it will show  
                w-full -> full width
                h-screen-> full height
                -100% innitially not shows after clicking button it will shwow
                */}
            <ul className={`w-full h-screen md:hidden duration-300 text-white bg-black fixed  top-[92px]
             ${toggle ? 'left-[0%]' : 'left-[-100%]'}`
             }>
              <li className='py-3 text-center shadow-orange-300'>Home</li>
              <li className='py-3 text-center shadow-orange-300'>Menu</li>
              <li className='py-3 text-center shadow-orange-300'>About</li>
              <li className='py-3 text-center shadow-orange-300'>Contact</li>
            </ul>


        </div>
    </div>
  )
}

export default Header