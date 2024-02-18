import React from "react";
import TitleSection from "./elements/title-section";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import InputItem from "../ui/input";
import { Form, Button } from "antd";

function ContactSection() {
  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto py-20  ">
        <TitleSection
          Subtitle="contacto"
          title="Entre em contacto conosco agora"
          align="text-center"
        />
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 mt-12 gap-10">
          <div className="">
            <div className=" contact-form flex items-center px-9 h-28 rounded-xl my-5 bg-white">
              <div className="bg-[#f2f3f5] p-5 rounded-xl">
                <FaHouseChimney className="text-2xl text-gray-600" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-medium mb-2">
                  Endereço da empresa
                </h1>
                <p className="text-sm">Vilanculos, Rua XXX, Inhambane</p>
              </div>
            </div>

            <div className="bg-white flex items-center px-9 contact-form h-28 rounded-xl my-5">
              <div className="bg-[#f2f3f5] p-5 rounded-xl">
                <FaPhoneAlt className="text-2xl text-gray-600" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-medium mb-2">
                  Contacto da empresa
                </h1>
                <p className="text-sm">+258 867 622 864</p>
              </div>
            </div>

            <div className="bg-white flex items-center px-9 contact-form h-28 rounded-xl my-5">
              <div className="bg-[#f2f3f5] p-5 rounded-xl">
                <FaEnvelope className="text-2xl text-gray-600" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-medium mb-2">Email da empresa</h1>
                <p className="text-sm">contact@acresidencial.co.mz</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-600 text-md tracking-widest leading-loose mb-4">Segue-nos nas redes socias</p>
            <div className="flex flex-wrap gap-10 gap-y-5 ">
                <a href="#" className="bg-[#f2f3f5] p-5 border-[1px] border-gray-500 rounded-xl hover:border-golden-600 group">
                  <FaFacebookF className="group-hover:text-golden-600 text-lg text-gray-600"/>
                </a>
                <a href="#" className="bg-[#f2f3f5] p-5 border-[1px] border-gray-500 rounded-xl hover:border-golden-600 group">
                  <FaInstagram className="group-hover:text-golden-600 text-lg text-gray-600"/>
                </a>
                <a href="#" className="bg-[#f2f3f5] p-5 border-[1px] border-gray-500 rounded-xl hover:border-golden-600 group">
                  <FaWhatsapp className="group-hover:text-golden-600 text-lg text-gray-600"/>
                </a>
            </div>
            </div>
          </div>

          <div className="col-span-2 border-[1.5px] p-12 rounded-xl border-gray-300">
            <Form name="validateOnly" layout="vertical" autoComplete="off">
              <div className="grid grid-cols-2 gap-4 sx:grid-cols-1">
                <InputItem type="text" label="Nome" field_require={true} name="name" inputStyle="h-10" />
                <InputItem type="text" label="Apelido" field_require={true} name="surname" inputStyle="h-10"/>
              </div>
                <InputItem type="text" label="Email" field_require={true} name="email" inputStyle="h-10" />
                <InputItem type="text" label="Telefone" prefix field_require={true} name="phone" inputStyle="h-10"/>
                <InputItem type="textarea" label="Mensagem" field_require={true} name="message" />

                <button type="submit" className="w-full h-10 bg-golden-600 rounded-md text-lg mt-4 text-white hover:bg-golden-500">Enviar</button>

            </Form>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default ContactSection;
