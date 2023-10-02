import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {Array(10)
        .fill("")
        .map((el,index) => (
    <div className="shimmer-card" >
      </div>

        ))}
    </div>
  );
};

export default Shimmer;
