import React from 'react'

const CityYouLive = () => {
  return (
    <div className='  h-auto font-semibold'>
        <div className=' grid grid-flow-col m-10  text-white '>
            {/* left images */}
            <div className='grid grid-flow-row h-auto col-span-4  rounded-lg m-2'>
                {/* top left images */}
                <div className='grid grid-flow-col '>
                    {/*  img 1 left */}
                    <div className='loca11 col-span-3  h-[260px] border m-2 rounded-xl relative'>
                        <div className='left-0 absolute bottom-0 m-2'>
                        <h6>New York</h6>
                        <h7> 10 Properties</h7>
                        </div>
                        
                    </div>
                     {/*  img 2 right*/}
                     <div className='loca12 col-span-1 border  h-[260px] m-2 rounded-xl relative'>
                     <div className='left-0 absolute bottom-0 m-2'>
                        <h6>New York</h6>
                        <h7> 10 Properties</h7>
                        </div>
                    </div>
                </div>
                {/* bottom left images */}
                <div className='grid grid-flow-col'>
                    {/*  img 1 left */}
                    <div className='loca12 col-span-1 border  h-[260px] m-2 rounded-xl relative'>
                    <div className='left-0 absolute bottom-0 m-2'>
                        <h6>New York</h6>
                        <h7> 10 Properties</h7>
                        </div>
                    </div>
                     {/*  img 2 right*/}
                     <div className='loca11 col-span-3 border  h-[260px] m-2 rounded-xl relative'>
                     <div className='left-0 absolute bottom-0 m-2'>
                        <h6>New York</h6>
                        <h7> 10 Properties</h7>
                        </div>
                    </div>
                </div>
            </div>



            {/* right image */}
            <div className='loca13 h-auto col-span-1 border border-emerald-900 rounded-lg m-2 relative'>
            <div className='left-0 absolute bottom-0 m-2'>
                        <h6>New York</h6>
                        <h7> 10 Properties</h7>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default CityYouLive