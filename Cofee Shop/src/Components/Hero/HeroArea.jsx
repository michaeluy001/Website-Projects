import HeroTitle from "./HeroTitle";
import Button from "./Button";

const HeroArea = () => {
  return (
    <>
      <div className="size-full relative overflow-hidden snap-center ">
        <div className="size-full bg-[url(src/assets/hero-landscape.jpg)] bg-no-repeat bg-cover blur-[5px] "></div>
        <div className="absolute justify-center left-1/2 lg: -translate-x-1/2 leading-15 flex flex-col h-screen top-0 w-full sm:w-1/2 ">
          <HeroTitle />
          <div className="mt-2 w-full justify-around text-white flex flex-col lg:flex-row lg:justify-items-center">
            <Button type="secondary">
              <span className="text-amber-900">Our Branches</span>{" "}
            </Button>
            <Button type="primary">
              <span>Contact Us</span>{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
