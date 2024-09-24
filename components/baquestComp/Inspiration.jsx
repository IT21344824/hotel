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

      <div>
        <div className='mt-10 flex w-full gap-5 px-40'>
          <div className='w-1/3 h-[502.82px]'>
            <Image
              src={InspirationImages.I_1.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_1.name}
              width={1000}
              height={1000}
            />
          </div>

          <div className='w-1/3 h-[502.82px] flex flex-col '>

            <Image
              src={InspirationImages.I_2.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_2.name}
              width={1000}
              height={1000}
            />

            <Image
              src={InspirationImages.I_3.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_3.name}
              width={1000}
              height={1000}
            />
          </div>

          <div className='w-1/3 h-[502.82px]'>

            <Image
              src={InspirationImages.I_4.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_4.name}
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className='my-5 mx-40'>

          <Image
            src={InspirationImages.I_5.img}
            className="w-full h-full object-cover"
            alt={InspirationImages.I_5.name}
            width={1000}
            height={1000}
          />
        </div>


        <div className=' flex w-full gap-5 px-40'>
          <div className='w-1/2 h-[302.82px]'>

            <Image
              src={InspirationImages.I_6.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_6.name}
              width={1000}
              height={1000}
            />
          </div>
          <div className='w-1/2 h-[302.82px]'>

            <Image
              src={InspirationImages.I_7.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_7.name}
              width={1000}
              height={1000}
            />
          </div>

        </div>


        <div className='mt-5 flex w-full gap-5 px-40'>
          <div className='w-1/3 h-[502.82px] flex flex-col '>

            <Image
              src={InspirationImages.I_8.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_8.name}
              width={1000}
              height={1000}
            />

            <Image
              src={InspirationImages.I_9.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_9.name}
              width={1000}
              height={1000}
            />
          </div>

          <div className='w-1/3 h-[502.82px] flex flex-col '>

            <Image
              src={InspirationImages.I_10.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_10.name}
              width={1000}
              height={1000}
            />

            <Image
              src={InspirationImages.I_11.img}
              className="w-full h-full object-cover"
              alt={InspirationImages.I_11.name}
              width={1000}
              height={1000}
            />
          </div>

          <div className='w-1/3 h-[502.82px]'>

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




    </div>
  )
}

export default Inspiration
