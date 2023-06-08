import { FC } from "react";
import { createPortal } from "react-dom";

const CitySelectionModal: FC = () => {
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

  return createPortal(
    <div className="lg:bg-ablack lg:flex lg:items-center lg:justify-center lg:bg-opacity-30 fixed top-0 w-full h-full z-[999]">
      <div className="relative h-full w-full px-4 py-6 flex flex-col bg-white lg:rounded-[15px] lg:h-fit lg:w-[772px] lg:p-12">
        <h3 className="font-semibold mb-6 lg:font-bold lg:text-3xl">
          Выбор города
        </h3>
        <div className="flex flex-col gap-y-8 mt-6 lg:mt-8">
          {regions.map(({ region, offices }) => (
            <div className="flex flex-col gap-y-5" key={region}>
              <span className="font-bold text-xl text-arbgray">{region}</span>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-6">
                {offices.map((office) => (
                  <div className="flex flex-col gap-y-5" key={office.city}>
                    <span className="font-medium group-hover:text-ared">
                      {office.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CitySelectionModal;
