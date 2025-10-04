import React from 'react'

const Card = () => {
  return (
    <div>

    
    <div className="border-4 border-black card w-[416px] h-[475px] rounded-xl ">
      <div className="roomImage w-[416px] h-[280px] rounded-xl">For rent</div>
      <h1 className='px-6 pt-6 text-left'>Bloomfield house</h1>
      <p className='text-left'>29 W. Pawnee St. Bloomfield, NJ 07003</p>
      <div className="price text-left">$2,500,000</div>
      <div className="features flex flexro px-6">
        <div>4 Bedrooms</div>
        <div>2 Bathrooms</div>
        <div >850 sq ft</div>
        <div className=''>2 Parking Spaces</div>
      </div>
    </div>

    </div>
       
  )
}

export default Card