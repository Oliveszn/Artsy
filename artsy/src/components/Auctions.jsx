import rec24 from "../images/Rectangle 247.png";
import rec245 from "../images/Rectangle 245.png";
import rec246 from "../images/Rectangle 246.png";
import rec57 from "../images/Rectangle 57.png";
import rec58 from "../images/Rectangle 58.png";
import vec from "../images/Vector-likes.png";

const Auctions = () => {
  return (
    <>
      <section>
        <div className="mx-auto container">
          <h2 className="text-secColor md:text-2xl text-xl font-medium font-medium font-Sat">
            Here’s an overview of products actively on auction, explore!
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={rec24} alt="" className="rubb" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10">
                <h1 className="text-xl md:text-4xl font-normal font-Stix">
                  2hr: 4mins: 5s
                </h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={rec245} alt="" className="rubb" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10">
                <h1 className="text-xl md:text-4xl font-normal font-Stix">
                  6hr: 40mins: 15s
                </h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={rec246} alt="" className="rubb" />
            <div className="image__time">
              <div className="flex items-center time__holder py-2 px-6 rounded-lg mb-10">
                <h1 className="text-xl md:text-4xl font-normal font-Stix">
                  8hr: 20mins: 50s
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 mx-auto container">
        <h2 className="md:font-bold font-medium text-2xl md:text-4xl mb-10 font-Sat">
          Top bids from popular creators
        </h2>

        <div className="md:flex gap-y-10 gap-x-16 block">
          <div className="flex flex-col card__holder p-6">
            <div className="flex flex-col items-end">
              <img
                src={vec}
                alt=""
                className="border-solid border border-current rounded-full p-2 mb-4"
              />
            </div>
            <div>
              <img src={rec57} alt="" className="mb-4" />
            </div>
            <div>
              <p className="text-xl font-bold mb-3 font-Sat md:text-4xl">
                Out of the box
              </p>
            </div>

            <div>
              <p className="md:text-2xl text-xl font-medium text-tetColor font-Sat">
                Creator :
                <span className="md:text-2xl text-xl font-Sat font-bold text-textColorAlt">
                  Dan Murray
                </span>
              </p>
              <p className="md:text-2xl text-xl font-Sat font-medium text-tetColor mt-4">
                Date :
                <span className="md:text-2xl text-lg font-medium font-Sat text-textColorAlt">
                  12/08/22
                </span>
              </p>
              <p className="text-2xl font-medium font-Sat text-tetColor mt-4">
                Highest bid :
                <span className="text-2xl font-bold font-Sat text-textColorAlt">
                  0.57 ETH
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between bg-gray-200 py-2 px-6 mt-8">
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-2xl text-tetColor">
                  Current bid
                </span>
                <span className="font-bold font-Sat text-xl md:text-2xl text-secColor">
                  0.987ETH
                </span>
              </div>
              <button className="bg-btnColor py-1 px-8 text-priColor font-medium text-base md:text-xl">
                Place bid
              </button>
            </div>
          </div>

          <br className="block md:hidden" />
          <div className="flex flex-col card__holder p-6">
            <div className="flex flex-col items-end">
              <img
                src={vec}
                alt=""
                className="border-solid border border-current rounded-full p-2 mb-4"
              />
            </div>
            <div>
              <img src={rec58} alt="" className="mb-4" />
            </div>
            <div>
              <p className="text-xl font-bold mb-3 font-Sat md:text-4xl">
                Falling apart
              </p>
            </div>

            <div>
              <p className="md:text-2xl text-xl font-medium text-tetColor font-Sat">
                Creator :
                <span className="md:text-2xl text-xl font-Sat font-bold text-textColorAlt">
                  Jacob Banks
                </span>
              </p>
              <p className="md:text-2xl text-xl font-Sat font-medium text-tetColor mt-4">
                Date :
                <span className="md:text-2xl text-lg font-medium font-Sat text-textColorAlt">
                  12/08/22
                </span>
              </p>
              <p className="text-2xl font-medium font-Sat text-tetColor mt-4">
                Highest bid :
                <span className="text-2xl font-bold font-Sat text-textColorAlt">
                  0.34 ETH
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between bg-gray-200 py-2 px-6 mt-8">
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-2xl text-tetColor">
                  Current bid
                </span>
                <span className="font-bold font-Sat text-xl md:text-2xl text-secColor">
                  0.99 ETH
                </span>
              </div>
              <button className="bg-btnColor py-1 px-8 text-priColor font-medium text-base md:text-xl">
                Place bid
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auctions;
