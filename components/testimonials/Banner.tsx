import Image from "next/image";
import stars from "../../assets/stars.png";

const Banner = () => {
  return (
    <div className="flex rounded-[10px] bg-[#0E152F]">
      <div className="flex max-w-[740px] flex-col items-center justify-center gap-y-12 px-14 py-10">
        <h2 className="text-5xl font-semibold leading-tight">
          We understand the daily stress of running a clinic
        </h2>
        <p>
          Our deep grasp of clinic workflows leads to consistently positive
          reviews. Aligning our IT support seamlessly with operations ensures
          efficient service, satisfying our clients.
        </p>
      </div>
      <Image src={stars} alt="stars banner" width={600} height={440} />
    </div>
  );
};

export default Banner;
