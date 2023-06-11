"use client";

import Link from "next/link";
import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";
import { useLocalStorage, useOnClickOutside } from "usehooks-ts";

interface ICitySelectionProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

const CitySelectionModal: FC<ICitySelectionProps> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);
  const [userCity, setUserCity] = useLocalStorage("userCity", "");

  const regions = [
    {
      region: "Костромская область",
      offices: [
        { city: "Кострома", address: "ул. Никитская, д. 35" },
        { city: "Шарья", address: "ул. Октябрьская, 22 ТЦ Чайка (2 этаж)" },
        { city: "Нерехта", address: "ул. Октябрьская, 29 (2 этаж)" },
        { city: "Буй", address: "ул. 1917 года, 1" },
        { city: "Мантурово", address: "" },
        { city: "Галич", address: "ул. Ленина, 14" },
        { city: "Солигалич", address: "ул. В.Вакуровой, 41" },
        { city: "Волгореченск", address: "" },
        { city: "Нея", address: "" },
        { city: "Макарьев", address: "" },
        { city: "Чухлома", address: "ул. Советская, дом 14" },
        { city: "Кологрив", address: "" },
      ],
    },
    {
      region: "Ярославская область",
      offices: [
        {
          city: "Ярославль",
          address: "​ТЦ Бутусовский​, ул. Победы 38/27​, 312 офис, 3 этаж",
        },
        { city: "Гаврилов-Ям", address: "" },
        { city: "Данилов", address: "" },
        { city: "Переславль-Залесский", address: "" },
        { city: "Ростов", address: "ул. Достоевского, 19а, офис 1" },
        { city: "Рыбинск", address: "" },
        { city: "Тутаев", address: "" },
        { city: "Углич", address: "" },
      ],
    },
    {
      region: "Ивановская область",
      offices: [
        { city: "Иваново", address: "" },
        { city: "Вичуга", address: "" },
        { city: "Кинешма", address: "" },
        { city: "Приволжск", address: "" },
        { city: "Родники", address: "" },
        { city: "Тэйково", address: "" },
        { city: "Фурманов", address: "" },
        { city: "Шуя", address: "" },
        { city: "Юрьевец", address: "" },
        { city: "Кохма", address: "" },
      ],
    },
  ];

  useOnClickOutside(modalRef, () => setIsOpen(false));

  return createPortal(
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="lg:bg-ablack lg:flex lg:items-center lg:justify-center lg:bg-opacity-30 fixed top-0 w-full h-full z-[999]">
        <div
          ref={modalRef}
          className="relative h-full w-full px-4 py-6 flex flex-col bg-white lg:rounded-[15px] lg:h-fit lg:w-[772px] lg:p-12"
        >
          <svg
            onClick={() => setIsOpen(false)}
            className="h-[30px] w-[30px] absolute top-4 right-4 cursor-pointer"
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="9.5459"
              y1="19.7836"
              x2="20.3295"
              y2="9.00003"
              stroke="#2F2F2F"
              strokeWidth="0.94887"
              strokeLinecap="round"
            />
            <line
              x1="9.67095"
              y1="9.00049"
              x2="20.4546"
              y2="19.7841"
              stroke="#2F2F2F"
              strokeWidth="0.94887"
              strokeLinecap="round"
            />
          </svg>

          <h3 className="font-semibold mb-6 lg:font-bold lg:text-3xl">
            Выбор города
          </h3>

          <div className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 0C0.671573 0 0 0.671573 0 1.5L6.58743e-05 18.5003C0.000102415 19.3287 0.671662 20 1.50006 20H18.5C19.3284 20 20 19.3284 20 18.5V9C20 8.17157 19.3284 7.5 18.5 7.5H11V1.5C11 0.671573 10.3284 0 9.5 0H1.5ZM9.5 1.5V18.5H1.5V1.5H9.5ZM18.5 18.5H11V9H18.5V18.5ZM12.5 11C12.5 10.7239 12.7239 10.5 13 10.5H16.5C16.7761 10.5 17 10.7239 17 11V11.5C17 11.7761 16.7761 12 16.5 12H13C12.7239 12 12.5 11.7761 12.5 11.5V11ZM13 13C12.7239 13 12.5 13.2239 12.5 13.5V14C12.5 14.2761 12.7239 14.5 13 14.5H16.5C16.7761 14.5 17 14.2761 17 14V13.5C17 13.2239 16.7761 13 16.5 13H13ZM12.5 16C12.5 15.7239 12.7239 15.5 13 15.5H16.5C16.7761 15.5 17 15.7239 17 16V16.5C17 16.7761 16.7761 17 16.5 17H13C12.7239 17 12.5 16.7761 12.5 16.5V16ZM3 8.5C3 8.22386 3.22386 8 3.5 8H4.5C4.77614 8 5 8.22386 5 8.5V11C5 11.2761 4.77614 11.5 4.5 11.5H3.5C3.22386 11.5 3 11.2761 3 11V8.5ZM3.5 13C3.22386 13 3 13.2239 3 13.5V16C3 16.2761 3.22386 16.5 3.5 16.5H4.5C4.77614 16.5 5 16.2761 5 16V13.5C5 13.2239 4.77614 13 4.5 13H3.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H4.5C4.77614 3 5 3.22386 5 3.5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V3.5ZM6.5 3C6.22386 3 6 3.22386 6 3.5V6C6 6.27614 6.22386 6.5 6.5 6.5H7.5C7.77614 6.5 8 6.27614 8 6V3.5C8 3.22386 7.77614 3 7.5 3H6.5ZM6 8.5C6 8.22386 6.22386 8 6.5 8H7.5C7.77614 8 8 8.22386 8 8.5V11C8 11.2761 7.77614 11.5 7.5 11.5H6.5C6.22386 11.5 6 11.2761 6 11V8.5ZM6.5 13C6.22386 13 6 13.2239 6 13.5V16C6 16.2761 6.22386 16.5 6.5 16.5H7.5C7.77614 16.5 8 16.2761 8 16V13.5C8 13.2239 7.77614 13 7.5 13H6.5Z"
                fill="#E2061A"
              />
            </svg>
            <span className="text-base font-medium">- есть офис</span>
          </div>

          <div className="flex flex-col gap-y-8 mt-6 lg:mt-8">
            {regions.map(({ region, offices }) => (
              <div className="flex flex-col gap-y-5" key={region}>
                <span className="font-bold text-xl text-arbgray">{region}</span>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-6">
                  {offices.map((office) => (
                    <div
                      className="flex gap-2 cursor-pointer group"
                      key={office.city}
                    >
                      <span
                        onClick={() => setUserCity(office.city)}
                        className={`font-medium hover:text-ared cursor-pointer ${
                          userCity == office.city
                            ? "text-ared cursor-default"
                            : null
                        }`}
                      >
                        {office.city}
                      </span>
                      {office.address && (
                        <div className="relative group">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            v-if="office.address"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.5 0C0.671573 0 0 0.671573 0 1.5L6.58743e-05 18.5003C0.000102415 19.3287 0.671662 20 1.50006 20H18.5C19.3284 20 20 19.3284 20 18.5V9C20 8.17157 19.3284 7.5 18.5 7.5H11V1.5C11 0.671573 10.3284 0 9.5 0H1.5ZM9.5 1.5V18.5H1.5V1.5H9.5ZM18.5 18.5H11V9H18.5V18.5ZM12.5 11C12.5 10.7239 12.7239 10.5 13 10.5H16.5C16.7761 10.5 17 10.7239 17 11V11.5C17 11.7761 16.7761 12 16.5 12H13C12.7239 12 12.5 11.7761 12.5 11.5V11ZM13 13C12.7239 13 12.5 13.2239 12.5 13.5V14C12.5 14.2761 12.7239 14.5 13 14.5H16.5C16.7761 14.5 17 14.2761 17 14V13.5C17 13.2239 16.7761 13 16.5 13H13ZM12.5 16C12.5 15.7239 12.7239 15.5 13 15.5H16.5C16.7761 15.5 17 15.7239 17 16V16.5C17 16.7761 16.7761 17 16.5 17H13C12.7239 17 12.5 16.7761 12.5 16.5V16ZM3 8.5C3 8.22386 3.22386 8 3.5 8H4.5C4.77614 8 5 8.22386 5 8.5V11C5 11.2761 4.77614 11.5 4.5 11.5H3.5C3.22386 11.5 3 11.2761 3 11V8.5ZM3.5 13C3.22386 13 3 13.2239 3 13.5V16C3 16.2761 3.22386 16.5 3.5 16.5H4.5C4.77614 16.5 5 16.2761 5 16V13.5C5 13.2239 4.77614 13 4.5 13H3.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H4.5C4.77614 3 5 3.22386 5 3.5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V3.5ZM6.5 3C6.22386 3 6 3.22386 6 3.5V6C6 6.27614 6.22386 6.5 6.5 6.5H7.5C7.77614 6.5 8 6.27614 8 6V3.5C8 3.22386 7.77614 3 7.5 3H6.5ZM6 8.5C6 8.22386 6.22386 8 6.5 8H7.5C7.77614 8 8 8.22386 8 8.5V11C8 11.2761 7.77614 11.5 7.5 11.5H6.5C6.22386 11.5 6 11.2761 6 11V8.5ZM6.5 13C6.22386 13 6 13.2239 6 13.5V16C6 16.2761 6.22386 16.5 6.5 16.5H7.5C7.77614 16.5 8 16.2761 8 16V13.5C8 13.2239 7.77614 13 7.5 13H6.5Z"
                              fill="#E2061A"
                            />
                          </svg>
                          <div className="hidden left-[-28px] group-hover:flex before:bottom-[-10px] before:bg-white before:rotate-45 before:border before:border-solid before:border-b-border2 before:border-r-border2 before:outline-none before:rounded-br-sm before:border-t-0 before:border-l-0 before:absolute before:transform absolute bottom-[calc(100%_+_19px)] before:content-[''] before:w-5 before:h-5 bg-white border border-border2 border-solid rounded-lg px-6 py-3 whitespace-nowrap">
                            <Link href="/contacts" className="hover:text-ared">
                              {office.address}
                            </Link>
                            <div className="bottom-[-20px] absolute min-w-[100px] left-0 h-5"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Transition>,
    document.body
  );
};

export default CitySelectionModal;
