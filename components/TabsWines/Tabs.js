import React from "react";
import Nebbiolo from "@/public/assets/vinirossi/nebbiolo.png";
import Fumin from "@/public/assets/vinirossi/fumin.png";
import Merlot from "@/public/assets/vinirossi/merlot.png";
import Pinot from "@/public/assets/vinirossi/pinot_nero.png";
import Cornalin from "@/public/assets/vinirossi/cornalin.png";
import Syrah from "@/public/assets/vinirossi/syrah.png";
import Torrette from "@/public/assets/vinirossi/torrette.png";

import Chardonnay from "@/public/assets/vinibianchi/chardonnay_cb.png";
import Chardonnay2 from "@/public/assets/vinibianchi/chardonnay.png";
import Neblu from "@/public/assets/vinibianchi/neblu.png";
import Neige from "@/public/assets/vinibianchi/neige.png";
import Petite from "@/public/assets/vinibianchi/petite.png";
import { useState } from "react";
import Image from "next/image";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("London");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="pt-10">
      <div className="tabs !pl-0">
        <button
          className={
            activeTab === "London" ? "tab-bordered tab-active" : "tab-bordered"
          }
          onClick={() => openCity("London")}
        >
          Rossi
        </button>
        <button
          className={
            activeTab === "Paris" ? "tab-bordered tab-active" : "tab-bordered"
          }
          onClick={() => openCity("Paris")}
        >
          Bianchi
        </button>
        <button
          className={
            activeTab === "Tokyo" ? "tab-bordered tab-active" : "tab-bordered"
          }
          onClick={() => openCity("Tokyo")}
        >
          Rosè
        </button>
        <button
          className={
            activeTab === "Rome" ? "tab-bordered tab-active" : "tab-bordered"
          }
          onClick={() => openCity("Rome")}
        >
          Dessert e Bollicine
        </button>
      </div>
      <div
        id="London"
        className={`w-full py-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ${
          activeTab === "London" ? "tabcontent" : "tabcontent hidden"
        }`}
      >
        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl hover:bg-main" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Nebbiolo}
          />
          {/* <p className="w-[70%] left-12 bottom-6 absolute text-center text-white text-[22.38px] font-bold  leading-snug">
                Nebbiolo Sommet Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl card" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Fumin}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px]  relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl card" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Merlot}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px]  relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Cornalin}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px]  relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Pinot}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px]  relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Syrah}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px]  relative">
          <div className="w-full h-[400px] fxl:h-[500px]  left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Torrette}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>
      </div>

      <div
        id="Paris"
        className={`w-full py-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ${
          activeTab === "Paris" ? "tabcontent" : "tabcontent hidden"
        }`}
      >
        <div className="w-full h-[400px] fxl:h-[500px] relative snap-center">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay}
          />
          {/* <p className="w-[70%] left-12 bottom-6 absolute text-center text-white text-[22.38px] font-bold  leading-snug">
                Nebbiolo Sommet Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay2}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neblu}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neige}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Petite}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Syrah}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Torrette}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>
      </div>

      <div
        id="Tokyo"
        className={`w-full py-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ${
          activeTab === "Tokyo" ? "tabcontent" : "tabcontent hidden"
        }`}
      >
        <div className="w-full h-[400px] fxl:h-[500px] relative snap-center">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay}
          />
          {/* <p className="w-[70%] left-12 bottom-6 absolute text-center text-white text-[22.38px] font-bold  leading-snug">
                Nebbiolo Sommet Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay2}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neblu}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neige}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Petite}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Syrah}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Torrette}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>
      </div>
      <div
        id="Rome"
        className={`w-full py-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ${
          activeTab === "Rome" ? "tabcontent" : "tabcontent hidden"
        }`}
      >
        <div className="w-full h-[400px] fxl:h-[500px] relative snap-center">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay}
          />
          {/* <p className="w-[70%] left-12 bottom-6 absolute text-center text-white text-[22.38px] font-bold  leading-snug">
                Nebbiolo Sommet Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Chardonnay2}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neblu}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Neige}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Petite}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Syrah}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>

        <div className="w-full h-[400px] fxl:h-[500px] relative">
          <div className="w-full h-[400px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl" />

          <Image
            className="object-contain left-20 top-[3.8rem] absolute w-[50%] h-[80%]"
            src={Torrette}
          />
          {/* <p className="w-[70%] left-12 bottom-8 absolute text-center text-main text-[20px] font-bold  leading-snug">
                Fumin La Cor Valle d’Aosta D.O.P.
              </p> */}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
