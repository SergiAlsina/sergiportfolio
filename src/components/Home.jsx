import React from 'react';
import fotosergi1 from '../assets/portfolio/fotosergi1.png'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
  <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda aliquam, animi odio facilis ut iure. Reprehenderit, labore explicabo aliquam nam ex quia eos! In deleniti odit ducimus ad perspiciatis.
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={fotosergi1} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
  </div>
  );
}

export default Home