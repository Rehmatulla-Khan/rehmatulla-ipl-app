import React from "react";

const MatchCard = ({ matchNumber, name }) => {
  const matchInfoArr = name.split(" ");

  const date = matchInfoArr.splice(3, 1);

  const matchName = matchInfoArr.join(" ");

  return (
    <div className="w-11/12 p-5 mx-auto bg-white border-2 rounded-2xl hover:bg-purple-50 ">
      <div className="flex justify-between p-1">
        <p className="px-2 font-bold bg-blue-100 border-2 p rounded-xl">
          {matchNumber}
        </p>
        <p className="font-bold ">{matchName}</p>
        <p className="font-bold ">{date}</p>
      </div>
    </div>
  );
};

export default MatchCard;
