import React from 'react'

const ContactUsForm = () => {
  return (
    <div>
      <div className='flex flex-row  h-[754px] w-[1440px] px-[182px] pt-[84px] pb-14 bgimg mt-16 mb-16'>
           <div className='bg-[#100E2C] w-[416px] h-[610px] mr-auto p-10 rounded-xl'>
                 <h3 className='text-white text-left font-bold mb-5 text-2xl'>Get in touch</h3>
                 <p className='text-white text-left text-xs mb-5'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
                 <input placeholder='Your name' className='rounded-lg w-[336px] h-[50px] pl-3 '/>
                 <input placeholder='Your mail' className='my-5 rounded-lg w-[336px] h-[50px] pl-3'/>
                 <input placeholder='Your phone' className='rounded-lg w-[336px] h-[50px] pl-3'/>
                 <input placeholder='Your message' className='w-[336px] h-[148px] my-5 rounded-lg pl-3 pb-[105px]'/>
                 <button  className='bg-[#0057FF] rounded-md my-5 w-48 h-11 text-white'>Send Message</button>
           </div>
           <div className='  w-[498px] h-[155px] self-center'>
                <h2 className='h-[77px] mb-5 font-bold text-3xl text-white'>Putting a plan to action, to assure your satisfaction!</h2>
                <p className=' w-[415px] h-[38px] text-xs self-start text-white'>
                Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit
                </p>
           </div>

      </div>
    </div>
  )
}

export default ContactUsForm
