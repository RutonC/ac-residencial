import React from "react";
import { BiBath } from "react-icons/bi";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import IconsCategories from "./icons-categories";

function ProductCard() {
  return (
    <div>
      <a
        href="#"
        className="block rounded-lg p-4 shadow-lg shadow-gray-100 relative"
      >
        <div className="bg-[url(https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] h-56 w-full bg-cover rounded-md object-cover">
          <span className="bg-agree text-white px-4 py-2 rounded-md font-medium absolute right-9 top-9">
            Disponível
          </span>
        </div>

        <div className="mt-2">
          <span className="text-md font-medium text-primary-800">
            MZN 2.500,00/<span className="text-sm">Dia</span>
          </span>
          <h1 className="text-lg font-semibold hover:text-primary-800">
            Casa da praia
          </h1>
          <div className="flex flex-row gap-12 mt-6">
            <div className="">
              <div className="">
                <div className="flex flex-row items-center gap-x-1 mb-3">
                  <span className="text-sm text-gray-500">3</span>
                  <IoBedOutline />
                </div>
                <h4 className="text-sm text-gray-500 font-medium">Camas</h4>
              </div>
            </div>
            <div className="border-l-[1.5px] px-3">
              <IconsCategories icon={<BiBath />} title="Casas de banhos" />
            </div>
            <div className="border-l-[1.5px] px-3">
              <IconsCategories icon={<IoCarOutline />} title="Garagem" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
