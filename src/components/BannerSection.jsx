import React from "react";
import subscriptionHOC from "@/components/SubscriptionHOC";
import SubscriptionBannerComponent from "@/components/SubscriptionBannerComponent";
import Image from "next/image";

export default function BannerSection() {
  const BannerSubscription = subscriptionHOC(SubscriptionBannerComponent);
  return (
    <section id='banner' className='bg-blue'>
      <div className='container mx-auto lg:pt-0 lg:px-0 lg:pb-12 md:py-14 md:px-14 px-3 py-12 lg:flex'>
        <div className='lg:w-1/2 lg:pt-36 font-inter'>
          <h1 className='lg:text-74 lg:text-left lg:pb-8 md:text-6xl md:pb-6 text-45 leading-2 font-normal text-black pb-3 text-center'>
            Get <span className='font-bold'>smarter</span> about{" "}
            <span className='font-bold'>pickleball</span>
          </h1>
          <p className='lg:pb-12 md:text-lg lg:text-left lg:mr-20 text-base font-normal text-center text-para pb-8'>
            Join subscribers and get our 3 min daily newsletter on what matters
            in pickleball.
          </p>
          <BannerSubscription />
        </div>
        <div className='lg:w-1/2 pt-2'>
          <Image src='/group_34116.png' alt='group' width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
