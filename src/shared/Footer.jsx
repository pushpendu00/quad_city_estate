import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const Footer = () => {
  return (
    <footer id='Footer' className="w-full flex flex-col items-center bg-[#696969] text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-[90%] mb-5 flex flex-wrap gap-5 justify-around">
          {/* <h3 className="text-lg font-semibold mb-4">Quick Links</h3> */}
            <ul className="space-y-2">
                <li><a className='hover:text-[#d9d9d9] cursor-pointer' href="/#Home">Home</a></li>
                <li><a className='hover:text-[#d9d9d9] cursor-pointer' href="/#Service">Our Servise</a></li>
                <li><a className='hover:text-[#d9d9d9] cursor-pointer' href="/#About-Us">About Us</a></li>
                {/* <li><a className='hover:text-[#d9d9d9] cursor-pointer' href="#Projects">Our Projects</a></li> */}
            </ul>

            <ul className="space-y-2">
                {/* <li><a href="#Education">Education</a></li> */}
                {/* <li><a href="#Contact">Contact</a></li> */}
            </ul>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <a className='hover:text-[#d9d9d9] cursor-pointer' href="mailto:dxbqcs@gmail.com">dxbqcs@gmail.com</a>
          <p className='hover:text-[#d9d9d9] cursor-pointer'>+91 7044769955</p>
        </div>
        </div>
      </div>

        <div className='w-[90%] border-b-[1px]'></div>

      <div className="w-[90%] flex justify-center py-5">
          {/* <h3 className="text-lg font-semibold mb-4">Connect</h3> */}
          <ul className="flex space-x-7">
            <li><a href="https://www.youtube.com/@PupaiJ" target='_blank' rel="noopener noreferrer"><Icon icon="logos:youtube-icon" width="30" height="30" /></a></li>
            <li><a href="https://www.facebook.com/pupai.j?mibextid=kFxxJD"><Icon icon="logos:facebook" width="30" height="30" /></a></li>
          </ul>
        </div>

        <div className='w-[90%] border-b-[1px]'></div>

        <div className='py-5 text-[12px]'>
            &copy; 2024 QUAD CITY ESTATE PVT.LTD.
        </div>
    </footer>
  )
}

