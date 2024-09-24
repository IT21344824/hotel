import React from 'react';
import { OurServicesImages } from '@/config/banquetImageConfig'
import Image from 'next/image';


const OurServices = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h style={{
                fontFamily: 'Aclonica',
                fontSize: '60px',
                fontWeight: '400',
                lineHeight: '68px',
                textAlign: 'left',
            }}>
                Our Services
            </h>

            <div className='mt-10 w-full'>
                <div className='flex flex-wrap items-center justify-center gap-20'>
                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_1.img}
                            alt={OurServicesImages.O_1.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Venues</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Lawans/Farmhouse, Banquet Hall, Resorts, Small Function Hall, Destination Wedding, Hotels
                            </p>
                        </div>
                    </div>

                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_2.img}
                            alt={OurServicesImages.O_2.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Makeup</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Bridal Makeup, Family Makeup, Jewellery, Accessories
                            </p>
                        </div>
                    </div>
                </div>



                <div className='flex flex-wrap items-center justify-center gap-20 mt-10'>
                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_3.img}
                            alt={OurServicesImages.O_3.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Photography</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Pre Wedding Shoot, Photographer, Videographers
                            </p>
                        </div>
                    </div>

                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_4.img}
                            alt={OurServicesImages.O_4.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Catering</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Catering Services, Food Stalls, Bartenders, Home Catering, Cakes
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-20 mt-10'>
                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_5.img}
                            alt={OurServicesImages.O_5.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Bridal Wear</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Bridal Lehengas, Silk Sarees, Wedding Gowns, Trousseau Sarees
                            </p>
                        </div>
                    </div>

                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_6.img}
                            alt={OurServicesImages.O_6.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full "
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Groom Wear</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Wedding Suits/Tuxes, Sherwani
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-20 mt-10'>
                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_7.img}
                            alt={OurServicesImages.O_7.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Planning and Decor</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Decorators, Wedding Planners                            </p>
                        </div>
                    </div>

                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_8.img}
                            alt={OurServicesImages.O_8.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Music and Dance</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Wedding Entertainment, DJ’s, Chreopgrapher
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-10'>
                    <div className='flex shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] rounded-md px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <Image
                            src={OurServicesImages.O_9.img}
                            alt={OurServicesImages.O_9.name}
                            width={200}
                            height={200}
                            className="w-24 h-24 aspect-square object-cover rounded-full"
                        />
                        <div className='ml-4 pr-4'>
                            <h className='text-lg font-bold' style={{ color: '#4C1711' }}>Invites and Gifts</h>
                            <p className='text-sm' style={{ color: '#4C1711' }}>
                                Invitation Gifts, Invitations, Favors, Trousseau Packers                                                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
