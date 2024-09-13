"use client";
import React from "react";
import BlogList from "./components/BlogList";

const page = () => {
  return (
    <div className="h-full w-full pb-44">
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">
          Latest Blogs From YTUBlockchain
        </h1>

        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Stay updated with the latest news and updates
        </p>
        <form
          action=""
          className="flex justify-between max-w-[540px] scale-75 sm:scale-100 mx-auto mt-10 border border-black dark:border-white "
        >
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="pl-4 outline-none w-full"
          />
          <button className="border-l-1 border-black dark:border-white py-4 px-4 sm:px-8 active:bg-gray-600  active:text-white">
            Subscribe
          </button>
        </form>
      </div>
      <BlogList />
    </div>
  );
};

export default page;
