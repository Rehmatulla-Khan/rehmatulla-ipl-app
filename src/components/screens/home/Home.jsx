import React from "react";
import MatchCard from "../../cards/MatchCard";

const Home = () => {
  return (
    <>
      <div className="h-20 mt-3 text-4xl text-center">Logo</div>
      <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-screen-xl md:max-w-screen-md">
        {[...Array(20)].map((item, i) => (
          <MatchCard key={i} name={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
