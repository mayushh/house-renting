import React, { useState } from 'react'
import img from './img.jpg'
import heroImage from './hero.jpg'
const Body = () => {
    const [location, setloaction] = useState("");
    const handleOnChange=(e)=>{
        setloaction(e.target.value)
    }
  return (
    <div className='flex justify-center'>
    <div className='flex-wrap  justify-center pb-10'>
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
    </div>
  )
}

export default Body