import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import { ACTION_LINKS, NAV_LINKS } from "../../constants";

export const Header = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const toggleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  // Close mobile nav when clicking outside
  useEffect(() => {
    if (!isNavMobileOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsNavMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isNavMobileOpen]);

  return (
    <header className="header flex items-center px-6 md:px-16 py-6 md:py-8 relative">
      <div>
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Shortly" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-block hidden md:flex flex-row w-full justify-between items-center">
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

      {/* Mobile Menu Button */}
      <div className="nav-button block md:hidden ml-auto">
        <button onClick={toggleNavMobile} aria-label="Open navigation menu">
          <svg fill="#bfbfbf" width="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavMobileOpen && (
        <nav ref={mobileNavRef} className="nav-mobile flex flex-col items-center bg-dark-violet rounded-xl p-6 absolute left-1/2 top-[80px] w-[80vw] max-w-[350px] -translate-x-1/2 z-50 shadow-lg md:hidden animate-fade-in">
          <ul className="flex flex-col w-full gap-4 py-4 items-center m-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="w-full">
                <a href={link.href} className="block w-full no-underline text-white font-bold py-2 transition-colors duration-300 hover:text-grayish-violet text-center">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-buttons flex flex-col w-full items-center border-t border-gray pt-5 gap-4">
            {ACTION_LINKS.map((action) => (
              <a key={action.label} href={action.href} className={`w-full text-center ${action.label === "Login" ? "text-white" : "px-8 py-3 bg-red-100 text-white rounded-full font-bold hover:bg-red-100 transition-colors duration-300"}`}>
                {action.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
