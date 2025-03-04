import Image from "next/image";

const AutoSlider = ({ ElementList, Direction = "left", Duration = 10 }) => {
  return (
    <div className="fade flex w-full overflow-hidden mt-12">
      <div
        className={` flex gap-5 h-72 w-full ${
          Direction === "left" ? "animate-left" : "animate-right"
        }`}
        style={{ "--speed": `${Duration}s` }}
      >
        {/* Inline CSS Animation */}
        <style>
          {`
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          @keyframes slide-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          .animate-left {
            animation: slide-left var(--speed) linear infinite;
          }

          .animate-right {
            animation: slide-right var(--speed) linear infinite;
          }

          /* Slow down smoothly on hover */
          .slider:hover{
            animation-duration: 50s; /* Adjust this value for slower effect */
            transition: animation-duration 4s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
        </style>

        {/* Duplicated Elements for Seamless Scrolling */}
        {[...ElementList, ...ElementList].map(({ src, title, author }, idx) => (
          <div
            key={idx}
            className="flex flex-col flex-shrink-0 hover:cursor-pointer"
          >
            <Image
              className="rounded-md hover:blur-sm"
              src={src}
              width={195}
              height={195}
              alt={title}
            />
            <span className="text-gray-900 dark:text-white font-semibold">
              {title}
            </span>
            <span className="text-gray-500 font-semibold">{author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
