import HeadComponent from "@/components/HeadComponent";
import subscriptionHOC from "@/components/SubscriptionHOC";
import SubscriptionPage from "@/components/SubscriptionPage";
import Image from "next/image";
import React from "react";
import cactus from "./../resource/image/cactus.jpeg";

export default function Subscribe() {
  const SubscriptionComponent = subscriptionHOC(SubscriptionPage);
  return (
    <>
      <HeadComponent />
      <div className='lg:flex lg:justify-center lg:items-center bg-[#f6fbfe] min-h-[100vh]'>
        <div className='lg:w-1/2 bg-[#42addb] lg:min-h-screen lg:flex'>
          <Image className='mx-auto my-auto' src={cactus} alt='image-1' />
        </div>
        <div className='lg:w-1/2 lg:py-0 lg:px-32 md:px-6 px-3 md:py-14 py-12 ys-padding '>
          <h1 className='lg:text-[70px] lg:text-left ys-head lg:pb-8 md:text-6xl md:pb-6 text-45 leading-2 font-normal text-black pb-3 text-center'>
            Get <span className='font-bold'>smarter</span>
            <br /> about <span className='font-bold'>pickleball</span>
          </h1>
          <p className='lg:pb-10 md:text-lg lg:text-left lg:mr-20 text-base font-normal text-center text-para pb-8'>
            Join subscribers and get our 3 min daily newsletter on what matters
            in pickleball.
          </p>
          {/* <div className='lg:mr-20 relative text-center'>
          <input
            className='w-full py-[26px] md:pr-40 md:pl-4 p-4 bg-white outline outline-1 rounded-md outline-ocolor  focus:outline-btn'
            placeholder='Enter email address'
          />
          <button className='md:absolute md:top-[7px] md:mt-0 md:right-2 md:w-min mt-5 md:px-6 w-full py-4 text-lg font-bold text-white bg-btn hover:duration-300 rounded-[10px] border border-btn hover:bg-transparent hover:text-btn '>
            Subscribe
          </button>
        </div> */}
          <SubscriptionComponent />
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  return { props: { hideNavigation: true } };
}
