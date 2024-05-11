import React from "react";
import SmallNear from "../public/SmallNear.jpg";
import Image from "next/image";

function Contact() {
  return (
    <>
      <footer className="flex flex-col">
        <div className="flex flex-col h-4/5 items-center mt-24 w-[67%]">
          {/*Let's work together part */}
          <div className="flex h-2/5 pb-[73px]">
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
          <div>
            <div className="block w-full h-px bg-white mb-20"></div>
          </div>
          {/*2 oval contact */}
        </div>
        <div className="flex w-[90%] h-1/5">4 social</div>{" "}
        {/* 4 social media of list */}
      </footer>
    </>
  );
}

export default Contact;
