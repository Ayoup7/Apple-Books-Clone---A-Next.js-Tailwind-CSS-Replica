import React from "react";
import AutoSlider from "./AutoSlider";
const title = (
  <>
    A library you’ll want <br /> to get lost in.
  </>
);

const description = (
  <>
    Browse our global catalog featuring millions of bestsellers, new releases,
    <br /> and classics — with new audiobooks and ebooks added every week.
  </>
);

const bestselling = [
  {
    src: "/assets/images/book_01.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    src: "/assets/images/book_02.jpg",
    title: "Conviction",
    author: "Denise Mina",
  },
  {
    src: "/assets/images/book_03.jpg",
    title: "Hillbilly Elegy",
    author: "Sarah J.Maas",
  },
  {
    src: "/assets/images/book_04.jpg",
    title: "Harry Poter",
    author: "Liz Moore",
  },
  {
    src: "/assets/images/book_05.jpg",
    title: "Irom Flame",
    author: "Tessa Bailey",
  },
  {
    src: "/assets/images/book_06.jpg",
    title: "Irom Flame",
    author: "Tessa Bailey",
  },
  {
    src: "/assets/images/book_07.jpg",
    title: "Irom Flame",
    author: "Tessa Bailey",
  },
];

const trending = [
  {
    src: "/assets/images/book_08.jpg",
    title: "Harry Poter",
    author: "Liz Moore",
  },
  {
    src: "/assets/images/book_09.jpg",
    title: "Conviction",
    author: "Denise Mina",
  },
  {
    src: "/assets/images/book_10.jpg",
    title: "Hillbilly Elegy",
    author: "Sarah J.Maas",
  },
  {
    src: "/assets/images/book_11.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    src: "/assets/images/book_12.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    src: "/assets/images/book_13.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    src: "/assets/images/book_14.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
];

const Filter = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="flex justify-center">
        <ul className="flex flex-col sm:flex-row justify-center items-center cursor-pointer gap-5 sm:px-4 sm:py-3 bg-gray-200 rounded-xl sm:rounded-full">
          <li className=" bg-gray-900 rounded-full py-2 px-4 mt-2 sm:mt-0 text-white">
            Bestselling Audiobooks
          </li>
          <li className=" hover:bg-gray-900 rounded-full py-2 px-4  hover:text-white">
            New - trending Ebooks
          </li>
          <li className=" hover:bg-gray-900 rounded-full py-2 px-4 mb-2 mx-1 sm:mx-0 sm:mb-0 hover:text-white">
            Fan-Favorite Audiobooks
          </li>
        </ul>
      </div>
      <AutoSlider ElementList={bestselling} Direction={"left"} Duration={25} />
      <AutoSlider ElementList={trending} Direction={"right"} Duration={50} />
    </section>
  );
};

export default Filter;
Filter;
