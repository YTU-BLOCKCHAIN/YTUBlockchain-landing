"use client";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <h2 className="text-3xl font-bold mb-4">Recent Tweets</h2>

      <div className="w-full max-w-md">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BlockchainYtu"
          options={{ height: 600, width: 400 }}
          theme="dark"
          placeholder={
            <>
              <div className="w-96 h-[400px] bg-white dark:bg-gray-800 rounded-t-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="ml-4">
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                </div>
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-600"></div>
                <div className="px-4 py-2 flex items-center">
                  <div className="h-4 w-10 bg-gray-300 dark:bg-gray-600 rounded mr-4"></div>
                  <div className="h-4 w-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              <div className="w-96 h-[200px] bg-white dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="ml-4">
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                  <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
                </div>
                <div className="w-full h-24 bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </>
          }
          userId="1234567890"
          ariaPolite="polite"
          noFooter
          noHeader
          noScrollbar
        />
      </div>
    </section>
  );
};

export default TwitterFeed;
