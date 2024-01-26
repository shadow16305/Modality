const Hero = () => {
  return (
    <div className="text-white mt-32 bg-[url('../assets/hero-bg.png')] bg-cover py-20 lg:bg-center">
      <div className="container mx-auto flex flex-col justify-center gap-y-7">
        <h1 className="max-w-[1120px] text-8xl font-semibold">
          Specialized IT support for{" "}
          <span className="text-cyan">Diagnostic Clinics</span> in Toronto &
          GTA!
        </h1>
        <p className="max-w-[650px] text-2xl font-light tracking-[0.84px] opacity-75">
          An experience team, formerly employed by Canada's top RIS, & PACS
          providers, with an in-depth understanding of diagnostic clinics.
        </p>
        <p className="text-[40px] font-bold">(647) 227-5559</p>
      </div>
    </div>
  );
};

export default Hero;
