"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules'
import banner1 from '../../Assets/Images/Gallery/1.png';
import banner2 from '../../Assets/Images/Gallery/2.png';
import banner3 from '../../Assets/Images/Gallery/3.png';
import banner4 from '../../Assets/Images/Gallery/4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
    effect='coverflow'
    autoplay = {true}
    centeredSlides = {true}
    grabCursor = {true}
    pagination = {{clickable : true}}
    loop = {true}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    }}
    // Navigation
      spaceBetween={10}
      slidesPerView={2}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className=' rounded-xl overflow-hidden'>
          <Image src={banner1} alt="" className='w-full aspect-[16/7] sm:aspect-[16/5.5] object-cover'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' rounded-xl overflow-hidden'>
          <Image src={banner2} alt="" className='w-full aspect-[16/7] sm:aspect-[16/5.5] object-cover'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' rounded-xl overflow-hidden'>
          <Image src={banner3} alt="" className='w-full aspect-[16/7] sm:aspect-[16/5.5] object-cover'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' rounded-xl overflow-hidden'>
          <Image src={banner4} alt="" className='w-full aspect-[16/7] sm:aspect-[16/5.5] object-cover'/>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};