import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RedditIcon from "@mui/icons-material/Reddit";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <div>
    <span className="block w-3/4 h-[1px] bg-secondary mx-auto"></span>
      <div className="mt-10 flex flex-col gap-6 justify-center items-center pb-4">
        <h4 className="m-0 text-base font-semibold">¡Recibe novedades!</h4>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Tu email"
            className="text-sm text-white border-0 bg-gray-400 rounded py-1.5 px-2 shadow-md"
          />
          <button className="border-0 text-black bg-primary py-1.5 px-4 rounded font-semibold text-sm shadow-md">
            Enviar
          </button>
        </div>
        <div className="mt-2">
          <div className="flex justify-center items-center gap-x-2 mb-1">
            <p className="text-primary font-medium text-base m-0">My routes</p>
            <LogoFooter />
          </div>
          <div className="flex justify-center items-center gap-1">
            <FacebookIcon className="text-primary" />
            <InstagramIcon className="text-primary" />
            <WhatsAppIcon className="text-primary" />
            <RedditIcon className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
