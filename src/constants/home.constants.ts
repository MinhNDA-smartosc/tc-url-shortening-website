import iconFacebook from "../assets/images/icon-facebook.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";

export const NAV_LINKS = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

export const ACTION_LINKS = [
  { label: "Login", href: "#", className: "p-0 bg-transparent border-none text-base text-grayish-violet font-bold cursor-pointer" },
  { label: "Sign Up", href: "#", className: "px-[25px] py-[10px] bg-cyan border-none text-base text-white font-bold cursor-pointer rounded-full transition-colors duration-300 hover:bg-cyan-hover" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Features",
    links: [
      { label: "Link Shortening", href: "#" },
      { label: "Branded Links", href: "#" },
      { label: "Analytics", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { icon: iconFacebook, alt: "icon facebook", href: "/#" },
  { icon: iconTwitter, alt: "icon twitter", href: "/#" },
  { icon: iconPinterest, alt: "icon pinterest", href: "/#" },
  { icon: iconInstagram, alt: "icon instagram", href: "/#" },
];
