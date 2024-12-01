import Image from "next/image";
import { IoAdd, IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex justify-between py-1 px-2 fixed top-0 left-0 right-0 bg-white z-50">
      <button className="relative w-6 h-6 overflow-hidden rounded-full">
        <Image src="/img1.png" fill={true} alt="profile" />
      </button>
      <button className="flex text-emerald-950 justify-between items-center basis-4/6 bg-slate-300 px-2 rounded-sm">
        <p>Search</p>
        <IoSearch />
      </button>
      <button>
        <IoAdd />
      </button>
    </div>
  );
}
