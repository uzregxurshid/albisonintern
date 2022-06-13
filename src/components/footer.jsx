import logo from '../assets/images/header/logo.svg';
import Facebook from '../assets/images/footer/facebook.svg';
import Twitter from '../assets/images/footer/twitter.svg';
import Instagram from '../assets/images/footer/instagram.svg';
import Youtube from '../assets/images/footer/youtube.svg';
import Tiktok from '../assets/images/footer/tiktok.svg';
import Aos from 'aos';
import 'aos/dist/aos';
import { useEffect } from 'react';

const Footer = () => {
 
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
    Aos.refresh();
  } , []);
  return (
    <div className="footer bg-maintext">
      <div className="container max-w-[1404px] px-4 mx-auto">
        <div className="footer__container flex flex-col pt-[144px] pb-[144px]"  data-aos="fade-up">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className='flex mt-20 flex-wrap justify-center w520:flex-col'>
            <li className='flex flex-col md:w-6/12'>
              <div className='text-base leading-[21px] uppercase tracking-[1px] text-maintextwhite not-italic bold whitespace-nowrap'>learning Platform</div>
              <ul className='footer__sublist flex flex-col'>
              <li className='mt-[23px] w520:mt-5'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
               </a>
               </li>  
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Courses
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Free Workshops
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Blog
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                About
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Contact
               </a>
               </li>
              </ul>
            </li>
            <li className='flex flex-col ml-[160px] lg:ml-[100px] w850:ml-[60px] md:w-6/12 w770:ml-0 w520:mt-10'>
              <div className='text-base leading-[21px] uppercase tracking-[1px] text-maintextwhite not-italic bold'>Template</div>
              <ul className='footer__sublist flex flex-col'>
              <li className='mt-[23px]  w520:mt-5'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
               </a>
               </li>  
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
               Instructions
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
               Style Guide
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Licenses
               </a>
               </li>
              <li className='mt-4'>
               <a className='text-[18px] leading-[27px] font-normal text-maintextwhite not-italic' href="/">
                Changelog
               </a>
               </li>
              </ul>
            </li>
            <li className='flex flex-col ml-[241px] lg:ml-[200px] w850:ml-[120px] w770:ml-0 w770:mt-[82px] w520:ml-0  w520:mt-6'> 
              <div className='text-base leading-[21px] uppercase tracking-[1px] text-maintextwhite not-italic bold'>Follow skillz</div>
              <ul className='flex mt-[23px]'>
              <li className='ml-0'>
                  <a href="https://www.tiktok.com/">
                    <img src={Tiktok} alt="tiktok" />
                  </a>
                </li>
                <li className='ml-4'>
                  <a href="https://www.facebook.com/">
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li className='ml-4'>
                  <a href="https://www.twitter.com/">
                    <img src={Twitter} alt="twitter" />
                  </a>
                </li>
                <li className='ml-4'>
                  <a href="https://www.instagram.com/">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </li>
                <li className='ml-4'>
                  <a href="https://www.youtube.com/">
                    <img src={Youtube} alt="youtube" />
                  </a>
                </li>
             
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Footer