import React from "react";
import TitleSection from "./elements/title-section";
import IconsCategories from "../ui/icons-categories";
import {IoBedOutline, IoCarOutline} from 'react-icons/io5'
import {BiBath} from 'react-icons/bi'
import bedrooms from '../../assets/img/11.jpg'
import bath from '../../assets/img/12.jpg'
import garage from '../../assets/img/13.jpg'
import front from '../../assets/img/9.png'

function AboutSection() {
  return (
    <section className="container mx-auto flex flex-col py-28">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="">
          <TitleSection  title="AC - Residencial" Subtitle="Sobre Nós" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti, voluptas odit doloremque reiciendis iusto doloribus commodi obcaecati. Sit inventore alias dignissimos possimus, nostrum cum cumque. Fugit distinctio fuga ullam?"/>
          <div className="flex flex-row gap-20 mt-6">
            <div className="">
            <IconsCategories icon={<IoBedOutline/>} title="camas"/>
            </div>
            <div className="border-l-2 px-3">
            <IconsCategories icon={<BiBath/>} title="Casas de banhos"/>
            </div>
            <div className="border-l-2 px-3">
            <IconsCategories icon={<IoCarOutline/>} title="Garagem"/>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 my-4">
            <img src={bedrooms} className="h-28 " alt="bedroom"/>
            <img src={bath} className="h-28 " alt="bath"/>
            <img src={garage} className="h-28 " alt="garage"/>
          </div>
        </div> 

        <div className="">
        <img src={front} className="h-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
