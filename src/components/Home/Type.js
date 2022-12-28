import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UX Researcher",
          "Frontend Developer",
          "IOS Developer",
          "Qualitative Researcher",
          "Mixed Methods Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
