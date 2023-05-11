import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-[#6BC6E40D] font-inter'>
      <div className='container mx-auto text-center lg:pt-16 lg:px-0 md:pt-14 pt-8 px-4'>
        <Link href='/'>
          <h2 className='lg:text-[40px] lg:text-left lg:px-10 text-35 font-bold text-black'>
            PickleWho
          </h2>
        </Link>
        <div className='lg:pb-10 lg:flex lg:text-left lg:px-10 py-8'>
          <div className='lg:w-1/2 md:flex md:mb-5'>
            <div className='md:w-1/2 pb-6'>
              {/* <h6 className='text-22 font-bold text-black pb-4'>
                News & Stories
              </h6> */}
              <ul className='space-y-3'>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <Link href='/contact-us'>Contact Us</Link>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <Link href='/privacy'>Privacy Policy</Link>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <Link href='/terms'>Terms of Use</Link>
                </li>
              </ul>
            </div>
            {/* <div className='md:w-1/2 pb-6'>
              <h6 className='text-22 font-bold text-black pb-4'>The Pros</h6>
              <ul className='space-y-3'>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 1</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 2</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 3</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 4</a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <div className='lg:w-1/2 md:flex'>
            <div className='md:w-1/2 pb-6'>
              <h6 className='text-22 font-bold text-black pb-4'>
                Pickleball 101
              </h6>
              <ul className='space-y-3'>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 5</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 6</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 7</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Page 8</a>
                </li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <h6 className='text-22 font-bold text-black pb-4'>About Us</h6>
              <ul className='space-y-3'>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Contact Us</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Careers</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Advertise With Us</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li className='text-lg font-normal text-flink hover:text-btn'>
                  <a href='#'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr className='md:my-5 my-3 bg-[#E0E5EF] text-center' />
        <p className='md:pb-5 text-base font-normal text-flink pb-3'>
          © 2023 Picklewho.com. All rights reserved
        </p>
      </div>
    </footer>
  );
}
