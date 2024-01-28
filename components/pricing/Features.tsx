import FeaturesList from "./FeaturesList";

const Features = () => {
  return (
    <section className="mt-48 flex flex-col items-center gap-y-20 text-white">
      <h2 className="max-w-[654px] text-center text-[56px] font-semibold">
        For a flat-monthly fee, here’s what you get:
      </h2>
      <div className="flex gap-x-20">
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
