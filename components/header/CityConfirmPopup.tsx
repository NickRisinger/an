import { FC } from "react";

interface IProps {
  maybeCity: string;
}

const CityConfirmPopup: FC<IProps> = ({ maybeCity, refute }) => {
  const city = localStorage.getItem("city");

  function confirm() {
    localStorage.setItem("city", maybeCity);
  }

  return (
    <div className="hidden bg-white md:flex flex-col items-center absolute -left-2/3 top-10 w-[325px] px-4 pb-4 pt-5 rounded-[15px] shadow-[-4px_0px_33px_rgba(52,112,138,0.19)]">
      <span className="font-semibold text-xl leading-[27px]">{maybeCity}</span>
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
  );
};

export default CityConfirmPopup;
