import { useEffect, useState } from "react";
import { blog_data } from "../Assets/assets";
import BlogItem from "./BlogItem";
import { motion } from "framer-motion";
const BlogList = () => {
  const [category, setCategory] = useState("All");
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsSmallDevice(window.innerWidth < 700);
    };
    window.addEventListener("resize", updateMedia);
    updateMedia();
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const categories = [
    "All",
    ...new Set(blog_data.map((item) => item.category)),
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-10 mx-12 xl:mx-24">
        {isSmallDevice ? (
          <div className="flex justify-center">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-60 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#3F3F46] text-gray-700 dark:text-gray-100"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`relative text-gray-700 dark:text-gray-100 font-semibold py-2 px-6 transition-colors duration-300 ease-in-out `}
              >
                {category === cat && (
                  <motion.div
                    layoutId="active"
                    className="bg-gray-300 dark:bg-[#3F3F46] absolute inset-0"
                    style={{ borderRadius: "7px" }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-2 gap-y-10 mb-16 mx-12 xl:mx-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blog_data
            .filter((item) =>
              category === "All" ? true : item.category === category
            )
            .map((item, index) => {
              return (
                <BlogItem
                  blog_link={item.blog_link}
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
