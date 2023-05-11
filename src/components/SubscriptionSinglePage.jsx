import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SubscriptionSinglePage({
  submitSubscription,
  successStatus,
}) {
  const [email, setEmail] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const submitsub = (e) => {
    e.preventDefault();
    if (email) {
      setDisableBtn(true);
      submitSubscription(email, () => router.push("/thank-you"));
    }
  };
  useEffect(() => {
    if (successStatus) {
      setEmail("");
      setDisableBtn(false);
    }
  }, [successStatus]);
  return (
    <div className='bg-b-bg lg:py-20 md:py-16 px-3 py-12' id='subscribe'>
      <div className='lg:flex lg:items-center  max-w-4xl mx-auto'>
        <div className='lg:w-[65%] font-inter banner-1'>
          {/* <h2 className='lg:text-5xl lg:text-left md:pb-6 text-4xl leading-2 font-medium text-b-black pb-3 text-center'>
            Get smarter about <span className='font-bold'>crypto</span>
          </h2>*/}
          <p className='md:text-lg lg:text-left text-base font-normal text-center text-b-para pb-8'>
            Join subscribers and get our 3 min daily newsletter on what matters
            in pickleball.
          </p>
          <form className='relative text-center' onSubmit={submitsub}>
            <input
              className='w-full py-[26px] md:pr-40 md:pl-4 p-4 bg-[#f1f1ef] outline outline-1 rounded-[20px] outline-ocolor  focus:outline-btn'
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
            />
            <button
              disable={disableBtn}
              type='submit'
              className='md:absolute md:top-[7px] md:mt-0 md:right-2 md:w-min mt-5 md:px-6 w-full py-4 text-lg font-bold text-white bg-btn hover:duration-300 rounded-[10px] border border-btn hover:bg-transparent hover:text-btn '
            >
              {disableBtn ? "Loading" : "Subscribe"}
            </button>
          </form>
        </div>
        <div className='lg:w-[35%] lg:pt-0 md:pt-16 lg:pl-5 pt-10'>
          <Image
            className='lg:w-full md:w-3/5 md:mx-auto'
            src='/group_34116.png' alt='group'
          />
        </div>
      </div>
    </div>
  );
}
