import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

interface SocialProps {
  facebook?:boolean;
  instagram?: boolean;
  whatsapp?:boolean
}
function SocialIcons({facebook, instagram, whatsapp}:SocialProps) {
  return (
    <>
    <a href="" className="border-[1px] p-3 rounded-xl group hover:border-golden-600">
      {facebook && <FaFacebookF className="group-hover:text-golden-600 text-lg text-gray-600"/>}
    </a>
    <a href="" className="border-[1px] p-3 rounded-xl group hover:border-golden-600">
     {instagram && <FaInstagram className="group-hover:text-golden-600 text-lg text-gray-600"/>}
      
    </a>
    <a href="" className="border-[1px] p-3 rounded-xl group hover:border-golden-600">
      {whatsapp && <FaWhatsapp className="group-hover:text-golden-600 text-lg text-gray-600"/>}
      
    </a>
    </>
  );
}

export default SocialIcons;
