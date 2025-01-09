import Hero from "@/components/hero";
import Sample from "@/components/sample";
import React from "react";

const Home = () => {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <section className="p-2">
        <Hero />
      </section>
      <h2 className="text-center mt-16 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Answer Questions
      </h2>
      <section className="p-2">
        <Sample />
      </section>
      <h2 className="text-center mt-16 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ask Questions
      </h2>
      <section className="p-2">
        <Sample />
      </section>
    </div>
  );
};

export default Home;
