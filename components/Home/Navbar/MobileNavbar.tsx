import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';

type Props = {
  activeNav: boolean,
  closeNav: () => void,
};


const MobileNavbar = ({closeNav, activeNav} : Props) => {
  
  const navOpen = activeNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (

    <div>
      <div className={`${navOpen} fixed transform transition-all duration-500 inset-0 z-[10000] bg-black opacity-70 w-full`}>
      </div>

      <div className={`${navOpen} text-white transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
        {navLinks.map((item) => {
            return (
            <Link 
            onClick={closeNav}
            key={item.id} href={item.url}>
                      <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>{item.label}</p>
                    </Link>
              );
            })}

      <CgClose 
      onClick={closeNav}
      className='absolute top-[1rem] right-[1rem] sm:w-8 sm:h-8 h-6 w-6 text-white'/>

      </div>

    </div>
  )
};

export default MobileNavbar