import HeadComponent from "@/components/HeadComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Terms() {
  return (
    <>
      <HeadComponent />
      <section>
        <div className='max-w-4xl mx-auto lg:py-16 md:py-14 lg:px-2 md:px-20 py-10 px-4'>
          <h1 className='lg:text-[64px] md:text-5xl text-4xl leading-2 font-medium text-black pb-2'>
            Terms of Use
          </h1>
          <p className='text-base font-normal text-para'>
            Writer Picklewho&#160;/&#160;January 1, 2023
          </p>
          <p className='text-base font-normal text-para'></p>
          <div className='lg:pt-10 pt-7'>
            <h2 className='md:text-[32px] text-3xl font-medium text-black leading-2 capitalize pb-6'>
              Picklewho Terms of Use
            </h2>
            <ul className='md:pl-8 pl-8 pb-6'>
              <li className='text-base font-normal text-para pb-3 list-disc break-words'>
                We do not endorse or recommend any specific products or
                services, and you should seek professional advice before making
                any financial decisions. You are solely responsible for your own
                financial decisions and actions, and we will not be held liable
                for any losses or damages that may result from your reliance on
                the information provided on our website or in our newsletters.
              </li>
              <li className='text-base font-normal text-para pb-3 list-disc'>
                Disclaimer of Liability for Libel: We strive to provide accurate
                and up-to-date information in our stories, but we do not
                guarantee the accuracy or completeness of the information
                provided. We will not be held liable for any errors or
                omissions, or for any actions that may be taken based on the
                information provided on our website or in our newsletters.
              </li>
              <li className='text-base font-normal text-para pb-3 list-disc'>
                Intellectual Property: All content and materials on our website
                and in our newsletters, including text, graphics, and logos, are
                the property of Picklewho and are protected by copyright and
                trademark laws. You are not permitted to use any content or
                materials on our website or in our newsletters for any
                commercial purposes without the express written consent of
                Picklewho.
              </li>
              <li className='text-base font-normal text-para pb-3 list-disc'>
                Termination of Use: We reserve the right to terminate or suspend
                your access to our website and newsletters at any time, without
                notice, for any reason, including but not limited to your
                violation of these terms of use.
              </li>
              <li className='text-base font-normal text-para pb-3 list-disc'>
                Governing Law: These terms of use and your use of our website
                and newsletters are governed by the laws of Wisconsin, USA and
                any disputes will be resolved in the courts of Wisconsin, USA.
              </li>
              <li className='text-base font-normal text-para pb-3 list-disc'>
                By accessing our website and newsletters, you agree to be bound
                by these terms of use. If you do not agree to these terms of
                use, you are not authorized to use our website or newsletters.
              </li>
            </ul>
            <h2 className='md:text-[32px] text-3xl font-medium text-black leading-2 capitalize pb-3'>
              Contributors
            </h2>
            <Image
              className='lg:w-1/5 w-1/2 md:pb-8 pb-4'
              src='/group_34116.png' alt='group'
            />
            <p className='text-2xl font-medium text-b-black pb-2'>
              <Link href='/author/PickleWho'>Picklewho</Link> Writer
            </p>
            <p className='text-base font-normal text-para'>
              This dashing dill expert is not just your average pickle-baller.
              He's a tri-athlete, a former classmate of Ben Johns, and a
              pickleball enthusiast who loves nothing more than delivering the
              freshest news and insights straight to your inbox.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
