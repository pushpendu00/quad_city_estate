
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Sidebar } from './Sidebar';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div id='Navbar' className='Navbar w-full z-10 fixed top-0 h-20 p-2 flex justify-between md:justify-around items-center bg-[#e9e9e9] shadow-md shadow-[#7a7a7a]'>
        
        <NavLink to={'/'} className='nav-profile-name text-2xl font-bold text-red-600 text-center'>
            QUAD CITY ESTATE <br />
            PVT.LTD.
        </NavLink>
        
        <ul className='nav-list w-0 overflow-hidden md:w-auto md:flex md:gap-7 lg:gap-10'>
            <NavLink style={({isActive})=>({color: isActive ? "#ff5757" : "#000",})} className='cursor-pointer text-[18px] font-semibold hover:text-[#ff5757] border-transparent' to={'/'}>Home</NavLink>
            {/* <NavLink style={({isActive})=>({color: isActive ? "#ff5757" : "#000",})} className='cursor-pointer text-[18px] font-semibold hover:text-[#ff5757] border-transparent' to={'/services'}>Our Service</NavLink> */}
            <NavLink to={'/#Service/'}>
              <a href='#Service' className='cursor-pointer text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Our Service</a>
            </NavLink>
            <a href='#About-Us' className='cursor-pointer text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>About Us</a>
            <a href='#Projects' className='cursor-pointer text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Our Projects</a>
            {/* <a href='#Contact' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Contact</a> */}
        </ul>

        <div onClick={()=>setSidebarOpen(true)} className='sidebar-icon flex md:hidden text-[35px] cursor-pointer'>
            <Icon icon="fe:bar"  style={{color: 'Black'}} />
        </div>
        <div className="absolute">
          <Sidebar sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen}
          />
      </div>
    </div>
  )
}

