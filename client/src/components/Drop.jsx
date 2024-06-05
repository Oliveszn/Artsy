import rec82 from "../images/Rectangle 82.png";
import rec84 from "../images/Rectangle 84.png";
import rec87 from "../images/Rectangle 87.png";
import rec23 from "../images/Rectangle 2332.png";
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
    <>
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
            className="flex flex-col md:flex-row gap-x-7 gap-y-7 mb-10"
            key={drops.id}
          >
            <div className="relative">
              <img src={drops.image} className="hover:cursor-pointer" alt="" />
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

            <div className="md:w-1/2">
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
              <p className="md:w-2/3 mb-4 font-normal text-lg md:text-xl text-tetColor font-Sat">
                {drops.subtitle}
              </p>
              <p className="mb-4 text-xl md:text-2xl font-medium text-secColor font-Sat">
                Creator:{" "}
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
        {/* <div className="flex flex-col md:flex-row gap-x-7 gap-y-7">
          <div className="relative">
            <img src={rec82} className="hover:cursor-pointer" alt="" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10 w-2/3">
                <div className="flex flex-col items-start">
                  <div>
                    <h1 className="time">Time remaining</h1>
                  </div>
                  <div className="flex">
                    <h1 className="time__num">6hr: 40mins: 15s</h1>
                    <button className="bg-btnColorAlt join">Join</button>
                  </div>
                </div>
              </div>

              <div className="ehen flex flex-col items-end top-5 right-8 absolute md:hidden">
                <button className="bg-btnColorTet update">UPCOMING</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <button className="update__sec bg-btnColorTet">UPCOMING</button>
            <p className="time__day">November 21 at 11am WAT</p>
            <h1 className="title">Eyo: Eko For Show</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              a quisquam quis exercitationem. Quia alias minima, at cum saepe
              quam adipisci et nulla nostrum.
            </p>
            <p className="creator">
              Creator:{" "}
              <a href="#" className="text-linkColor">
                Aliya Minat
              </a>
            </p>

            <a
              href=""
              className="font-normal text-base md:text-xl text-linkColor font-Sat"
            >
              Get notified
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-7 gap-y-7 mt-10">
          <div className="relative">
            <img src={rec84} className="hover:cursor-pointer" alt="" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10 w-2/3">
                <div className="flex flex-col items-start">
                  <div>
                    <h1 className="time">Time remaining</h1>
                  </div>
                  <div className="flex">
                    <h1 className="time__num">6hr: 40mins: 15s</h1>
                    <button className="bg-btnColorAlt join">Join</button>
                  </div>
                </div>
              </div>

              <div className="ehen flex flex-col items-end top-5 right-8 absolute md:hidden">
                <button className="bg-btnColorTet update">LIVE NOW</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <button className="update__sec bg-btnColorTet">LIVE NOW</button>
            <p className="time__day">November 21 at 11am WAT</p>
            <h1 className="title">Ginger Suburbs</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              a quisquam quis exercitationem. Quia alias minima, at cum saepe
              quam adipisci et nulla nostrum.
            </p>
            <p className="creator">
              Creator:{" "}
              <a href="#" className="text-linkColor">
                Tina Benson
              </a>
            </p>

            <a
              href=""
              className="font-normal text-base md:text-xl text-linkColor font-Sat"
            >
              Join now
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-7 gap-y-7 mt-10">
          <div className="relative">
            <img src={rec87} className="hover:cursor-pointer" alt="" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10 w-2/3">
                <div className="flex flex-col items-start">
                  <div>
                    <h1 className="time">Auction Ended</h1>
                  </div>
                  <div className="flex">
                    <h1 className="time__num">2 hours ago</h1>
                    <button className="bg-btnColorSec join">View</button>
                  </div>
                </div>
              </div>

              <div className="ehen flex flex-col items-end top-5 right-8 absolute md:hidden">
                <button className="bg-btnColorSec update">ENDED</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <button className=" bg-btnColorSec update__sec">ENDED</button>
            <p className="time__day">November 21 at 11am WAT</p>
            <h1 className="title">Sink</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              a quisquam quis exercitationem. Quia alias minima, at cum saepe
              quam adipisci et nulla nostrum.
            </p>
            <p className="creator">
              Creator:{" "}
              <a href="#" className="text-linkColor">
                Aliya Minat
              </a>
            </p>

            <a
              href=""
              className="font-normal text-base md:text-xl text-linkColor font-Sat"
            >
              View
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-7 gap-y-7 mt-10">
          <div className="relative">
            <img src={rec23} className="hover:cursor-pointer" alt="" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10 w-2/3">
                <div className="flex flex-col items-start">
                  <div>
                    <h1 className="time">Auction Ended</h1>
                  </div>
                  <div className="flex">
                    <h1 className="time__num">2 days ago</h1>
                    <button className="bg-btnColorSec join">View</button>
                  </div>
                </div>
              </div>

              <div className="ehen flex flex-col items-end top-5 right-8 absolute md:hidden">
                <button className="bg-btnColorSec update">ENDED</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <button className="bg-btnColorSec update__sec">ENDED</button>
            <p className="time__day">November 21 at 11am WAT</p>
            <h1 className="title">Warped ‘99</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              a quisquam quis exercitationem. Quia alias minima, at cum saepe
              quam adipisci et nulla nostrum.
            </p>
            <p className="creator">
              Creator:{" "}
              <a href="#" className="text-linkColor">
                Buju Benson
              </a>
            </p>

            <a href="" className="font-normal text-xl text-linkColor">
              View
            </a>
          </div>
        </div> */}
      </section>

      <div className="hidden md:flex items-center justify-center my-20">
        <button className="text-textColorAlt border-solid border border-current rounded-lg py-4 px-10 text-lg font-medium">
          SEE MORE
        </button>
      </div>
    </>
  );
};

export default Drop;
