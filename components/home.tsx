import React from "react";
import Near from "../public/200iq-near.gif";
import Image from "next/image";

function Home() {
  return (
    <div className="w-1/2">
      <Image src={Near} alt="picture of near" />
      <div></div>
    </div>
  );
}

export default Home;
