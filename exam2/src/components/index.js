import React, { useState } from 'react';
import Car from './car';

function CarApp() {
  const [cars, setCars] = useState(Array(20).fill(null)); // initialize array with 20 null values
  const [totalAllocated, setTotalAllocated] = useState(0);
  const [emptySeats, setEmptySeats] = useState(20);

  const handleCarArrival = (index) => {
    const carNumber = prompt("Enter car number:");
    const time = prompt("Enter time (24 hours clock):");

    const newCars = [...cars];
    newCars[index] ={
          carNumber:carNumber,
          time:time
    };
    setCars(newCars);
    setTotalAllocated(totalAllocated + 1);
    setEmptySeats(emptySeats - 1);
  };

  const handleCarDeparture = (index) => {
    const duration = prompt("Enter duration (in hours):");
    let price = 0;

    if (duration <= 1) {
      price = 20;
    } else if (duration <= 4) {
      price = 40;
    } else if (duration <= 6) {
      price = 100;
    } else if (duration <= 8) {
      price = 200;
    }

    alert(`Payable Amount: ${price}`);

    const newCars = [...cars];
    newCars[index] = null;
    setCars(newCars);

    setTotalAllocated(totalAllocated - 1);
    setEmptySeats(emptySeats + 1);
  };

  return (
    <div>
      <h1>Parking Lot</h1>
      <table className='table table-striped-columns'>
        <tbody>
          {Array(4).fill(null).map((row, i) => (
            <tr key={i}>
              {Array(5).fill(null).map((col, j) => {
                const index = i * 5+j;
                const car = cars[index];
                return (
                  <td
                    key={j}
                    onClick={() => car ? handleCarDeparture(index) : handleCarArrival(index)}
                    style={{ backgroundColor: car ? "" : "white" }}
                  >
                    {car ? <Car carNumber={cars[index].carNumber} time={cars[index].time}/> :index+1}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Allocated: {totalAllocated} Empty: {emptySeats}</p>
    </div>
  );
}

export default CarApp;
