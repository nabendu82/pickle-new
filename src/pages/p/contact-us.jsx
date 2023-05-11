import React from "react";
import HeadComponent from "@/components/HeadComponent";

export default function ContactUs() {
  return (
    <>
      <HeadComponent />
      <section>
        <div className='container mx-auto lg:py-16 md:py-14 lg:px-3 md:px-5 py-10 px-3'>
          <h1 className='md:text-5xl md:pb-6 text-4xl leading-2 font-bold text-black pb-6'>
            Contact Us
          </h1>
          <h2 className='lg:pb-8 lg:leading-[1.5em] md:text-4xl text-2xl font-bold text-black leading-2 capitalize pb-4'>
            Trying to get a hold of Picklewho.com? Great. We'd love to hear from
            you.
          </h2>
          <p className='md:text-lg text-base font-normal text-black pb-4'>
            Here's how you can reach us online:
          </p>
          <p className='md:text-lg text-base font-normal text-para pb-6'>
            <a
              href='https://forms.gle/ZCbgRdaE5B1xTwvS6'
              className='text-blue-1 underline'
              target='_blank'
            >
              Contact our editorial or advertising team
            </a>
          </p>
          <p className='md:text-lg text-base font-semibold text-black pb-2'>
            Mailing Address:
          </p>
          <p className='md:text-lg text-base font-normal text-para pb-4'>
            2885 Sanford Ave SW #29062 Grandville, MI 49418
          </p>
        </div>
      </section>
    </>
  );
}
