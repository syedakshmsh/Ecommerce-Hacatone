import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import Sale from './Sell';

import Category from './Category';
import Service_Shop from './Service';
import Category_Shop from './Category';


interface Iproduct {
  title: String;
  price: String;
  id: number;
  rating?: String;
  oldprice?: string;
  img_url: string;
  description: string;
} 
let shop: Iproduct[] = [
  {
    title: "Syltherine",
    price: "$120",
    id: 1,
    img_url: "/image 2.png",
    description: "Stylish cafe chair"
  },
  {
    title: "Leviosa",
    price: "$240",
    id: 2,
    img_url: "/image 3.png",
    oldprice: "$260",
    description: "Stylish cafe chair"
  },

  {
    title: "Lolito",
    price: "$180",
    id: 3,
    img_url: "/Images.png",
    description: "Luxury big sofa"
  },

  {
    title: "Respira",
    price: "$130",
    id: 4,
    img_url: "/image 1 (1).png",
    oldprice: "$160",
    description: "Outdoor bar table and stoo"
  },
];
let star = [<FaStar/>, <FaStar/> ,<FaStar/>, <FaStar/> ,<FaStar/>]

function Shop() {
  return (
    <div>
        
        
      
      <div className="w-full shadow-lg ">
        <Image
          src={"/Group 78 (3).png"}
          alt={"#"}
          width={1360}
          height={316}
        ></Image>
      </div>
      <div className='md:w-full md:h-[100px] h-auto w-auto bg-[#F9F1E7] flex justify-center items-center  md:gap-52 gap-10'>
        <div className='flex gap-7 pl-6'>
      <i className="bi bi-filter">filter</i>
      <i className="bi bi-ui-checks-grid"></i>
      <i className="bi bi-view-list"></i>

      <h1 className=' flex'>|Showing 1–16 of 32 results</h1>
      </div>
      <div className='flex  lg:gap-4 gap-1 '>
      <p className=' p-4 '>Show</p>
      <button className="border-2  border-white  bg-white rounded-lg mt-4">
                
                </button>
               < p className='p-4 hidden'>Short by</p>
      <button className="border-2 hidden md:block  h-[25px] w-[100px] border-white m-2 mt-5 bg-white rounded-lg">
        Default
                
                </button>
                </div>

      </div>
      <div className="flex  mt-10 md:flex-row lg:flex md:justify-between  flex-col justify-center items-center  space-x-2 mx-32">
        {shop.map((data) =>{
          return (
            <div key={data.id} >
             <Link href={`/Shop/${data.id}`}>
             <div className="w-[250px] h-[200px]">
              <Image
                src={data.img_url}
                alt={"data.title"}
                width={200}
                height={200}
              ></Image>
                </div>
             </Link>

              <div>
              <p className="font-bold mt-3">{data.title}</p>
              <p className='text-sm'>{data.description}</p>
              <p className="flex text-yellow-300 mt-2">{star}</p>
              
              <p className="font-bold mt-1">{data.price}<span className="text-gray-400 font-bold line-through">{data.oldprice}</span></p>
              </div>
            </div>
          );
        })}
      </div>
      <Sale />
       <Service_Shop />
      <Category_Shop />


      
      <div className="h-100 bg-[#F9F1E7] md:w-full pt-24 shadow-lg">
          <div className="h-[70] w-[1234] flex  justify-center gap-12">
            <div className="pt-4">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 pb-6">crafted from top materials</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4 hidden md:block">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 pb-6">Dedicated support</p>
            </div>
          </div>
        </div>
       
      

     

    </div>
  )
}

export default Shop