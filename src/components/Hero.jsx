import { FaBookOpen, FaArrowRight } from "react-icons/fa";

const title = (
  <>
    Read, listen, discover.
    <br />
    All in one app.
  </>
);

const description =
  "Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment.";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
        <FaBookOpen className="text-8xl mx-auto bg-orange-400 dark:bg-transparent rounded-2xl animate-fadeSlideUp text-white py-2 px-4 dark:border-2 dark:border-white" />
        <p className="mx-auto text-lg font-bold dark:text-white mt-4">
          Apple Books
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
