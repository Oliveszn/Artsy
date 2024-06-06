import { drops } from "../datafiles/drops";

const Drop = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "UPCOMING":
        return { backgroundColor: "#3EA03B" };
      case "LIVE NOW":
        return { backgroundColor: "#3EA03B" };
      case "ENDED":
        return { backgroundColor: "#999EA5" };
      default:
        return {};
    }
  };

  const getBtnStyle = (btn) => {
    switch (btn) {
      case "Join":
        return { backgroundColor: "#4693ED" };
      case "View":
        return { backgroundColor: "#999EA5" };
      default:
        return {};
    }
  };

  return (
    <div className="px-4">
      <div className="mx-auto container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Sat font-bold md:font-medium text-secColor">
            Upcoming drops
          </h1>
          <p className="mb-3 text-lg md:text-xl lg:text-2xl font-Sat font-normal text-center">
            Turn on notifications so that <br className="block md:hidden" />
            no drops will miss you
          </p>
          <button className="text-textColorAlt border-solid border border-current rounded-lg py-3 px-16 font-Sat text-xl md:text-2xl lg:text-3xl font-medium">
            Notify me
          </button>
        </div>
      </div>

      <section className="mx-auto container mt-20">
        {drops.map((drops) => (
          <div
            className="flex flex-col lg:flex-row gap-x-7 gap-y-7 mb-10"
            key={drops.id}
          >
            <div className="relative">
              <img
                src={drops.image}
                className="hover:cursor-pointer w-full h-auto"
                alt=""
              />
              <div className="image__time">
                <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10 w-2/3">
                  <div className="flex flex-col items-start">
                    <div>
                      <h1 className="text-base md:text-2xl font-normal font-Sat">
                        {drops.condition}
                      </h1>
                    </div>
                    <div className="flex">
                      <h1 className="text-xl font-normal md:text-2xl md:mr-20 font-Stix">
                        {drops.timeNum}
                      </h1>
                      <button
                        style={getBtnStyle(drops.btn)}
                        className="text-priColor py-1 px-6 rounded-xl text-xl font-Sat hidden md:block"
                      >
                        {drops.btn}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end top-5 right-8 absolute md:hidden">
                  <button
                    className="mb-4 text-priColor py-1 px-4 rounded-md font-Sat font-medium text-xs"
                    style={getStatusStyle(drops.status)}
                  >
                    {drops.status}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <button
                style={getStatusStyle(drops.status)}
                className="hidden md:block mb-4 text-priColor py-1 px-8 rounded-lg font-Sat text-lg font-medium"
              >
                {drops.status}
              </button>
              <p className="mb-4 md:text-xl text-base font-normal text-secColor font-Sat">
                {drops.timeDay}
              </p>
              <h1 className="mb-4 md:text-4xl text-2xl font-medium text-secColor font-Sat">
                {drops.title}
              </h1>
              <p className="lg:w-2/3 mb-4 font-normal text-lg md:text-xl text-tetColor font-Sat">
                {drops.subtitle}
              </p>
              <p className="mb-4 text-xl md:text-2xl font-medium text-secColor font-Sat">
                Creator:
                <a href="#" className="text-linkColor">
                  {drops.creator}
                </a>
              </p>

              <a
                href=""
                className="font-normal text-base md:text-xl text-linkColor font-Sat"
              >
                {drops.action}
              </a>
            </div>
          </div>
        ))}
      </section>

      <div className="hidden md:flex items-center justify-center my-20">
        <button className="text-textColorAlt border-solid border border-current rounded-lg py-4 px-10 text-lg font-medium">
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Drop;
