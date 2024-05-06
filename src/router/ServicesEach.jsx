import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { services } from '../utils/service';

export const ServicesEach = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState({});

  useEffect(()=>{
    HandelLoadCategory();

},[]);

async function HandelLoadCategory(){
  let url1 = location.pathname.substring(10);
    let url2 = location.pathname.substring(10,location.pathname.substring(1).length);
    for(let i = 0;i<services.length;i++){
      // console.log("first",i);
      if(services[i].nick_title === url1 || services[i].nick_title === url2){
        // console.log(services[i].nick_title," ",url1," ",url2)
        await setServiceData(services[i]);
        return;
      }
    }
    navigate('/')
}

  return (
    <div className='w-full flex flex-col items-center'>

      <header className='w-[90%] py-10 font-semibold flex flex-col items-center mb-5'>
        <div className='w-full md:w-full border-b-[1px] border-black'></div>
        {/* <div className='text-3xl flex font-serif px-5 py-10'>
            <span>Wellcome</span>
            <span>&nbsp;To</span>
            <span>&nbsp;Our</span>
            <span>&nbsp;World</span>
            <span>&nbsp;class</span>
            <span>&nbsp;Transpotation</span>
            <span>&nbsp;Services</span>
        </div> */}
        <div className='text-3xl text-center flex font-serif px-5 py-5'>
          {serviceData?.punch_line}
        </div>
        <div className='w-full md:w-full border-b-[1px] border-black'></div>
      </header>

      <div className='w-[90%] flex flex-wrap justify-center gap-10'>
        {serviceData?.category?.map((item,j)=>(
          <div key={j} className='h-[50vh] w-[40%] flex flex-col justify-around p-5 rounded-md bg-[#ddd]'>
                <img className='w-full h-[70%] rounded-md' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
                <div>
                    {item.title}
                </div>
                <div className='w-full'>
                    <NavLink  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)]'>Explore</NavLink>
                </div>
          </div>
        ))}
        </div>
    </div>
  )
}




// [
//   {serviceData.map((service,i)=>(
//     <div key={i} className='w-full flex flex-col items-center'>
//         <div className='text-2xl'>{service.title}</div>
//         <div className='py-5 w-full flex justify-center flex-wrap gap-14'>
//             {service.category.map((item,j)=>(
//                 <div key={j} className='h-[50vh] w-[40%] flex flex-col justify-around p-5 rounded-md bg-[#ddd]'>
//                         <img className='w-full h-[70%] rounded-md' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
//                         <div>
//                             {item.title}
//                         </div>
//                         <div className='w-full'>
//                             <NavLink  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)]'>Explore</NavLink>
//                         </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// ))}
// ]