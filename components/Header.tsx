"use client";

import Link from "next/link";
import { FC, useState } from "react";

interface IHeaderProps {
  cityCookie: string;
}

const Header: FC<IHeaderProps> = ({ cityCookie }) => {
  const [city, setCity] = useState(cityCookie);

  return (
    <header className="bg-white">
      <div className="container">
        <div className="relative flex h-11 items-center justify-between py-[7px] lg:py-10">
          <div className="flex items-center lg:gap-[70px]">
            <Link href="/">
              <svg
                className="w-[88px] h-[24px] xl:w-[123px] xl:h-[33px]"
                width="205"
                height="55"
                viewBox="0 0 205 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M192.56 44.254V16.4376H205V10.746H172.803V16.4376H185.245V44.254H192.56ZM162.612 29.0822V36.6681C162.612 37.9317 161.988 38.5646 160.736 38.5646H150.421C147.92 38.5646 146.917 36.9835 146.917 33.8212C146.917 30.6612 147.92 29.08 150.421 29.08H162.612V29.0822ZM141.793 10.746V16.4376H157.986C161.111 16.4376 162.612 18.08 162.612 21.2423V23.3928H147.608C141.982 23.3928 139.355 27.5011 139.355 33.8234C139.355 40.7786 141.982 44.2562 147.608 44.2562H164.299C168.05 44.2562 169.925 42.3597 169.925 38.5668V20.6116C169.925 14.9222 166.863 10.7482 160.611 10.7482H141.793V10.746ZM111.158 17.8282H120.661C126.913 17.8282 128.037 22.7599 128.037 27.8164C128.037 34.7695 126.913 38.9413 119.407 38.9413C114.407 38.9413 111.156 36.92 111.156 31.2305V17.8282H111.158ZM133.666 5.68943V0H115.847C107.722 0 103.843 4.86821 103.843 13.087V31.2305C103.843 41.9765 108.908 44.6329 119.535 44.6329C132.665 44.6329 135.602 39.826 135.602 27.8164C135.602 17.0683 132.102 12.1388 122.285 12.1388H111.158C111.158 7.08222 114.221 5.68943 119.223 5.68943H133.666ZM75.6463 18.08C75.6463 17.007 76.335 16.4376 77.5217 16.4376H83.7111C90.7754 16.4376 91.5269 21.1153 91.5269 27.4354C91.5269 33.7577 90.7754 38.5646 83.7111 38.5646H75.6463V18.08ZM73.9593 10.746C70.2084 10.746 68.333 12.6424 68.333 16.4376V55H75.6463V44.254H85.5237C96.1527 44.254 99.0915 37.5529 99.0915 27.4354C99.0915 17.3223 96.1549 10.746 85.5237 10.746H73.9593Z"
                  fill="#DF0000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.08506 0H61.2483C62.3998 0 63.3333 0.933511 63.3333 2.08506V52.9149C63.3333 54.0665 62.3998 55 61.2483 55H2.08505C0.93351 55 0 54.0665 0 52.9149V2.08506C0 0.933511 0.933511 0 2.08506 0ZM40.0474 37.1119V29.087V29.0847H27.1409C24.4955 29.0847 23.434 30.7573 23.434 34.1003C23.434 37.4455 24.4955 39.1182 27.1409 39.1182H38.0622C39.3849 39.1182 40.0474 38.4486 40.0474 37.1119ZM18.0102 15.7105V9.69185H37.9292C44.5475 9.69185 47.7889 14.1074 47.7889 20.1261V39.1205C47.7889 43.1329 45.8037 45.1392 41.8332 45.1392H24.1654C18.2073 45.1392 15.4289 41.4603 15.4289 34.1026C15.4289 27.4144 18.2073 23.0683 24.1654 23.0683H40.0474V20.7933C40.0474 17.4481 38.4587 15.7105 35.1484 15.7105H18.0102Z"
                  fill="#DF0000"
                />
              </svg>
            </Link>
            <div className="flex relative items-center gap-[5px] lg:gap-[10px] cursor-pointer">
              <span className="font-medium text-xs lg:text-base hover:text-ared">
                {city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;