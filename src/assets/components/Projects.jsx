import React, { useRef, useState } from 'react';
import projectsData from '../json/projectsData.json';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Projects() {
  const swiperRef = useRef(null);
  const [dataProject, setDataProject] = useState(projectsData);

  return (
    <section className="px-1 mt-6 max-w-7xl">
      <div className="">
        <div className='flex flex-row-reverse items-center justify-between flex-wrap gap-4'>
          <div className="flex text-sm *:md:text-base items-center mb-3 space-x-2 *:cursor-pointer">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white dark:bg-slate-900 dark:text-white px-6 py-2 rounded-full"
            >
              Prev
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Next
            </button>
          </div>
          <h2 className='font-medium text-2xl tracking-tight pt-0 dark:text-blue-500 p-3'>Part of my projects</h2>
        </div>
        <Swiper
          className="h-fit"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 2.5, // تغییر از 4 به 3 برای نمایش بهتر
              spaceBetween: 10
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataProject && dataProject.map((project) => (
            <SwiperSlide key={project.name}>
              <div className=' max-w-[25rem] p-3 rounded-md bg-white dark:bg-slate-900 dark:text-white h-[27rem] flex flex-col justify-between'>
                <div className='w-full h-[13rem]'>
                  <img src={project.image} className='w-full rounded-md shadow-md h-full object-cover' alt="cover" />
                </div>
                <h2 className='font-bold text-2xl p-2 tracking-tight'>{project.name}</h2>
                <p className='font-medium text-left px-2'>{project.aboutproject}</p>
                <div className='flex items-center gap-3 mt-3'>
                  <a href={project.linkonline} className='px-6 py-2 bg-blue-500 text-white rounded-md ' target='_blank'>Link Demo</a>
                  <a href={project.linkgithub} className='px-6 py-2 bg-black text-white rounded-md ' target='_blank'>Link Repo</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;