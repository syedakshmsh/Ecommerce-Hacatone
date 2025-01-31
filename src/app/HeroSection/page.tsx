import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div>
         <div className=" md:w-[1183px] top-[39px] md:left-[131px]  w-auto h-auto left-auto">
                <h1 className="md:flex justify-center  font-bold text-2xl pl-7">
                  Browse The Range
                </h1>
                <p className="md:flex justify-center text-gray-400 pl-3  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-center pt-6 gap-6 md:pl-20  pl-auto md:flex-row  flex-col h-auto w-auto">
                  <div>
                    <Image
                      src={"/Mask Group.png"}
                      alt={"#"}
                      width={381}
                      height={480}
                    ></Image>
                    <p>Dinnig</p>
                  </div>
                  <div>
                    <Image
                      src={"/image 100.png"}
                      alt={"#"}
                      width={381}
                      height={480}
                    ></Image>
                    <p>livind</p>
                  </div>
                  <div>
                    <Image
                      src={"/Mask Group (1).png"}
                      alt={"#"}
                      width={381}
                      height={480}
                    ></Image>
                    <p>BedRoom</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Herosection