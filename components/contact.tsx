import React from "react";
import SmallNear from "../public/SmallNear.jpg";
import Image from "next/image";

function Contact() {
  return (
    <>
      <footer className="flex flex-col w-full h-full pt-[86px]">
        <div className="flex flex-col w-full h-full px-[246px]">
          {/*Let's work together part */}
          <div className="flex pb-[73px] w-full h-full">
            <h2 className="flex flex-col [&>span]:text-[84px]">
              <span className="flex items-center">
                <Image
                  src={SmallNear}
                  alt="SmallNear"
                  className="rounded-full h-20 w-20 mr-8"
                />
                Let's work
              </span>
              <span className="mt-[-25px]">together</span>
            </h2>
          </div>
          {/*One line that look like Hr*/}
          <div className="w-[1140px] flex pb-[69px]">
            <div className="w-[90%] h-px bg-gray-600"></div>
          </div>
          {/*2 oval contact */}
          <div className="flex flex-row [&>div]:mr-2.5">
            <div className="rounded-full border border-gray-600 px-8 py-6 text-lg hover:bg-blue-700">
              <a href="#">dolprat@gmail.com</a>
            </div>
            <div className="rounded-full border border-gray-600 px-8 py-6 text-lg hover:bg-blue-700">
              <a href="#">+66935830276</a>
            </div>
          </div>
        </div>

        {/* 4 social media of list */}
        <div className="flex justify-between w-full h-full px-12 pt-20 pb-9">
          <div className="flex">
            <div className="block pr-[46px]">
              <p className="uppercase text-[11px] text-gray-300 mb-[17px]">
                version
              </p>
              <p>2024 c Edition</p>
            </div>
            <div className="block">
              <p className="uppercase text-[11px] text-gray-300 mb-[17px]">
                Local Time
              </p>
              <p>11:53 BE GMT+7</p>
            </div>
          </div>
          <div className="block">
            <p className="uppercase text-[11px] text-gray-300 mb-[17px] ml-[13px]">
              socials
            </p>
            <ul className="flex [&>li]:mx-[13px]">
              <li className="hover:underline">
                <a>GitHub</a>
              </li>
              <li>
                <a>Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
