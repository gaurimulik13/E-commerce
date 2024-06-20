import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const HeaderMain = () => {
    return (
        <div className="py-6 border-b border-gray-200">
            <div className="container flex items-center justify-between sm:">
                <div className="pb-0 pb-4 text-4xl font-bold text-center sm: text-blackish">
                    LifeStyle
                </div>
                <div className="w-full sm:w-[300px] md:w-[70%] relative">
                    <input
                        className="w-full p-2 px-4 border border-gray-200 rounded-lg"
                        type="text"
                        placeholder="Enter any product name..."
                    />
                    <BsSearch
                        className="absolute top-0 right-0 mt-3 mr-3 text-gray-400"
                        size={20}
                    />
                </div>
                <div className="hidden lg:flex text-gray-500 text-[30px] gap-5">
                    <BiUser />

                    <div className="relative">
                        <FiHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 ">
                        </div>
                    </div>
                    <div>
                        <HiOutlineShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">0</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderMain;