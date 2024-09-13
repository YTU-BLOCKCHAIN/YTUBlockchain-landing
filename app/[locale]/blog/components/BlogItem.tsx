import Image from "next/image";
import React from "react";
import Link from "next/link";

type BlogData = {
  title: string;
  description: string;
  category: string;
  image: any;
  blog_link: string;
};

const BlogItem = ({
  title,
  description,
  category,
  image,
  blog_link,
}: BlogData) => {
  return (
    <div
      className={`max-w-[380px] transition-all bg-gray-50 dark:bg-[#3F3F46] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-[#374151] transform hover:-translate-y-1 duration-200 flex flex-col justify-between`}
    >
      <Image
        src={image}
        alt={title}
        width={380}
        height={220}
        className="object-cover border-b border-gray-200 dark:border-gray-700"
      />

      <div className="absolute top-4 left-4 bg-gray-200 dark:bg-[#3F3F46] text-gray-900 dark:text-gray-100 px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
        {category.toUpperCase()}
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          href={blog_link}
          target="_blank"
          passHref
        >
          <p className="inline-flex items-center justify-self-end text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Read more{" "}
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org.2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
