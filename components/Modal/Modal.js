import { Icon } from "@iconify/react";
import React from "react";

const Modal = ({ title, id, descrizione, wine, fork, tempo, price }) => {
  return (
    <>
      <button
        className="underline"
        onClick={() => document.getElementById(id).showModal()}
      >
        Dettagli
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box !bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 !text-main">
              ✕
            </button>
          </form>
          <div className="flex items-center justify-between pb-2 mt-6 border-b border-main/20">
            <h3 className="text-lg font-bold uppercase">{title}</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {wine && (
                  <Icon
                    icon="game-icons:wine-glass"
                    className="w-6 h-6 text-main/80"
                  />
                )}
                {fork && (
                  <Icon
                    icon="circum:fork-knife"
                    className="w-6 h-6 text-main/80"
                  />
                )}
              </div>

              <div className="flex items-center gap-1 text-main/80">
                <Icon icon="lets-icons:time-light" className="w-6 h-6 " />
                {tempo}
              </div>
            </div>
          </div>

          <p className="py-4 !text-main/80">{descrizione}</p>
          <div className="items-center justify-between mt-4 ">
            <p className="py-4  text-[16px] text-main/80">
              <span className="font-bold ">Prezzo:</span> {price}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
