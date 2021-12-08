import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from "../../../redux/actions/getMatches.action";
import MatchCard from "../../cards/MatchCard";

const Home = () => {
  const { matchName } = useSelector((state) => state.getMatches.allMatches);

  console.log(matchName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <>
      <div className="h-20 mt-3 text-4xl text-center">Logo</div>
      <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-screen-xl md:max-w-screen-md">
        {matchName?.map((item, i) => (
          <MatchCard key={i} matchNumber={i + 1} name={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
