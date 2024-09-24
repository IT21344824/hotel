import React from 'react'
import { InspirationImages } from '@/config/banquetImageConfig'
import Image from 'next/image'

const Inspiration = () => {
  return (
    <div className='flex flex-col InspirationImagess-center text-center items-center justify-center mt-20 '>
      <h style={{
        fontFamily: 'Aclonica',
        fontSize: '60px',
        fontWeight: '400',
        lineHeight: '68px',
        textAlign: 'left',
      }}>
        Inspiration
      </h>

      <div className="grid grid-cols-3 gap-5 px-40">
        <div className="col-span-1 h-[400px]">
          <Image
            src={InspirationImages.I_1.img}
            className="w-full h-full object-cover"
            alt={InspirationImages.I_1.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-1 h-[400px] "> {/* Added space-y-5 */}
          <Image
            src={InspirationImages.I_2.img}
            className="w-full h-1/2 pb-2  object-cover"
            alt={InspirationImages.I_2.name}
            width={1000}
            height={1000}
          />
          <Image
            src={InspirationImages.I_3.img}
            className="w-full h-1/2 pt-2  object-cover"
            alt={InspirationImages.I_3.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-1 h-[400px]">
          <Image
            src={InspirationImages.I_4.img}
            className="w-full h-full object-cover"
            alt={InspirationImages.I_4.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-3 h-[400px]">
          <Image
            src={InspirationImages.I_5.img}
            className="w-full h-full object-cover"
            alt={InspirationImages.I_5.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-3 flex h-[300px]">
          <Image
            src={InspirationImages.I_6.img}
            className="w-1/2 pr-2 object-cover"
            alt={InspirationImages.I_6.name}
            width={1000}
            height={1000}
          />
          <Image
            src={InspirationImages.I_7.img}
            className="w-1/2 pl-2 object-cover"
            alt={InspirationImages.I_7.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-1 h-[500px]">
          <Image
            src={InspirationImages.I_8.img}
            className="w-full h-1/2 object-cover pb-2"
            alt={InspirationImages.I_8.name}
            width={1000}
            height={1000}
          />
          <Image
            src={InspirationImages.I_10.img}
            className="w-full h-1/2 object-cover pt-2"
            alt={InspirationImages.I_10.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-1 h-[500px]">
          <Image
            src={InspirationImages.I_9.img}
            className="w-full h-1/2 object-cover pb-2"
            alt={InspirationImages.I_9.name}
            width={1000}
            height={1000}
          />
          <Image
            src={InspirationImages.I_11.img}
            className="w-full h-1/2 object-cover pt-2"
            alt={InspirationImages.I_11.name}
            width={1000}
            height={1000}
          />
        </div>

        <div className="col-span-1 h-[500px]">
          <Image
            src={InspirationImages.I_12.img}
            className="w-full h-full object-cover"
            alt={InspirationImages.I_12.name}
            width={1000}
            height={1000}
          />
        </div>


      </div>



    </div>
  )
}

export default Inspiration
