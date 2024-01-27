import Image from "next/image";

interface TeamCardProps {
  role: string;
  name: string;
  img: string;
  className: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ role, name, img, className }) => {
  return (
    <div
      className={`flex h-[505px] w-[340px] flex-col items-center gap-y-8 rounded-[10px] bg-gradient-to-b from-[#1F808B] to-[#121528] 2xl:w-[360px] ${className}`}
    >
      <Image src={img} alt={name} width={270} height={340} />
      <h4 className="text-2xl">{role}</h4>
      <p className="opacity-60">{name}</p>
    </div>
  );
};

export default TeamCard;
