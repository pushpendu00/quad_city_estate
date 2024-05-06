import React from 'react'

export const AboutUs = () => {
  return (
    <div id='About-Us' className='w-full flex flex-col items-center my-5'>
        <header className='w-[90%] text-3xl text-center py-3 font-bold flex justify-center items-center gap-10'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='text-3xl flex font-serif px-5 py-2 bg-[#f4c61e] text-white'>
                <span>About</span>
                <span>&nbsp;Us</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>
        <div className='w-[90%] lg:w-[70%] gap-y-3 flex flex-col items-center md:flex md:flex-row md:gap-x-5 lg:gap-5'>
            <div className='w-full text-justify my-5'>
                S. S. Civil Construction Pvt. Ltd. {'('}formerly S. S. Construction{')'}
                was founded in 1984 as contracting company in Civil Construction and Structural Engineering.
                Some of the most outstanding projects we have executed are Construction of Water Treatment 
                Plant at Chitpur for Eastern Railway; Construction of Kolkata Station Building and its Circulating 
                area and Deep pits for Eastern Railway; Construction of Fishing Harbours at Diamond Harbour, Kakdwip 
                and Sagar for WBFCL; Construction of R.C.C. Bridge over River Sutarbag at Diamond Harbour for P.W.
                {'('}Roads{')'}  Dte.; Construction of R.C.C. Bridge over River Piyali at Sundarban for S.D.B.; 
                Construction of Lockgate Road Flyover at Kolkata as nominated contractor for HRBC
                S. S. Civil Construction Pvt. Ltd. {'('}formerly S. S. Construction{')'} 
                was founded in 1984 as contracting company in Civil Construction and Structural Engineering.
                Some of the most outstanding projects we have executed are Construction of Water Treatment 
                Plant at Chitpur for Eastern Railway;
            </div>
            <div className='w-full my-3 flex justify-center items-center'>
                <img className='w-[90%]' src={require('../../assets/about-photo2.png')} alt="About Us" />
            </div>
        </div>
    </div>
  )
}
