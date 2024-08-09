import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex  justify-between font-semibold my-4 w-[90vw]'>
      <div>
      <span className='font-bold my-[.6vw] hover:cursor-pointer'>Real Estate</span> 
      </div>
      <div>
        <ul className=' flex font-semibold'>
          
          <li href="" className='hover:cursor-pointer hover:underline c  m-[.6vw]'>
          <a>
            Home
            </a>
          </li >
          

          
          <li  className='hover:cursor-pointer hover:underline m-[.6vw]'>
          <a href="">
            Property
            </a>
          </li>
         
          
          <li className=' hover:cursor-pointer hover:underline m-[.6vw]'>
            About
          </li>

          <li className=' hover:cursor-pointer hover:underline m-[.6vw]'>
            Contact Us
          </li>
        </ul>
      </div>
      <div className='flex '>
        <div className='m-[.6vw] hover:cursor-pointer'>Login</div>
        <div className='m-[.6vw] hover:cursor-pointer' >6265414959</div>
      </div>
    </div>
    </div>
  )
}

export default Header