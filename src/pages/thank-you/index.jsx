import React from "react";
import HeadComponent from "@/components/HeadComponent";

export default function index() {
  return (
    <>
      <HeadComponent />
      <div className='max-w-4xl mx-auto lg:py-16 md:py-14 lg:px-2 md:px-20 py-10 px-4'>
        <h1 className='lg:text-[64px] lg:pb-10 md:text-5xl text-4xl leading-2 font-medium text-black pb-8'>
          Thank You for
          <br /> Subscribing
        </h1>
        <h2 className='lg:pb-8 md:text-[32px] text-3xl font-semibold text-black leading-2 capitalize pb-5'>
          Welcome to Picklewho!
        </h2>
        <p className='text-lg font-semibold text-b-black pb-4'>
          Here's what to expect:
        </p>
        <ul className='md:pl-8 pl-2 pb-8'>
          <li className='text-base font-normal text-para pb-4'>
            <i className='fa-regular fa-envelope text-btn'></i>&nbsp;&nbsp; An
            email every weekday around 9 am Central Time
          </li>
          <li className='text-base font-normal text-para pb-4'>
            <i className='fa-solid fa-glasses text-btn'></i>&nbsp;&nbsp; Just a
            few minutes or readying everyday
          </li>
          <li className='text-base font-normal text-para '>
            <i className='fa-solid fa-face-grin-hearts text-btn'></i>
            &nbsp;&nbsp; Our pickleball analysis dilled-out into just the juice
            that matters
          </li>
        </ul>
        <p className='text-base font-normal text-para pb-4'>
          You've got 5 minutes to go get the email we just sent you!
        </p>
        <p className='text-base font-normal text-para pb-4'>
          See ya on the other side,
          <br /> Picklewho
        </p>
      </div>
    </>
  );
}
