import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
function index() {
   
    
  return (
    <div className="w-full z-0 ">
      <div className="w-full md:h-96  lg:h-96 object-cover">
        <img
          src="/images/lastImage.jpg"
          className="w-full hover:brightness-75 z-0 transition duration-300 md:h-96 lg:h-96 object-cover"
          alt=""
        />
      </div>
      <div className="w-full   p-2  px-5 grid grid-cols-1 md:grid-cols-2 md:place-items-center  mx-auto shadow-xl bg-primary-color ">
        <div className="grid pt-10 md:pt-0  md:place-items-center">
          <h1 className="text-4xl pl-3 md:pl0 grid place-items-start w-full pb-10 text-white font-bold">
            MAKE YOUR RESERVATION
          </h1>
          <p className=" max-w-2xl w-full pt-3 px-3 md:px-0 text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            commodi facere blanditiis! Enim asperiores quidem esse maiores!
            Iste, autem expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima ipsam sapiente corporis dignissimos. Itaque omnis doloribus voluptate autem fugiat illum incidunt. Repudiandae fugiat itaque vel saepe consequatur in. Id!
          </p>
        </div>
        <div className=" md:grid md:grid-cols-2 px-3 md:px-1 w-full mt-10 mb-20 gap-4">
          <div className="flex flex-col w-full space-y-2 text-white">
            <label htmlFor="name">Name</label>
            <input
              className="px-2 text-black py-2 outline-none border-none text-sm"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            {" "}
            <label htmlFor="name">Email</label>
            <input
              className="px-2 text-black py-2 outline-none border-none text-sm"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            {" "}
            <label htmlFor="name">Phone</label>
            <input
              className="px-2 text-black py-2 outline-none border-none text-sm"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            {" "}
            <label htmlFor="name">Rooms</label>
            <input
              className="px-2 text-black py-2 outline-none border-none text-sm"
              type="number"
              placeholder="Rooms"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            {" "}
            <label htmlFor="name">Select Date From</label>
            <input
              className="px-2 w-full text-black py-2 outline-none border-none text-sm"
           
              type="date"
              placeholder="Select Date"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            {" "}
            <label htmlFor="name">Select Date To</label>
            <input
              className="px-2 w-full text-black py-2 outline-none border-none text-sm"
              type="date"
              placeholder="Rooms"
            />
          </div>
          <div className="space-y-2 mt-5 w-full text-white grid col-span-2">
            <button className=" border px-2 py-2 font-semibold">Book Now</button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default index;
