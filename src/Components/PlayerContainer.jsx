/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

const PlayerContainer = ({
  players,
  handleActiveSection,
  isActive,
  handleAddedPlayer,
  addedPlayer,
}) => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold ">Available Players</h2>
        <div className="border rounded-full">
          <button
            onClick={() => handleActiveSection("available")}
            className={`font-semibold border-none px-5 py-2 rounded-xl ${
              isActive.available ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveSection("selected")}
            className={`font-semibold border-none px-5 py-2 rounded-xl ${
              isActive.available ? "" : "bg-[#E7FE29]"
            }`}
          >
            Selected ({addedPlayer.length})
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {players.map((player) => (
          <div className="border p-3 rounded-xl space-y-6">
            <img
              className="w-full h-60  rounded-lg"
              src={player.image}
              alt=""
            />
            <h2 className="text-xl font-bold flex gap-7 items-center">
              <i className="fa-solid fa-user"></i>
              {player.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="flex gap-3 items-center">
                {" "}
                <i className="fa-solid fa-flag"></i> {player.country}
              </p>
              <p className="border rounded-xl px-5 py-2 font-semibold text-gray-500">
                {player.role}
              </p>
            </div>
            <hr />
            <h2 className="text-lg font-bold">Rating</h2>
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold "> {player.battingType}</h4>
              <h4 className="text-lg font-semibold "> {player.bowlingType}</h4>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold ">
                <span className="font-bold">Price:$</span> {player.biddingPrice}
              </h4>
              <button
                onClick={() => {
                  handleAddedPlayer(player);
                }}
                className="btn bg-transparent hover:bg-teal-600"
              >
                Choose Player
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerContainer;
