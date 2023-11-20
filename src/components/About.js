import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
                Hi, I'm Christina Joice.
                <br className="hidden lg:inline-block" />Data Aspirant
              </h1>
              <p className="mb-8 leading-relaxed">
              Seasoned Senior Software Quality Engineer with more than 4 years of experience in the software industry. 
              Proven track record of ensuring the delivery of high-quality software products through comprehensive testing 
              and quality assurance methodologies. Skilled in test planning, test execution, defect management, and process improvement.
              Passionate about working with data and having proven record on EDA for multiple projects.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Projects
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-2/3 md:w-3/2 w-4/6">
              <img
                className="object-cover object-center rounded"
                alt="chris"
                src="./chris-avatar1.jpeg"
              />
            </div>
          </div>
        </section>
      );
}