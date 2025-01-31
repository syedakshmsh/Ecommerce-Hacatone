import React from "react";

function Footer() {
  return (
    <div className="md:w-full h-auto w-auto top-10 md:flex-col flex-col">
      <div className=" md:flex-row  flex-col">
        <div className=" md:pl-20  pl-4 ">
          <h1 className="font-bold text-2xl pt-5">Funiro.</h1>
          <p className="pt-20 text-gray-400  text-xs w-[285px] ">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        
        <div className=" w-auto h-auto flex justify-center md:flex-row  flex-col md:ml-64 ml-32">
          <div className="  gap-6 h-[312] pt-8 md:pt-0">
            <p className="text-gray-400">Link</p>
            <p className="pt-4">home</p>
            <p className="pt-4">shop</p>
            <p className="pt-4">About</p>
            <p className="pt-4">Contact</p>
          </div>
          <div className=" pl-2 lg:pl-10 md:pl-10 sm:pl-10 pt-8 md:pt-0">
            <p className="text-gray-400">help</p>
            <p className="pt-4">Payment Options</p>
            <p className="pt-4">Returns</p>
            <p className="pt-4">Privacy Policies</p>
          </div>
          <div className="  md:pl-20 pl-auto pt-8 md:pt-0">
            <p className="text-gray-400">Newsletter</p>
            <p className="text-gray-400 pt-9"> Email Address</p>
            <hr />
          </div>
          <div className="pt-16 md:pl-4 ">
            <p>Subscribe</p>
            <hr  className="w-5"/>
          </div>
        </div>
        
      </div>
      <div className="p-4 pl-10">
        <hr className="w-5 "/>
        <p className="pl-10">2023 furino. All rights reverved</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
