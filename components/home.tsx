import React from "react";
import Near from "../public/200iq-near.gif";
import Image from "next/image";

function Home() {
  return (
    <div className="w-1/2">
      <Image src={Near} alt="picture of near" />
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe in
        at architecto officiis blanditiis, non eos aliquid, sapiente
        voluptatibus impedit sequi soluta optio nemo ut quae repellat est
        consectetur.
      </div>
    </div>
  );
}

export default Home;
