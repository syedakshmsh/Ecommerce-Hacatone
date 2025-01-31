//   "use client"
//   import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {client} from "@/sanity/lib/client";
// import "bootstrap-icons/font/bootstrap-icons.css";

//  function Page  () {
    


  
    
        

//    <main>
  
    
   
    
//     <div>
      
      
//       <div className=" h-[316px] md:w-full">
//         <Image
//           src={"/Group 78 (5).png"}
//           alt={"#"}
//           width={1360}
//           height={316}
//         ></Image>
//       </div>
//       <div className="md:w-[1232px] w-auto flex justify-center gap-6 md:pt-10 pt-0 md:flex-row flex-col ">
//         <div className=" pl-10">
//           <h1 className="h-[105] md:w-[223px]   pt-0 md:pt-12 font-extrabold">
//             {" "}
//             Go to Product page for more Products
//           </h1>
//           <p className="text-gray-400">View More</p>
//         </div>
//         <div className="md:ml-0 ml-5">
//           <Image
//             src={"/Group 95.png"}
//             alt={"#"}
//             width={280}
//             height={177}
//           ></Image>
//           <p className="flex justify-center items-center">Asgaard Sofa</p>
//           <p className="flex justify-center items-center">
//             Rs. 250,000.00 <br />
//             4.7
//           </p>
//           <p  className="flex justify-center items-center">
//             <Image
//               src={"/Five star (1).png"}
//               alt={"#"}
//               width={100}
//               height={20}
             
//             ></Image>
//           </p>
//         </div>
//         <div className="md:ml-0 ml-5">
//           <Image
//             src={"/Group 94.png"}
//             alt={"#"}
//             width={280}
//             height={177}
//           ></Image>
//           <p className="flex justify-center items-center">Outdoor Sofa Set</p>
//           <p className="flex justify-center items-center">
//             Rs. 2240,000.00 <br />
//             4.7
//           </p>
//           <p  className="flex justify-center items-center">
//             <Image
//               src={"/Five star (1).png"}
//               alt={"#"}
//               width={100}
//               height={20}
//               className="flex justify-center items-center"
//             ></Image>
//           </p>
//         </div>
//         <div className="p-10">
//           <h1 className="font-bold text-2xl">Add a Product</h1>
//           <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[55px] w-[237px] p-3 pt-6 ">
//             Submmit{" "}
//           </button>
//         </div>
//         <hr />
//       </div>
//       <div className="w-full flex gap-16  h-[1432px] text-sm">
//         <hr />

//         <div className="pt-10 ">
//           <div className="w-[241px] h-[235px] pl-16 text-sm">
//             <h1 className="pt-2 2xl font-extrabold">General </h1>
//             <p className="pt-2 ">Sales Package</p>
//             <p className="pt-2 ">Model Number</p>
//             <p className="pt-2 ">Secondary Material</p>
//             <p className="pt-2 ">Configuration</p>
//             <p className="pt-2 ">Upholstery Material</p>
//             <p className="pt-2 ">Upholstery Color</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20">
//             <h1 className="pt-10 2xl font-extrabold">Product </h1>
//             <p className="pt-2 ">Filling Material</p>
//             <p className="pt-2 ">Finish Type</p>
//             <p className="pt-2 ">Adjustable Headrest</p>
//             <p className="pt-2 ">Maximum Load Capacity</p>
//             <p className="pt-2 ">Origin of Manufacture</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20">
//             <h1 className="pt-10 2xl font-extrabold">Dimensions </h1>
//             <p className="pt-2 ">Width</p>
//             <p className="pt-2 ">Height</p>
//             <p className="pt-2 ">Depth</p>
//             <p className="pt-2 ">Weight</p>
//             <p className="pt-2 ">Seat Height</p>
//             <p className="pt-2 ">Leg Height</p>
//           </div>
//           <div className="w-[241px] h-[189px] pl-20">
//             <h1 className="pt-10 2xl font-extrabold">Warranty</h1>
//             <p className="pt-6 ">Warranty Service Type</p>
//             <p className="pt-16 ">Covered in Warranty</p>
//             <p className="pt-16 ">Not Covered in Warranty</p>
//             <p className="pt-24 ">Domestic Warranty</p>
//           </div>
//         </div>

//         <div className="pt-10 hidden md:block">
//           <div className="w-[241px] h-[235px] pt-8 pl-20">
//             <p className="pt-2 ">1 sectional sofa</p>
//             <p className="pt-2 ">TFCBLIGRBL6SRHS</p>
//             <p className="pt-2 ">Solid Wood</p>
//             <p className="pt-2 ">L-shaped</p>
//             <p className="pt-2 ">Fabric + Cotton</p>
//             <p className="pt-2 ">Bright Grey & Lion</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20 pt-16">
//             <h1 className="pt- 2xl font-extrabold"></h1>
//             <p className="pt-2 ">Foam</p>
//             <p className="pt-2 ">Bright Grey & Lion</p>
//             <p className="pt-2 ">No</p>
//             <p className="pt-2 ">280 KG</p>
//             <p className="pt-2 ">India</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20 pt-16">
//             <p className="pt-2 ">265.32 cm</p>
//             <p className="pt-2 ">76 cm</p>
//             <p className="pt-2 ">167.76 cm</p>
//             <p className="pt-2 ">45 KG</p>
//             <p className="pt-2 ">41.52 cm</p>
//             <p className="pt-2 ">5.46 cm</p>
//           </div>
//           <div className="w-[241px] h-[189px] pl-20 pt-16">
//             <p className="pt-6 ">1 Year Manufacturing Warranty</p>
//             <p className="pt-6 ">
//               For Warranty Claims or Any Product Related Issues Please Email at
//               operations@trevifurniture.com
//             </p>
//             <p className="pt-6 ">Warranty Against Manufacturing Defect</p>
//             <p className="pt-16 ">
//               The Warranty Does Not Cover Damages Due To Usage Of The Product
//               Beyond Its Intended Use And Wear & Tear In The Natural Course Of
//               Product Usage.
//             </p>
//             <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[54px] w-[217px] ">
//               Add To Card{" "}
//             </button>
//           </div>
//         </div>
//         <div className="pt-10 hidden md:block">
//           <div className="w-[241px] h-[235px] pl-20 pt-10">
//             <p className="pt-2 ">1 Three Seater, 2 Single Seater</p>
//             <p className="pt-2 ">DTUBLIGRBL568</p>
//             <p className="pt-2 ">Solid Wood</p>
//             <p className="pt-2 ">L-shaped</p>
//             <p className="pt-2 ">Fabric + Cotton</p>
//             <p className="pt-2 ">Bright Grey & Lion</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20 pt-16">
//             <p className="pt-2 ">Matte</p>
//             <p className="pt-2 ">Bright Grey & Lion</p>
//             <p className="pt-2 ">yes</p>
//             <p className="pt-2 ">300 KG</p>
//             <p className="pt-2 ">India</p>
//           </div>
//           <div className="w-[241px] h-[235px] pl-20 pt-16">
//             <p className="pt-2 ">265.32 cm</p>
//             <p className="pt-2 ">76 cm</p>
//             <p className="pt-2 ">167.76 cm</p>
//             <p className="pt-2 ">45 KG</p>
//             <p className="pt-2 ">41.52 cm</p>
//             <p className="pt-2 ">5.46 cm</p>
//           </div>
//           <div className="w-[241px] h-[189px] pl-20 pt-16">
//             <p className="pt-6 ">1.2 Year Manufacturing Warranty</p>
//             <p className="pt-6 ">
//               For Warranty Claims or Any Product Related Issues Please Email at
//               operations@trevifurniture.com
//             </p>
//             <p className="pt-6 ">Warranty Against Manufacturing Defect</p>
//             <p className="pt-16 ">
//               The Warranty Does Not Cover Damages Due To Usage Of The Product
//               Beyond Its Intended Use And Wear & Tear In The Natural Course Of
//               Product Usage.
//             </p>
//             <button className="border-2 border-[#B88E2F] bg-[#B88E2F] pt-3 text-white rounded-lg  h-[54px] w-[217px] ">
//               Add To Card{" "}
//             </button>
//           </div>
//         </div>
//       </div>
    
//     </div>
//     <div className="h-100 bg-[#F9F1E7] md:w-full pt-24">
//           <div className="h-[70] w-[1234] flex  justify-center gap-12">
//             <div className="pt-4">
//               <i className="bi bi-trophy p-6"></i>
//               <h1 className="">High Quality </h1>
//               <p className="text-gray-400 pb-6">crafted from top materials</p>
//             </div>
//             <div className="pl-4 pt-4">
//               <i className="bi bi-patch-check p-6"></i>
//               <h1 className="">warranty Protection </h1>
//               <p className="text-gray-400 pb-6">Over 2 years</p>
//             </div>
//             <div className="pl-4 pt-4">
//               <i className="bi bi-truck p-6"></i>
//               <h1 className="">Free shipping </h1>
//               <p className="text-gray-400 pb-6">Over 2 years</p>
//             </div>
//             <div className="pl-4 pt-4 hidden md:block">
//               <i className="<i bi bi-file-lock-fill p-6"></i>
//               <h1 className="">24 / 7 Support </h1>
//               <p className="text-gray-400 pb-6">Dedicated support</p>
//             </div>
//           </div>
//           </div>
  
//     </main>
//   )
// }


// export default Page