import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-extrabold md:text-7xl text-[10vw] leading-none dark:bg-gradient-to-b from-foreground dark:to-zinc-400 bg-clip-text bg-zinc-800 text-transparent tracking-tighter text-center">
        Let the People Know About You.
      </h1>
      <p className="dark:text-zinc-200 leading-7 [&:not(:first-child)]:mt-6">
        People can ask anything about you, and you can provide them with the
        answers they need. Whether it&lsquo;s about your skills, experiences, or
        interests, let your story be heard and connect with others in meaningful
        ways.
      </p>
      <div className="mt-4 flex gap-2">
        <Button>Get Started</Button>
        <Button variant={"secondary"}>How to ask?</Button>
      </div>
    </div>
  );
};

export default Hero;
