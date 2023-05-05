import React from "react";

const Car = (props) => {
  const handleClick = () => {
    if (!props.isOccupied) {
      props.onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        
        backgroundColor: props.isOccupied ? "" : "white",
        
        cursor: props.isOccupied ? "default" : "pointer"
      }}
    >
      {props.isOccupied ? props.carNumber:null}
    </div>
  );
};

export default Car;
