import React from "react";

import github from "../assets/imatges/github.png";
import visualstudio from "../assets/imatges/visualstudio.svg";
import figma from "../assets/imatges/figma.svg";
import postman from "../assets/imatges/postman.svg";
import notion from "../assets/imatges/notion.svg";
import slack from "../assets/imatges/slack.svg";
import trello from "../assets/imatges/trello.svg";
import swagger from "../assets/imatges/swagger.svg";


const Tools = () => {
  const tool = [
    
    {
      id: 1,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 2,
        src: visualstudio,
        title: "Visual Studio Code",
        style: "shadow-blue-400",
      },
      {
        id: 3,
        src: figma,
        title: "Figma",
        style: "shadow-purple-400",
      },
      {
        id: 4,
        src: postman,
        title: "Postman",
        style: "shadow-orange-400",
      },
      {
        id: 5,
        src: notion,
        title: "Notion",
        style: "shadow-gray-400",
      },
      {
        id: 6,
        src: slack,
        title: "Slack",
        style: "shadow-red-400",
      },
      {
        id: 7,
        src: trello,
        title: "Trello",
        style: "shadow-blue-400",
      },
      {
        id: 8,
        src: swagger,
        title: "Swagger",
        style: "shadow-green-400",
      },
  ];

  return (
    <div
      name="tools"
      className="bg-gradient-to-b from-black to-gray-800  w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Herramientas
          </p>
          <p className="py-6">Estas són algunas herramientas con las que he trabajado.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tool.map(({ id, src, title, style }) => (
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

export default Tools;