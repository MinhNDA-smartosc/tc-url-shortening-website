import iconBrand from "../assets/images/icon-brand-recognition.svg";
import iconRecords from "../assets/images/icon-detailed-records.svg";
import iconCustomizable from "../assets/images/icon-fully-customizable.svg";

export const StatSection = () => {
  return (
    <section className="text-center bg-[hsl(230,25%,95%)] px-4 md:px-16 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Advanced Statistics</h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-24 text-base md:text-lg leading-8">Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-20 md:gap-8 max-w-[144rem] mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute w-[40rem] md:h-2 bg-cyan-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="block md:hidden absolute w-2 h-full bg-cyan-400 left-1/2 top-0 -translate-x-1/2 z-0" />

        {/* Card 1 */}
        <div className="relative bg-white rounded-lg pt-16 pb-6 px-6  text-center md:text-left shadow-md max-w-[40rem] w-full z-10 md:self-start">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-top-10 md:left-8 md:grid place-content-center bg-[#3b3054] rounded-full w-20 h-20 p-2 flex justify-center items-center">
            <img src={iconBrand} alt="icon brand recognition" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg mb-4">Brand Recognition</h3>
          <p className="text-gray-400 mb-0 text-base leading-7">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg pt-16 pb-6 px-6 text-center md:text-left shadow-md max-w-[40rem] w-full z-10 md:mt-11">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[0.5rem] md:left-8 md:grid place-content-center bg-[#3b3054] rounded-full w-20 h-20 p-2 flex justify-center items-center">
            <img src={iconRecords} alt="icon detailed records" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg mb-4">Detailed Records</h3>
          <p className="text-gray-400 mb-0 text-base leading-7">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-lg pt-16 pb-6 px-6 text-center md:text-left shadow-md max-w-[40rem] w-full z-10 md:mt-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[0.3rem] md:left-8 md:grid place-content-center bg-[#3b3054] rounded-full w-20 h-20 p-2 flex justify-center items-center">
            <img src={iconCustomizable} alt="icon fully customizable" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg mb-4">Fully Customizable</h3>
          <p className="text-gray-400 mb-0 text-base leading-7">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  );
};
