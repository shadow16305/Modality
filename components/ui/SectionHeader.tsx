const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="h-[3px] w-[120px] bg-cyan" />
      <p className="text-2xl uppercase text-cyan">{title}</p>
      <span className="h-[3px] w-[120px] bg-cyan" />
    </div>
  );
};

export default SectionHeader;
