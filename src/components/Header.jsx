import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const showHideNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between lg:py-6 py-5 px-3 md:px-5 bg-white relative font-inter header-1'>
          {/* <!-- logo --> */}
          <div className='lg:w-[18%] w-1/2'>
            <Link href='/' className='flex gap-2 md:gap-5 lg:basis-2/6'>
              <h2 className='text-3xl font-bold text-black'>PickleWho</h2>
            </Link>
          </div>
          <nav className='flex place-items-center justify-between lg:w-[52%]'>
            {/* <!-- hamburger --> */}
            <div className='lg:hidden text-right md:pr-10 py-2 w-1/2'>
              <span
                href='javascript:void(0);'
                className='bar'
                onClick={showHideNav}
              >
                <i
                  className={`fa-solid text-xl md:text-2xl ${
                    showNav ? "fa-xmark" : "fa-bars"
                  }`}
                ></i>
              </span>
            </div>
            {/* <!-- navbar --> */}
            <div className='lg:w-[52%] lg:justify-evenly'>
              <ul
                id='menus'
                className={`hidden font-medium bg-white absolute lg:relative left-0 lg:flex lg:justify-end w-full lg:w-4/6 mt-16 lg:mt-0 lg:space-x-4 py-5 lg:py-0 ${
                  showNav ? "mobileShow" : "mobileHide"
                }`}
              >
                <li className=' text-lg text-black font-medium hover:text-btn lg:hover:bg-transparent py-3 lg:py-0'>
                  <Link href='/news' className='px-3 md:pl-5'>
                    Latest News
                  </Link>
                </li>
                {/* <li
                className="text-lg text-black font-medium hover:text-btn lg:hover:bg-transparent py-3 lg:py-0"
              >
                <a href="#Hone" className="px-3 md:pl-5">Hone your skills</a>
              </li>
              <li
                className="text-lg text-black font-medium hover:text-btn lg:hover:bg-transparent py-3 lg:py-0"
              >
                <a href="#More" className="px-3 md:pl-5">More Resources</a>
              </li> */}
                <li className='text-lg text-black font-medium hover:text-btn lg:hover:bg-transparent py-3 lg:py-0 md:hidden'>
                  <Link href='/subscribe' className='px-3 md:pl-5'>
                    Subscribe
                  </Link>
                </li>
              </ul>
            </div>

            <div className='hidden md:block md:mt-2 space-x-4 font-medium'>
              <Link
                href='/subscribe'
                className='text-lg font-bold bg-transparent text-btn py-[16px] px-[30px] rounded-[8px] hover:duration-300 border border-btn hover:bg-btn hover:text-white'
              >
                Subscribe
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
