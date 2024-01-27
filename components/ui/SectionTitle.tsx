import Image from "next/image";
import SectionHeader from "./SectionHeader";
import shape from "../../assets/weird-shape.svg";

const SectionTitle: React.FC<{
  title: string;
  header: string;
  className: string;
}> = ({ title, header, className }) => {
  return (
    <div className="relative flex h-[200px] flex-col items-center justify-center gap-y-4">
      <Image
        src={shape}
        alt="weird shape"
        className="absolute -top-1/4 -z-10"
      />
      <SectionHeader title={header} />
      <h2
        className={`text-center text-4xl font-semibold leading-none 2xl:text-[56px] ${className}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
