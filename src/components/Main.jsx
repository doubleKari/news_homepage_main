import New from "./New";
import webImgMobile from "../assets/images/image-web-3-mobile.jpg";
import webImgDesktop from "../assets/images/image-web-3-desktop.jpg";
const Main = () => {
  return (
    <main className="px-[20px] md:flex  md:gap-x-8 mb-8 md:mb-16">
      <div className="md:w-[70%] mb-12 md:mb-0">
        <img className="md:hidden" src={webImgMobile} alt="CTA" />
        <img className="hidden md:block" src={webImgDesktop} alt="CTA" />
        {/* text under the image for mobile view */}
        <div className="pt-5 md:hidden">
          <h1 className="text-[2.5rem]/[45px]  font-[800] whitespace-pre-wrap">
            The Bright <br />
            Future of Web <br />
            3.0?
          </h1>
          <p className="text-[15px] pt-3 mb-5">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="block uppercase px-5 text-[15px] font-[700] py-3 bg-primary-red  text-white hover:bg-neutral-veryDarkBlue cursor-pointer">
            Read More
          </button>
        </div>
        {/* text under the image for desktop view */}
        <div className="pt-5 hidden md:flex">
          <h1 className="text-[4rem]/[68px] font-black whitespace-pre-wrap flex-1 text-neutral-veryDarkBlue">
            The Bright <br />
            Future of <br />
            Web 3.0?
          </h1>
          <div className="pt-3 flex-1 flex flex-col gap-y-8">
            <p className="text-xl">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="block self-start uppercase px-10 text-[15px] font-[700] py-3 bg-primary-red  text-white tracking-widest hover:bg-neutral-veryDarkBlue cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* SideBar called New */}
      <New />
    </main>
  );
};

export default Main;

// Where CTA means Call To Action
