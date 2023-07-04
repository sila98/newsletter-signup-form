/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import mobile from "./images/illustration-sign-up-mobile.svg";
import desktop from "./images/illustration-sign-up-desktop.svg";
import checkmark from "./images/icon-list.svg";
function App() {
  return (
    <>
      <div className="bg-slate-900 md:flex md:items-center md:justify-center md:h-screen l:h-screen ">
        <section className="bg-white md:w-[700px] md:flex md:flex-row-reverse  rounded-2xl  ">
          <div className="md:hidden">
            <img src={mobile} width={768} height={250} alt="mobile" />
          </div>

          <div className="hidden lg:block xl:flex m-5 ">
            <img src={desktop} width={468} height={250} alt="desktop" />
          </div>

          <div className="m-5 mb-8 ">
            <h1 className="mb-6 font-bold text-4xl mt-5">Stay updated!</h1>
            <p className="mb-4">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul className="checks flex flex-col list-none">
              <li className=" flex mb-3 gap-4">
                <img src={checkmark} alt="Checkmark" />
                Product discovery and building what matters
              </li>
              <li className="flex mb-3 gap-4">
                <img src={checkmark} alt="Checkmark" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex mb-3 gap-4">
                <img src={checkmark} alt="Checkmark" />
                And much more!
              </li>
            </ul>

            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="font-bold mb-2">
                Email Address
              </label>
              <input
                className="p-3 rounded border-2"
                type="email"
                name="email"
                placeholder="email@company.com"
              />
              <button className="p-3 mt-4 w-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 rounded bg-slate-800 text-white">
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
