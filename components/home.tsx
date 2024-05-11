import React from "react";
import Near from "../public/200iq-near.gif";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-svh">
        <div className="flex w-[90%] justify-between items-center">
          <Image src={Near} alt="picture of near" width={500} height={500} className="rounded-full"/>
          <div className="w-1/2">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe
            in at architecto officiis blanditiis, non eos aliquid, sapiente
            voluptatibus impedit sequi soluta optio nemo ut quae repellat est
            consectetur.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
