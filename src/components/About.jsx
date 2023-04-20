import React from "react";

const About = () => {
  return (
    <div
      name="sobre mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mi.
          </p>
        </div>

        <p className="text-xl mt-20">
        Como Desarrollador Web Full Stack, tengo conocimientos en el desarrollo de aplicaciones web. Me siento cómodo trabajando tanto en el front-end como en el back-end, y tengo habilidades en una variedad de lenguajes de programación, incluyendo HTML5, CSS3, JavaScript, Typescript, ReactJS, Node.js y Nest.
        <br />
Considero ser capaz de trabajar en todos los aspectos del desarrollo web, desde la planificación y el diseño hasta la implementación y el mantenimiento. Cuento con conocimientos en bases de datos, servidores web y de aplicaciones, y entendimiento de herramientas de control de versiones y de integración continua.
        <br />
Me enorgullezco de ser un buen colaborador y trabajar bien en equipo. También considero tener una comunicación asertiva a la hora de relacionarme con mis compañer@s, como también saber adaptarme a diferentes situaciones.
        <br />
Como Desarrollador Web Full Stack Junior, estoy emocionado de continuar aprendiendo y creciendo en la industria de la tecnología, mientras continúo desarrollando mi habilidad y experiencia.
        </p>        
      </div>
    </div>
  );
};

export default About;