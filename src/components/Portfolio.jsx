import React from "react";
import front from '../assets/projectes/front.png';
import back from '../assets/projectes/back.png';
import portfolioSergi from '../assets/projectes/portfolioSergi.png';
import marketplace from '../assets/projectes/marketplace.png';
import deathCode from '../assets/projectes/deathCode.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: front,
      link:"https://github.com/stranger-strings-team/front-codersabordo"
    },
    {
      id: 2,
      src:back,
      link:"https://github.com/stranger-strings-team/back-codersabordo"
    },
    {
      id: 3,
      src: portfolioSergi,
      link:"https://github.com/SergiAlsina/sergiportfolio"
    },
    {
      id: 4,
      src: marketplace,
      link:"https://github.com/SergiAlsina/marketplace"
    },
    {
      id: 5,
      src:deathCode,
      link:"https://github.com/Death-Code"
    },
    {
      id: 6,
      src: '',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Algunos de mis trabajos.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;