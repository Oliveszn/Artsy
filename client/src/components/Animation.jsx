import img1 from "../images/Rectangle 231.png";
import img2 from "../images/Rectangle 232.png";
import img3 from "../images/Rectangle 233.png";
import img4 from "../images/Rectangle 234.png";
import img0 from "../images/Rectangle 230.png";
import { useLocation } from "react-router-dom";
import orange from "../images/orange-mobile.png";
import back1 from "../images/back-1.png";
import back2 from "../images/back-2.png";
import front from "../images/front.png";
import red from "../images/red-mobile.png";

const Animation = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <section className="mt-20">
          <div className="md:h-[505px] tb:h-[350px] sm:hidden md:flex justify-center items-center oveflow-hidden gap-4">
            <div className="md:h-[332px] w-[24.5%] contain border-black">
              <div className="wrapperfour w-full h-full flex gap-4">
                <img src={img0} alt="glass" className="object-contain" />
                <img src={img1} alt="flower-desktop" />
                <img src={img2} alt="little-girl-desktop" />
                <img src={img3} alt="kangaroo-desktop" />
                <img src={img4} alt="fruit" />
              </div>
            </div>

            <div className="md:h-[428px] w-[24.5%] contain">
              <div className="wrapperthree flex gap-4">
                <img src={img4} alt="fruit" />
                <img src={img3} alt="kangaroo-desktop" />
                <img src={img0} alt="glass" className="object-cover" />
                <img src={img2} alt="little-girl-desktop" />
                <img src={img1} alt="flower-desktop" />
              </div>
            </div>

            <div className="md:h-[428px] w-[24.5%] contain mt-[-4rem]">
              <div className="wrappertwo flex gap-4">
                <img src={img2} alt="little-girl-desktop" />
                <img src={img1} alt="flower-desktop" />
                <img src={img3} alt="kangaroo-desktop" />
                <img src={img0} alt="glass" className="object-contain" />
                <img src={img4} alt="fruit" />
              </div>
            </div>

            <div className="md:h-[428px] w-[24.5%] contain">
              <div className="wrapper flex gap-4">
                <img src={img1} alt="flower-desktop" />
                <img src={img2} alt="little-girl-desktop" />
                <img src={img3} alt="kangaroo-desktop" />
                <img src={img4} alt="fruit" />
                <img src={img0} alt="glass" />
              </div>
            </div>
          </div>

          <div className="md:hidden sm:h-[356px] w-[95%] mt-3 mb-20 relative mobile-hero bg-{red} flex items-center justify-center ">
            <div className="absolute left-0 bottom-6">
              <img src={orange} alt="back-image" />
            </div>
            <div className="absolute">
              <img src={back1} alt="back-image" />
            </div>
            <div className="absolute">
              <img src={back2} alt="back-2-image" />
            </div>
            <div className="w-[90%] absolute">
              <img src={front} alt="front-image" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Animation;
