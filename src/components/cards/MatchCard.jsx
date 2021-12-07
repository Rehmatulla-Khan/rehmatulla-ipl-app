import React, { FC } from "react";

const MatchCard = ({ name }) => {
	return (
		<div className="w-11/12 p-5 mx-auto bg-white border-2 rounded-2xl hover:bg-purple-50 ">
			<div className="flex justify-between p-1">
				<p className="px-2 font-bold bg-blue-100 border-2 p rounded-xl">1</p>
				<p className="font-bold ">CSK VS DC</p>
				<p className="font-bold ">2021-10-10</p>
			</div>
		</div>
	);
};

export default MatchCard;
