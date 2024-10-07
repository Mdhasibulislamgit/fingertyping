import React from "react";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaRedditAlien,
} from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent('https://fingertyping.com')}&text=${encodeURIComponent('Improve your typing skills with FingerTyping.com! 🚀⌨️')}`,
    },
    {
      icon: FaFacebookF,
      href: `https://www.facebook.com/fingertypingofficial`,
    },
    {
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=https://fingertyping.com&title=FingerTyping.com&summary=Improve your typing skills!`,
    },
    {
      icon: FaTelegramPlane,
      href: `https://t.me/fingertyping`,
    },
    {
      icon: FaRedditAlien,
      href: `https://www.reddit.com/submit?url=https://fingertyping.com&title=Check out this awesome typing tool!`,
    },
    {
      icon: BsMessenger,
      href: `https://www.facebook.com/dialog/send?link=https://fingertyping.com&redirect_uri=https://fingertyping.com&app_id=966242223397117`,
    },
  ];

  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-300">
      
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center px-10">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} FingerTyping
          </p>
          <div className="flex space-x-2">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
