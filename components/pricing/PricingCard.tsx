"use client";

interface PriceCardProps {
  title: string;
  quote: string;
  workstations: string;
  buttonText: string;
}

const PricingCard: React.FC<PriceCardProps> = ({
  title,
  quote,
  workstations,
  buttonText,
}) => {
  return (
    <div className="flex h-[287px] w-[400px] flex-col items-center justify-center bg-[url('../assets/pricing-box-blue.png')] bg-cover px-8 py-8 text-center">
      <h3 className="text-2xl font-semibold uppercase">{title}</h3>
      <p className="mt-7 font-medium">"{quote}"</p>
      <p className="mt-2 font-extrabold">{workstations}</p>
      <button className="border-less-dark-blue group relative mt-7 h-12 w-[170px] rounded-lg border py-3 uppercase">
        <span className="absolute left-0 top-0 h-full w-0 rounded-lg bg-cyan transition-all duration-300 group-hover:w-full"></span>
        <span className="relative z-10">{buttonText}</span>
      </button>
    </div>
  );
};

export default PricingCard;
