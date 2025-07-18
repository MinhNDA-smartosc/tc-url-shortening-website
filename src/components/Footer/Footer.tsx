import FooterLogo from "../../assets/images/logo-footer.svg";
import { FOOTER_SECTIONS, SOCIAL_LINKS } from "../../constants";

export const Footer = () => {
  return (
    <>
      <footer className="pt-[4.4rem] px-[1.5rem] pb-[2.7rem] bg-[#232127]">
        <div className="max-w-[69.375rem] mx-[4rem] flex justify-between text-center text-white flex-row items-start gap-[1.5rem]">
          <a href="#">
            <img src={FooterLogo} alt="Shortly" />
          </a>

          <dl className="flex gap-[4.5rem] flex-row text-left m-0 ml-[8rem]">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <dt className="text-[1rem] font-bold mb-[1.25rem]">{section.title}</dt>
                {section.links.map((link) => (
                  <dd className="m-0" key={link.label}>
                    <a className="no-underline text-gray-400 text-[0.9rem] transition-colors duration-300 hover:text-cyan-400" href={link.href}>
                      {link.label}
                    </a>
                  </dd>
                ))}
              </div>
            ))}
          </dl>

          <div className="flex flex-row justify-center items-center flex-wrap pl-0 gap-[1.5rem]">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.alt} className="transition-all duration-300 hover:filter hover:[filter:invert(63%)_sepia(76%)_saturate(408%)_hue-rotate(131deg)_brightness(140%)_contrast(94%)]" href={social.href}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://github.com/TeremTech/tc-url-shortening-website" target="_blank">
          TeremTech
        </a>{" "}
        . Coded by{" "}
        <a href="https://github.com/MinhNDA-smartosc" target="_blank" rel="noopener noreferrer">
          SmartOsc Developers
        </a>{" "}
        .
      </div>
    </>
  );
};
