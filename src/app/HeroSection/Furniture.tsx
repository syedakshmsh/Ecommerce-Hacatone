import React from 'react'
import Image from 'next/image'
function Furniture() {
  return (
    <div>
        <div className="md:w-full h-auto w-auto pt-6 md:block hidden ">
        <div className="flex justify-center">
          <p className="pt-10 ">Share your setup with</p>
          <h1 className=" pt-3">#FuniroFurniture</h1>
        </div>

        <div className="  ml-20  flex justify-center">
          <div>
            <Image
              src={"/Rectangle 36.png"}
              alt={"#"}
              width={50}
              height={122}
            ></Image>
          </div>
          <div className="pl-2 pt-16">
            <Image
              src={"/Rectangle 38 (1).png"}
              alt={"#"}
              width={251}
              height={152}
            ></Image>
          </div>

          <div className="pl-4 pt-28 mb-10">
            <Image
              src={"/Rectangle 40.png"}
              alt={"#"}
              width={195}
              height={192}
            ></Image>
          </div>
          <div >
            <Image
              src={"/Rectangle 43.png"}
              alt={"#"}
              width={190}
              height={148}
              className="pl-4 pt-16"
            ></Image>
          </div>
          <div >
            <Image
              src={"/Rectangle 45.png"}
              alt={"#"}
              width={148}
              height={134}
              className="pt-6  pl-4 "
            ></Image>
            </div>
            </div>
    
          
        <div className=" ml-28 flex justify-center w-auto h-auto">
          <div>
            <Image
              src={"/Rectangle 37.png"}
              alt={"#"}
              width={148}
              height={123}
              className="mb-36"
            ></Image>
          </div>
          <div className="pl-6 mb-36">
            <Image
              src={"/Rectangle 39.png"}
              alt={"#"}
              width={142}
              height={144}
            ></Image>
          </div>
          <div className="pl-96 mb-36">
            <Image
              src={"/Rectangle 41.png"}
              alt={"#"}
              width={178}
              height={142}
            ></Image>
          </div>
          <div className="pl-4 mb-36">
            <Image
              src={"/Rectangle 44.png"}
              alt={"#"}
              width={158}
              height={197}
            ></Image>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Furniture