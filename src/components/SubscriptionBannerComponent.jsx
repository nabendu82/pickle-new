import React, { useState, useEffect } from "react";

export default function SubscriptionBannerComponent({
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
    <form
      className='lg:mr-20 relative text-center'
      onSubmit={submitsub}
      id='subscribe'
    >
      <input
        className='w-full py-[26px] md:pr-40 md:pl-4 p-4 bg-white outline outline-1 rounded-md outline-ocolor  focus:outline-btn'
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
  );
}
