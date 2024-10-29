import React from "react";
import navimg from "../../src/assets/logo.png"
import coinimg from "../../src/assets/coin.png"

const Nav = ({ coin }) => {
  return (
    <div className="w-11/12 mx-auto mt-12 ">
      <div className=" md:flex md:justify-between items-center space-y-5 ">
       <div className="flex md:justify-normal justify-center">
       <img src={navimg} alt="" />
       </div>
        <div className="md:flex gap-6 items-center  space-y-5 md:space-y-0 font-semibold text-center">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
          <button className="btn bg-transparent border  font-bold">
            {coin} Coin
            <img className="w-6" src={coinimg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
