"use client"
import { useState } from "react";

const HomePage = () => {
  // console.log("Hello world next.js")

  const [counter, setCounter] =useState(0)
    
  const  handelIncrease = ()=>{
      setCounter(counter +1)
  }

  const  handelDecrease = ()=>{
    setCounter(counter -1)
}

  return (
    <div>
         <h3 className='text-7xl text-center text-purple-600 my-20'>Welcome To next .js Home page Hello world next js</h3>

        <div className="flex">
        <button className="btn btn-active btn-accent" onClick={handelIncrease}>Increase</button>
       <h3>{counter}</h3>
       <button className="btn btn-active btn-accent" onClick={handelDecrease}>Decrease</button>
        </div>

    </div>
  );
};

export default HomePage;