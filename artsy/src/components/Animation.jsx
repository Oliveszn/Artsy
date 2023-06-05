import img1 from "../images/Rectangle 231.png";
import img2 from "../images/Rectangle 232.png";
import img3 from "../images/Rectangle 233.png";
import img4 from "../images/Rectangle 234.png";
import img0 from "../images/Rectangle 230.png";
import { useLocation } from "react-router-dom";

const Animation = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <section className="img__section mt-20">
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
        </section>
      )}
    </>
  );
};

export default Animation;
