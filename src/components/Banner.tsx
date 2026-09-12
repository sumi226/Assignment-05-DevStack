import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
      <div className=" grid grid-cols-2 gap-4 container mx-auto ">
        <div className="my-20">
          <h2 className="text-6xl  font-bold text-black gap-5">
            Build Your Ideal <br />
            <span className="hidden md:block text-2xl font-bold gradient-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p className="text-gray-500 my-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <ul className="flex gap-2">
            <li>
              <button className=" gradient-btn gradient-btn:hover shadow-lg shadow-violet-500/30  transition-all duration-300">
                Explore Technologies
              </button>
            </li>

            <li>
              <button className=" gradient-btn gradient-btn:hover shadow-lg shadow-violet-500/30  transition-all duration-300">
                Learn More
              </button>
            </li>
          </ul>
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
    );
};

export default Banner;