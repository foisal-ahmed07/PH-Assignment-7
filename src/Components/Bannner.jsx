import React from "react";
import bgimg from "../../src/assets/Frame 8 (2).png";
import bannerimg from "../../src/assets/banner-main.png";
const Bannner = ({ handleAddCoin }) => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div
        className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
        style={{
          backgroundImage: `url("${bgimg}")`,
        }}
      >
        <div className="space-y-8 text-center  p-8">
          <div className="flex justify-center mt-12">
            <img className="w-60 " src={bannerimg} alt="" />
          </div>
          <h1 className="text-3xl text-white font-bold ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-lg text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>

          <button
            onClick={handleAddCoin}
            className="btn bg-[#E7FE29] font-bold "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
