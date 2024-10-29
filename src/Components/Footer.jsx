import React from "react";
import footerimg from "../../src/assets/logo-footer.png"

const Footer = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <div className=" border-t-0 border p-3 rounded-2xl relative bottom-[-200px] z-50 bg-white">
          <div
            className="bg-cover bg-no-repeat rounded-3xl w-full h-full p-24 text-center space-y-6"
            style={{
              backgroundImage: `url(../../src/assets/bg-shadow.png)`,
            }}
          >
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex gap-5 items-center justify-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <button className="btn font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-12 ">
        <div className="w-11/12 mx-auto ">
          <div className="flex justify-center pt-44">
            <img src={footerimg} alt="" />
          </div>
          <div className="md:flex justify-between items-center text-center mt-5 space-y-5">
            {/* 1st col */}
            <div className="space-y-3">
              <h2 className="text-white text-xl font-bold">Abouy Us</h2>
              <p className="text-gray-500">
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </div>

            {/* 2nd col */}
            <div className="space-y-3 mt-5">
              <h2 className="text-white text-xl font-bold">Quick Links</h2>
              <ul className="text-gray-500 list-disc">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* 3rd col */}
            <div className="space-y-3 ">
              <h2 className="text-white text-xl font-bold">Subscribe</h2>
              <p className="text-gray-500">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>

              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered input-info rounded-r-none  w-full max-w-xs"
                />
                <button className="p-3 rounded-2xl rounded-l-none border-none font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

         <div className="mt-8">
         <hr />
         <p className="text-gray-500 text-center pt-5" >@2024 Your Company All Rights Reserved.</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
