import React from "react";

const LiveScore = () => {
  return (
    <section className="flex flex-col justify-center p-4 text-lg md:text-2xl">
      <p className="mt-2 font-bold tracking-wider text-center">CSK VS MI</p>
      <div className="flex flex-col items-center justify-around w-10/12 mx-auto my-4 bg-gray-200 border-2 shadow-2xl rounded-3xl md:flex-row">
        <div className="px-8 py-4 pb-8 my-4 border-b border-gray-400 md:border-b-0">
          <p>Chennai Super Kings</p>
          <p className="my-4 font-bold">Score: 221/2</p>
          <p>RG Sharma 122(54)*</p>
          <p>KL Rahul 76(34)</p>
        </div>

        <div className="px-8 py-2 my-4 ">
          <p>Mumbai Indians</p>
          <p className="my-4 font-bold">18.4 overs</p>
          <p>Kulkarni 22/1 </p>
          <p>Kulkarni 3.4 overs </p>
        </div>
      </div>
    </section>
  );
};

export default LiveScore;
