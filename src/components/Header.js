import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex  justify-between font-semibold my-4 w-[90vw]'>
      <div>
      <span className='font-bold my-[.6vw]'>Real Estate</span> 
      </div>
      <div>
        <ul className=' flex font-semibold'>
          <li className=' underline m-[.6vw]'>
            Home
          </li >
          <li className='m-[.6vw]'>
            Property
          </li>
          <li className='m-[.6vw]'>
            About
          </li>
          <li className='m-[.6vw]'>
            Contact Us
          </li>
        </ul>
      </div>
      <div className='flex '>
        <div className='m-[.6vw]'>Login</div>
        <div className='m-[.6vw]'>6265414959</div>
      </div>
    </div>
    </div>
  )
}

export default Header