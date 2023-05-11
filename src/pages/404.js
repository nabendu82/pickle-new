import HeadComponent from "@/components/HeadComponent";
import subscriptionHOC from "@/components/SubscriptionHOC";
import SubscriptionPage from "@/components/SubscriptionPage";
import Image from "next/image";
import React from "react";
import notFound from "./../resource/image/not-found.png";

export default function NotFound() {
  const SubscriptionComponent = subscriptionHOC(SubscriptionPage);
  return (
    <>
      <HeadComponent />
      <div className='container text-center mx-auto lg:py-16 md:py-14 lg:px-0 px-3'>
        <Image src={notFound} className='lg:w-[35%] md:w-3/5 mx-auto' />
        <h3 className='text-blue text-center text-45'>404</h3>
        <h2 className='text-center text-4xl my-3'>
          Well, this isn’t quite what we planned.
        </h2>
        <h4 className='lg:w-1/2 text-center mx-auto text-22 my-4 text-para '>
          Oops, something went wrong, but don’t worry, it’s not your fault… it’s
          probably a glitch in the matrix
        </h4>
        <div className='lg:w-1/2 mx-auto  my-4'>
          <SubscriptionComponent />
        </div>
      </div>
    </>
  );
}
