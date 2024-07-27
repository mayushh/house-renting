import React from 'react'

const Header = () => {
  return (
    <div className='flex  justify-between font-semibold'>
      <div>
      <span className='font-bold'>Real Estate</span> 
      </div>
      <div>
        <ul className='flex font-semibold'>
          <li className='mx-4 underline'>
            Home
          </li >
          <li className='mx-4'>
            Property
          </li>
          <li className='mx-4'>
            About
          </li>
          <li className='mx-4'>
            Contact Us
          </li>
        </ul>
      </div>
      <div className='flex '>
        <div className='mx-3'>Login</div>
        <div className='mx-3'>6265414959</div>
      </div>
    </div>
  )
}

export default Header