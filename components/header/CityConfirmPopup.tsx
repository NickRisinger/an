"use client";

import { FC, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useLocalStorage } from "usehooks-ts";

interface IProps {
  setIsOpenModal(value: boolean): void;
}

const CityConfirmPopup: FC<IProps> = ({ setIsOpenModal }) => {
  const [isShowPopup, setShowPopup] = useLocalStorage("confirmPopup", true);
  const [userCity, setUserCity] = useLocalStorage("userCity", "");

  function confirm() {
    setShowPopup(false);
  }

  function refute() {
    setShowPopup(false);
    setIsOpenModal(true);
  }

  return (
    <Transition
      show={isShowPopup}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="hidden bg-white md:flex flex-col items-center absolute -left-2/3 top-10 w-[325px] px-4 pb-4 pt-5 rounded-[15px] shadow-[-4px_0px_33px_rgba(52,112,138,0.19)]">
        <span className="font-semibold text-xl leading-[27px]">{userCity}</span>
        <span className="font-medium text-xl leading-[27px] mt-[15px]">
          Искать в этом городе?
        </span>
        <div className="flex gap-x-3 mt-6 font-semibold leading-[22px]">
          <button
            className="bg-ared text-white py-3 px-12 rounded-[10px]"
            onClick={() => confirm()}
          >
            Да
          </button>
          <button
            className="py-3 px-[26px] border border-border2 rounded-[10px]"
            onClick={() => refute()}
          >
            Другой город
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default CityConfirmPopup;
