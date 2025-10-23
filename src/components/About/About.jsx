import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Akshay Saini
          </h2>
          {/* Skills heading typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter
              words={[
                " Developer",
                " MERN Stack Developer",
                " Tech Enthusiast",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              cursorColor="#8245ec"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          {/* About me para */}
          <p className="text-justify text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed mb-10 mt-8">
            I'm a passionate MERN Stack Developer who loves turning ideas into
            scalable and user-friendly web applications. I enjoy working across
            the full stack — in MERN and other modern technologies. I'm always
            eager to learn new technologies and improve my skills to create even
            better web experiences.
          </p>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1Njqk0Aqi2nnlb-4Kxr2AgOrBALUalD2H/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt className="sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] lg:w-[32rem] lg:h-[32rem]" 
        tiltMaxAngleX={20} 
        tiltMaxAngleY={20}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.05}
        gyroscope={true}>
          <svg
            width="406"
            height="368"
            viewBox="0 0 406 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          >
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="#1F2667"
              stroke-opacity="0.9"
              stroke-width="10"
            />
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="url(#paint0_linear)"
              stroke-width="10"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="205.549"
                y1="20.0169"
                x2="204.338"
                y2="342.461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1595B6" />
                <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
