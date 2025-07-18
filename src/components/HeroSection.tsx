import HeroImage from "../assets/images/illustration-working.svg";
export const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse overflow-x-hidden px-4 md:px-16 pt-12 pb-40 md:pb-40">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={HeroImage} width="733" height="482" alt="working illustration" className="block w-[125vw] md:w-full" />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left py-12 flex flex-col items-center md:items-start justify-center pr-0 md:pr-12">
        <h1 className="text-[2.3rem] md:text-[4rem] font-extrabold text-very-dark-violet mb-0 mt-0">More than just shorter links</h1>
        <p className="text-[1.1rem] font-medium text-grayish-violet mb-9 mt-0">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <a href="/#" className="inline-block bg-cyan text-white font-bold rounded-full px-[35px] py-[15px] text-[1.1rem] transition-colors duration-300 hover:bg-cyan-hover">
          Get Started
        </a>
      </div>
    </section>
  );
};
