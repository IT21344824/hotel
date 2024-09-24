import React from 'react'
import { InspirationImages } from '@/config/banquetImageConfig'

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
            <img
              src={InspirationImages.I_1.img}
              className="w-full h-full object-cover"
              alt="Homepage"
            />
          </div>

          <div className='w-1/3 h-[502.82px] flex flex-col '>
            <img
              src={InspirationImages.I_2.img}
              className="w-full h-1/2 object-cover pb-2"
              alt="Homepage"
            />
            <img
              src={InspirationImages.I_3.img}
              className="w-full h-1/2 object-cover pt-2"
              alt="Homepage"
            />
          </div>

          <div className='w-1/3 h-[502.82px]'>
            <img
              src={InspirationImages.I_4.img}
              className="w-full h-full object-cover"
              alt="Homepage"
            />
          </div>
        </div>

        <div className='my-5 mx-40'>
          <img
            src={InspirationImages.I_5.img}
            className="w-[1626px] h-[402.82px] object-cover"
            alt="Homepage"
          />
        </div>


        <div className=' flex w-full gap-5 px-40'>
          <div className='w-1/2 h-[302.82px]'>
            <img
              src={InspirationImages.I_6.img}
              className="w-full h-full object-cover"
              alt="Homepage"
            />
          </div>
          <div className='w-1/2 h-[302.82px]'>
            <img
              src={InspirationImages.I_7.img}
              className="w-full h-full object-cover"
              alt="Homepage"
            />
          </div>

        </div>


        <div className='mt-5 flex w-full gap-5 px-40'>
          <div className='w-1/3 h-[502.82px] flex flex-col '>
            <img
              src={InspirationImages.I_8.img}
              className="w-full h-1/2 object-cover pb-2"
              alt="Homepage"
            />
            <img
              src={InspirationImages.I_9.img}
              className="w-full h-1/2 object-cover pt-2"
              alt="Homepage"
            />
          </div>

          <div className='w-1/3 h-[502.82px] flex flex-col '>
            <img
              src={InspirationImages.I_10.img}
              className="w-full h-1/2 object-cover pb-2"
              alt="Homepage"
            />
            <img
              src={InspirationImages.I_11.img}
              className="w-full h-1/2 object-cover pt-2"
              alt="Homepage"
            />
          </div>

          <div className='w-1/3 h-[502.82px]'>
            <img
              src={InspirationImages.I_12.img}
              className="w-full h-full object-cover"
              alt="Homepage"
            />
          </div>
        </div>
      </div>




    </div>
  )
}

export default Inspiration
