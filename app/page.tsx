import { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Квартиры АН Арбат в Костроме | Продажа недвижимости, риэлторы",
  description:
    "АН Арбат в Костроме продажа квартир, коттеджей, земельных участка. Купить квартиру в новостройках в АН Арбат. Сопровождение сделки, гарантия чистоты. Только проверенные объекты.",
  keywords: "Квартиры АН Арбат в Костроме | Продажа недвижимости, риэлторы",
};

export default function Home() {
  return <main className="">Main</main>;
}
