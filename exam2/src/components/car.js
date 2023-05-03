import React from "react";

const Car = ({ carNumber, time, isOccupied, index,onClick }) => {
  const handleClick = () => {
    if (!isOccupied) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        
        backgroundColor: isOccupied ? "green" : "white",
        border: "1px solid black",
        display: "flex",
        color:"gray",
        justifyContent: "center",
        alignItems: "center",
        cursor: isOccupied ? "default" : "pointer"
      }}
    >
      {isOccupied ? `${carNumber} - ${time}` :""}
    </div>
  );
};

export default Car;
