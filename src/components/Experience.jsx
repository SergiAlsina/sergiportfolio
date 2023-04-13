import React from "react";

import html from "../assets/imatges/html.png";
import css from "../assets/imatges/css.png";
import javascript from "../assets/imatges/javascript.png";
import reactImage from "../assets/imatges/react.png";
import nestjs from "../assets/imatges/nestjs.svg";
import typescript from "../assets/imatges/typescript.svg";
import tailwind from "../assets/imatges/tailwind.png";
import node from "../assets/imatges/node.png";
import mongodb from "../assets/imatges/mongodb.svg";
import mysql from "../assets/imatges/mysql.svg";
import jest from "../assets/imatges/jest.svg";
import styled from "../assets/projectes/styled.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: styled,
      title: "Styled Components",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: nestjs,
      title: "NestJS",
      style: "shadow-red-400",
    },
    {
        id: 9,
        src: node,
        title: "Node",
        style: "shadow-green-400",
      },
      {
        id: 10,
        src: mongodb,
        title: "MondoDB",
        style: "shadow-green-400",
      },
      {
        id: 11,
        src: mysql,
        title: "MySQL",
        style: "shadow-orange-400",
      },
      {
        id: 12,
        src: jest,
        title: "Jest",
        style: "shadow-red-400",
      },
      
  ];

  return (
    <div
      name="experiencia"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiencia
          </p>
          <p className="py-6">Algunas tecnologias con las que he trabajado.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;