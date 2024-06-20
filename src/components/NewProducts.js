import React from "react";
import ProductCard from "./ProductCard";

const ProductsData=[
    {
        img:"/jacket-1.jpg",
        title:"Jacket",
        desc:"Men jacket",
        ratings:4,
        price:"500.00",
    },
    {
        img:"/skirt-1.jpg",
        title:"Skirt",
        desc:"Black Skirt",
        ratings:4,
        price:"550.00",
    },
    {
        img:"/party-wear-1.jpg",
        title:"dress",
        desc:"Womens wear",
        ratings:4,
        price:"900.00",
    },
    {
        img:"/shirt-1.jpg",
        title:"shirt",
        desc:"pure garment shirt",
        ratings:4,
        price:"900.00",
    },
    {
        img:"/sports-1.jpg",
        title:"Sports",
        desc:"sports shoes",
        ratings:4,
        price:"800.00",
    },
    {
        img:"/watch-2.jpg",
        title:"watches",
        desc:"smart watches",
        ratings:4,
        price:"900.00",
    },
    {
        img:"/watch-2.jpg",
        title:"watches",
        desc:"smart watch",
        ratings:4,
        price:"707.00",
    },
];
 const NewProducts=()=>{
    return <div>
        <div className="container pt-16">
            <h2 className="pb-4 text-2xl font-medium">NewProducts</h2>

            <div className="grid gap-10 gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10">
             {
                   ProductsData.map((item,index)=>{
                    return (
                        <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        />
                    )

                   })
             }
            </div>
        </div>
        </div>
 };

 export default NewProducts;