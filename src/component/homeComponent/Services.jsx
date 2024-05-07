
import React from 'react';
import {services} from '../../utils/service';
import { NavLink } from 'react-router-dom';

export const Services = () => {
  return (
    <div id='Service' className='Service w-full flex flex-col items-center'>
        <header className='w-[90%] font-semibold flex justify-between items-center gap-10 mb-5'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='text-3xl flex font-serif px-5 py-2 text-white bg-red-500'>
                <span>Our</span>
                <span>&nbsp;Servises</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center'>
            <div className='w-full md:w-[90%] lg:w-[70%] text-justify'>
                S. S. Civil Construction Pvt. Ltd. (formerly S. S. Construction)was founded in 1984 as contracting
                 company in Civil Construction and Structural Engineering. Some of the most outstanding projects we 
                 have executed are Construction of Water Treatment Plant at Chitpur for Eastern Railway; Construction 
                 of Kolkata Station Building and its Circulating .
            </div>
            <div className='w-full md:w-[100%] py-3 flex items-center gap-7 md:gap-0 lg:gap-0 flex-col md:flex-row md:flex-wrap md:justify-around'>

                {/* {services?.map((service,i)=>(
                    <NavLink to={`services/${service.nick_title}`} key={i} className='w-full md:w-[45%] lg:w-[45%] flex items-center gap-3 px-3 py-5 rounded-md bg-[#4e9eff] hover:bg-[#e1eb25] cursor-pointer'>
                        <div className='w-full flex items-center gap-3'>
                            <div className='rounded-full p-3 bg-white'>
                                <Icon icon={service.icon} width="30" height="30"  style={{color: 'black'}} />
                            </div>
                            <div className='text-2xl font-semibold'>{service.title}</div>
                        </div>
                        <div>
                        <Icon icon="ic:round-greater-than" width="32" height="32"  style={{color: 'black'}} />
                        </div>
                    </NavLink>
                ))} */}

                {services?.map((service,j)=>(
                    <div key={j} className='h-auto w-[90%] md:w-[45%] lg:w-[45%] flex flex-col justify-around p-5 rounded-md bg-[#eaeaea] shadow-md shadow-[#999]'>
                        <div className='w-full overflow-hidden rounded-md'>
                            <img className='w-full rounded-md cursor-pointer duration-1000 hover:scale-110' src={require(`../../assets/service/${service.cover_photo}`)} alt="coverPhoto" />
                        </div>
                        <div className='py-2 text-2xl font-serif'>
                            {service.title}
                        </div>
                        <div className='w-full mb-5 text-justify line-clamp-2'>
                            {service.content}
                        </div>
                        <div className='w-full'>
                            <NavLink to={`services/${service.nick_title}`}  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)] text-white font-semibold text-xl hover:bg-[rgb(46,69,184)]'>Explore</NavLink>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}
