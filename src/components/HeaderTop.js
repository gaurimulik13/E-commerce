import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"
const HeaderTop = () => {
    return (
        <div className='border-b border-grey-200 hidden sm:block' >
            <div className='container py-4 '>
                <div className="flex justify-between items-center">
                    <div className='flex gap-2'>
                        <div className='header_top_icon_wrapper'>
                            <BsFacebook />
                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsTwitter />
                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsInstagram />
                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsLinkedin />
                        </div>
                    </div>
                    <div className='text-gray-500 text-[12px]'>
                        <strong>Buy Fashion</strong>
                        Order your choice
                    </div>
                    <div className='flex gap-4'>
                    <select name="currency" id="currency" className='text-grey-500 text-[12px] w-[70px]'>
            <option value="INR">INR</option>
         <option value="USD $">USD $</option>
         <option value="EUR $">EUR $</option>
              </select>

              <select name='language' id='language' className='text-grey-500 text-[12px] w-[70px]'>
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
      <option value="german">German</option>
      <option value="marathi">Marathi</option>
  </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop

