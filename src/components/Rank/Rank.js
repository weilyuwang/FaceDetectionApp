import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f4">{`Congrats ${name}! You have detected ${entries} face photos.`}</div>
    </div>
  );
};

export default Rank;
