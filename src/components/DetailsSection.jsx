import Image from "next/image";
const title = (
  <>
    A novel reading and <br />
    listening experience.
  </>
);

const DetailsSection = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-gray-100 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h1>
        </div>
        <div className="flex flex-col mx-auto w-[55%] bg-white dark:bg-transparent border-2 dark:border-gray-700 rounded-xl px-10 pt-10">
          <span className="text-gray-900 dark:text-white font-bold text-2xl">
            Listen to audiobooks right in the app.
          </span>
          <span className="text-gray-500 font-bold text-xl">
            Audiobooks is a tab right inside the Apple Books app, so you can
            easily find and get immersed in storytelling brought to life by
            talented narrators and celebrities.
          </span>
          <Image
            src={"/assets/images/cover.png"}
            width={1640}
            height={772}
            alt="k"
            className="mt-10 bg-transparent"
          />
        </div>
        <div className="flex flex-col xl:flex-row mx-auto w-[55%] gap-5 my-10">
          <div className="flex flex-col mx-auto w-full xl:w-[55%] bg-white dark:bg-transparent border-2 dark:border-gray-700 rounded-xl px-10 py-10">
            <span className="text-gray-900 dark:text-white font-bold text-xl">
              {
                <>
                  Reach your
                  <br />
                  page-turning potential.
                </>
              }
            </span>
            <span className="text-gray-500 font-bold text-lg mt-1">
              Track your reading progress and celebrate achievements with
              Reading Goals — whether that’s how much you read in a day, a new
              streak record, or how many books you’ve read this year. And get
              encouragement to reach your daily goals.
            </span>
            <Image
              src={"/assets/images/cover2.jpg"}
              width={1640}
              height={772}
              className="mt-10 sepia-50"
            />
          </div>
          <div className="flex flex-col justify-between mx-auto w-full xl:w-[55%] bg-white dark:bg-transparent border-2 dark:border-gray-700 rounded-xl px-10 py-10">
            <div className="flex flex-col">
              <span className="text-gray-900 dark:text-white font-bold text-xl">
                {<>Get personalized recommendations.</>}
              </span>
              <span className="text-gray-500 font-bold text-lg mt-2">
                The For You collection is a curated list of audiobooks, ebooks,
                authors, and a Weekly Top 5 based on what’s already in your
                library.
              </span>
            </div>

            <div className="flex flex-row justify-between gap-5 w-full">
              <Image
                src={"/assets/images/cover3.jpg"}
                width={262}
                height={400}
                alt="s"
                className="mt-10 rounded-lg w-[50%]"
              />
              <Image
                src={"/assets/images/cover4.jpg"}
                width={262}
                height={400}
                alt="1"
                className="mt-10 rounded-lg w-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto mb-10 w-[55%] bg-white dark:bg-transparent border-2 dark:border-gray-700 rounded-xl px-10 pt-10">
          <span className="text-gray-900 dark:text-white font-bold text-2xl">
            Pick up where you left off.
          </span>
          <span className="text-gray-500 font-bold text-xl">
            iCloud syncs your progress. So even when you switch devices, you’ll
            pick up right where you left off in your audiobook or ebook. And
            download your Apple Books titles to your device for offline reading
            or listening.
          </span>
          <Image
            src={"/assets/images/cover5.jpg"}
            width={1640}
            height={772}
            alt="2"
            className="my-10"
          />
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
