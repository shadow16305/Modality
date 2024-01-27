const Hero = () => {
  return (
    <div className="mt-32 bg-[url('../assets/hero-bg.png')] bg-cover py-20 text-white lg:bg-center">
      <div className="container mx-auto flex flex-col justify-center gap-y-7">
        <h1 className="max-w-[1120px] font-semibold lg:text-6xl 2xl:text-8xl">
          Specialized IT support for{" "}
          <span className="text-cyan">Diagnostic Clinics</span> in Toronto &
          GTA!
        </h1>
        <p className="max-w-[650px] font-light tracking-[0.84px] opacity-75 lg:text-xl 2xl:text-2xl">
          An experience team, formerly employed by Canada's top RIS, & PACS
          providers, with an in-depth understanding of diagnostic clinics.
        </p>
        <p className="font-bold lg:text-4xl 2xl:text-[40px]">(647) 227-5559</p>
      </div>
    </div>
  );
};

export default Hero;
