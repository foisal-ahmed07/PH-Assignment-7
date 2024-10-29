/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";

const Selected = ({
  handleActiveSection,
  isActive,
  addedPlayer,
  handleRemovePlayer,
}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-xl">
          Selected Player({addedPlayer.length}/6)
        </h2>
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

      {addedPlayer.map((player) => (
        <div className="border rounded-xl p-3 mt-5 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img className="w-20 h-20 rounded-lg" src={player.image} alt="" />

            <div>
              <h2 className="font-bold text-lg">{player.name}</h2>
              <p>{player.battingType}</p>
            </div>
          </div>

          <button
            onClick={() => {
              handleRemovePlayer(player.playerId);
            }}
            className=" bg-transparent border-none text-red-500 pr-5"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}

      <button
        onClick={() => handleActiveSection("available")}
        className="btn bg-[#E7FE29] font-bold mt-5"
      >
        Add More Player
      </button>
    </div>
  );
};

export default Selected;
