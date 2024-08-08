import React, { useState } from 'react'
import img from './img.jpg'
import heroImage from './hero.jpg'
import homeIcon from './home.png'
import propertyIcon from './property.png'
import rentIcon from './rent.png'
const Body = () => {
    const [location, setloaction] = useState("");
    const handleOnChange=(e)=>{
        setloaction(e.target.value)
    }
  return (
    <div className='flex-wrap justify-center'>
    <div className='flex-wrap  pb-10'>
        {/* heading section */}
        <div className='rounded-xl w-[90vw] m-auto h-[100vw] overflow-hidden bg flex items-center justify-center  '>
            <h1 className='text-7xl text-gray-300 font-semibold' >Find A Home That Suits Your LifeStyle</h1>
        </div>
        {/* "seach section" */}
        <div>
        <div className='flex flex-wrap w-auto justify-center m-[-25px]'>
                    <input value={location} onChange={(e)=>handleOnChange(e)}  placeholder="Enter Location"   className=' w-[50vw] search-box p-2 pl-5 shadow-sm shadow-gray-600 outline-none rounded-l-full border  border-gray-200   ' type="text"  />
                    <div className='hover:w-28 p-2 shadow-sm shadow-gray-600  rounded-r-full borderborder-gray-400 border border-gray-200 bg-white w-20' ><img className='ml-4  h-10' src={img}  /></div>
                </div>
        </div>
        
    </div>

    {/* Yaha se Our client success is our success start hota hai */}

    <div className='flex flex-col justify-items-center align-middle  px-44 py-14 w-[1076] h-[600px] '>
      <div className='   mb-10'>
          <h2 className='w-[634] h-[27] mb-5 font-bold text-3xl text-[#100e2c]'>Our client’s success is our success.</h2>
          <p className=' w-[450px] h-14  inline-block align-middle text-xs'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget</p>
      </div>
      <div className='flex flex-row h-[400] w-[1076] justify-center '>
        <div className='h-96 w-80 bg-[#100E2C] rounded-lg shadow-md mr-6'>
          <div className='flex flex-col items-center p-10 gap-8'>
            <img src={homeIcon} className='h-16 w-16 '></img>
      
        <h2 className='text-white text-xl font-semibold gap-8'>Buy a property</h2>
    </div>
    <p className='text-white text-sm mb-8  w-64 h-[auto] text-center inline-block align-top'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu.</p>
    <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out">Find property</button>
</div>

<div className='h-96 w-80 bg-[#100E2C] rounded-lg  shadow-md mr-6'>
          <div className='flex flex-col items-center p-10 gap-8'>
            <img src={propertyIcon} className='h-16 w-16 '></img>
      
        <h2 className='text-white text-xl font-semibold gap-8'>Buy a property</h2>
    </div>
    <p className='text-white text-sm mb-8  w-64 h-[auto] text-center inline-block align-top'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu.</p>
    <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out">Find property</button>
</div>

<div className='h-96 w-80 bg-[#100E2C] rounded-lg  shadow-md'>
          <div className='flex flex-col items-center p-10 gap-8'>
            <img src={rentIcon} className='h-16 w-16 '></img>
      
        <h2 className='text-white text-xl font-semibold gap-8'>Buy a property</h2>
    </div>
    <p className='text-white text-sm mb-8  w-64 h-[auto] text-center inline-block align-top'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu.</p>
    <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out">Find property</button>
</div>


      </div>
    </div>

    </div>
  )
}

export default Body