import React, { useState } from "react";
import Education from "./eachInfo/education";

function Info() {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[90%]">
          <ul className="[&>li]:py-24 [&_a]:text-6xl [&>div]:bg-primary [&>div]:text-secondary-foreground">
            <div className=" w-full h-px "></div>
            <li
              onMouseEnter={() => setIsTrue(true)}
              onMouseLeave={() => setIsTrue(false)}
            >
              <a>Education</a>
            </li>
            {isTrue && (
              <div className="">
                <Education />
              </div>
            )}
            <div className=" w-full h-px  "></div>
            <li>
              <a>Skills</a>
            </li>
            <div className=" w-full h-px "></div>
            <li>
              <a>Languages</a>
            </li>
            <div className=" w-full h-px  "></div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Info;
