import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import SideBar from "react-sidebar";

export const Sidebar = (props) => {

  const {sidebarOpen, setSidebarOpen} = props;

  return (
    <SideBar
        sidebar={
        <div className="h-full w-full p-3 bg-[#ffffff] ">
          <ul className='nav-list flex flex-col'>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Home' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-[#c7c7c7] rounded-md text-xl'>
              <Icon icon="material-symbols:home" width="30" height="30"  style={{color: '#000'}} />
              <span>Home</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Service' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-[#c7c7c7] rounded-md text-xl'>             
                <Icon icon="emojione-monotone:building-construction" width="30" height="30"  style={{color: '#000'}} />
                {/* <Icon icon="fluent-emoji-flat:building-construction" width="30" height="30" /> */}
                {/* <Icon icon="noto-v1:building-construction" width="30" height="30" /> */}
                <span>Our Service</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#About-Us' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-[#c7c7c7] rounded-md text-xl'>
              <Icon icon="mdi:about" width="30" height="30"  style={{color: '#000'}} />
              <span>About Us</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Projects' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-[#c7c7c7] rounded-md text-xl'>
            <Icon icon="grommet-icons:projects" width="30" height="30"  style={{color: '#000'}} />
              <span>Our Projects</span>
            </a>

          </ul>
        </div>
      }
        open={sidebarOpen}
        onSetOpen={()=>setSidebarOpen(prev=>!prev)}
        styles={{ sidebar: { background: "white", position : 'fixed' ,top: '0', height : '100vh', width : '55%' } }}
      >
    </SideBar>
  )
}
