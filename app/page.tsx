import Image from "next/image";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const city = cookieStore.get("city");

  return <main className="">{city?.value}</main>;
}
