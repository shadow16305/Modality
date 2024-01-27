const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="h-[3px] bg-cyan lg:w-[100px] 2xl:w-[120px]" />
      <p className="uppercase text-cyan lg:text-lg 2xl:text-2xl">{title}</p>
      <span className="h-[3px] bg-cyan lg:w-[100px] 2xl:w-[120px]" />
    </div>
  );
};

export default SectionHeader;
