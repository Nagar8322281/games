import { use, useState } from "react";
import Mole from "./Mole";

const Game = () => {
  const[score,setScore]= useState(0)
  function win() {
    if (score == 10) {
      
    }
  }
  return (
  <div className='flex flex-col items-center gap-5'>
    <h2 className="score">{score}</h2>
    <div className='grid grid-cols-3 gap-5'>
      {[...Array(9)].map((_) => (
     <Mole props={setScore} />
      ))}
    </div>
  </div>
  );
};

export default Game;
