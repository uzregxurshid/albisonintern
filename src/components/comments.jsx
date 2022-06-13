import Star from '../assets/images/comments/star.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper'
import { Pagination } from "swiper";
import React from 'react';

const Comments = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  
  return (

    
    <Swiper pagination={{
      clickable: true,
    }} modules={[Pagination]} className="mySwiper"
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
    >
      <SwiperSlide><div className="comment bg-mainbggreen">
        <div className="container max-w-[1061] px-5 mx-auto">
          <div className="comment__container flex flex-col items-center justify-center pt-[82px] pb-[92px]">
            <div className="comment__starts">
              <ul className='flex'>
                <li className='comment__item'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
              </ul>
            </div>
            <div className="comment__quota text-maintext w-[1006px] text-center mt-[45px] lg:w-[860px] w880:w-[760px] w850:w-[700px] w770:w-[600px] w640:w-[425px] w520:w-[375px] w375:w-auto">
              <q className='text-[28px] leading-[42px] font-normal text-center italic w930:text-[25px] w850:text-[23px] w520:text-xl'>
                Kate's courses are a game changer. She's thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.
              </q>
            </div>
            <div className='comment__author text-[18px] leading-[27px] mt-[37px] text-cardtexta'>
              James Brown, Influencer
            </div>
            <div className='comment__navigation mt-[50px] w640:mt-7'>
              <button className='cursor-pointer w-[18px] h-[18px] rounded-full bg-[#222222]' type='button'></button>
              <button className='cursor-pointer w-[18px] h-[18px] rounded-full bg-[#22222266] ml-2' type='button'></button>
            </div>
          </div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="comment bg-mainbggreen">
        <div className="container max-w-[1061] px-5 mx-auto">
          <div className="comment__container flex flex-col items-center justify-center pt-[82px] pb-[92px]">
            <div className="comment__starts">
              <ul className='flex'>
                <li className='comment__item'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
                <li className='comment__item ml-[5px]'>
                  <img src={Star} alt="star" />
                </li>
              </ul>
            </div>
            <div className="comment__quota text-maintext w-[1006px] text-center mt-[45px] lg:w-[860px] w880:w-[760px] w850:w-[700px] w770:w-[600px] w640:w-[425px] w520:w-[375px] w375:w-auto">
              <q className='text-[28px] leading-[42px] font-normal text-center italic w930:text-[25px] w850:text-[23px] w520:text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque molestiae molestias tempora quos suscipit libero, earum aperiam reprehenderit. Beatae, laboriosam. Harum, voluptas corporis? Delectus nostrum, suscipit sit cum expedita unde!
              </q>
            </div>
            <div className='comment__author text-[18px] leading-[27px] mt-[37px] text-cardtexta'>
              James Brown, Influencer
            </div>
            <div className='comment__navigation mt-[50px] w640:mt-7'>
              <button className='cursor-pointer w-[18px] h-[18px] rounded-full bg-[#222222]' type='button'></button>
              <button className='cursor-pointer w-[18px] h-[18px] rounded-full bg-[#22222266] ml-2' type='button'></button>
            </div>
          </div>
        </div>
      </div></SwiperSlide>
    </Swiper>

  )
}

export default Comments