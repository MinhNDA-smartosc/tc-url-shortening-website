import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { ACTION_LINKS, NAV_LINKS } from "../../constants";

export const Header = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const toggleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <header className="flex items-center px-16 py-8 flex-row">
      <div>
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Shortly" />
        </a>
      </div>

      <nav className={`flex flex-row w-full justify-between ${isNavMobileOpen ? "nav-mobile" : "items-center"}`}>
        <ul className="flex flex-row gap-[30px] list-none pl-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="no-underline text-grayish-violet font-bold transition-colors duration-300 hover:text-very-dark-violet">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-[30px] items-center">
          {ACTION_LINKS.map((action) => (
            <a key={action.label} href={action.href} className={action.className}>
              {action.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hidden">
        <button onClick={toggleNavMobile}>
          <svg fill="#bfbfbf" width="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};
