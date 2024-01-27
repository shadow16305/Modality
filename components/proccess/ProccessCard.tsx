import Image from "next/image";

interface ProccesCardProps {
  title: string;
  img: string;
  paragraph: string;
  number: number;
}

const ProccessCard: React.FC<ProccesCardProps> = ({
  title,
  img,
  paragraph,
  number,
}) => {
  return (
    <div className="group flex flex-col gap-y-5 rounded-[10px] border border-[#101936] bg-gradient-to-b from-[#101936] to-[#10193604] p-5 text-white transition-all duration-300 hover:scale-110 hover:bg-cyan hover:text-[#101936]">
      <div className="flex justify-between">
        {img && (
          <Image
            src={img}
            alt={title}
            width={32}
            height={32}
            className="transition-all duration-300 group-hover:brightness-200 group-hover:saturate-0"
          />
        )}
        <span className="text-7xl text-white opacity-10">{number}</span>
      </div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-[#101936] opacity-0 transition-all duration-300 group-hover:opacity-100">
        {paragraph}
      </p>
    </div>
  );
};

export default ProccessCard;
