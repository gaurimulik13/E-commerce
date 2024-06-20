import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div>
      <div  className="container grid-cols-2 py-16">
        <h2 className="pb-4 text-2xl font-medium">Information</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
            <div className="grid p-6 border border-gray-400 rounded-2xl place-items-center lg:p-0">
                <div className="flex flex-col items-center gap-1 text-center">
                    <Image  className="inline-block rounded-full" src="/user.jpg" width={80} height={80} alt="profile"/>
                    <h2 className="text-gray-500 font-black text-[20px]">Gauri</h2>
                    <p>CEO of LifeStyle</p>
                    <Image className="inline-block py-2" src="/quotes.svg" width={30} height={30} alt="Quotes"/>
                    <p className="max-w-[200px]  text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit enim eveniet corrupti. .</p>
                </div>
            </div>
            <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                    <button className="p-2 text-white rounded-md bg-blackish">25% Discount</button>
                    <h2 className="font-extrabold text-2xl text-[#272727]">Summer Collection</h2>
                    <p className="text-gray-500 text-[20px]">Starting at $20 <strong>Shop Now</strong></p>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
