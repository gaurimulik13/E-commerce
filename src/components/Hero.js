"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

   let settings={
    dots:true,
    infinite:true,
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
   };
   const slideData=[
    {
        id:0,
        img:"/banner-1.jpg",
        title:'Offer',
        maniTitle:"Womens latest fashion sale",
        Price:"$30",
    },
    {
        id:1,
        img:"/banner-2.jpg",
        title:"Offer",
        maniTitle:"Womens latest fashion sale",
        Price:"$30",
    },
    {
        id:2,
        img:"/banner-3.jpg",
        title:"Offer",
        maniTitle:"Womens latest fashion sale",
        Price:"$30",
    },

   ];
   return(
   <div>
    <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item)=>{
            return <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            maniTitle={item.maintitle}
            price={item.price}
            />
            })}
        </Slider>
    </div>
   </div>
   );
};

export default Hero