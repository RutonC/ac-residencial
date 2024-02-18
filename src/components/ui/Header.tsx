import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import {UserOutlined} from '@ant-design/icons'
import ModalUi from "./modal";
import Login from "./login";
import SignUp from "./sign-up";
import {Tabs, TabsProps} from 'antd'
import { PiLockKeyOpenLight,PiUserPlus } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";

const items: TabsProps["items"] = [
{
  key:"1",
  label:<span className="flex gap-2 items-center text-lg font-medium hover:text-golden-600"><PiLockKeyOpenLight /> Entrar</span>,
  children:<Login/>
},
{
  key:"2",
  label:<span className="flex gap-2 items-center text-lg font-medium hover:text-golden-600"><PiUserPlus /> Inscrever-se</span>,
  children:<SignUp/>,
}
]




function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSign, setIsOpenSign] = useState<boolean>(false);

  const handlerLogin = () => {
      setIsOpen(true)
      setIsOpenSign(false);
  }
  const handlerCancel= () => {
      setIsOpen(false)
  }

  
  return (
    <header className="bg-white">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a href="/">
            <span className="sr-only">Inicio</span>
            <img src={logo} className="mr-3 h-12 sm:h-16" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-16 text-sm">
                <li>
                  <a href="/" className="text-gray-500 transition hover:text-golden-600/75">Início</a>
                </li>
                <li>
                  <a href="/admin" className="text-gray-500 transition hover:text-golden-600/75">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 transition hover:text-golden-600/75">Contacto</a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <UserOutlined className="cursor-pointer"onClick={handlerLogin}/>
                <ModalUi open={isOpen} onCancel={handlerCancel}>
                  <Tabs defaultActiveKey="1" items={items} tabBarStyle={{}}/>
                </ModalUi>
                
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
