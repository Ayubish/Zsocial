import Link from "next/link";
import {
  IoAdd,
  IoChatbubble,
  IoHome,
  IoNotifications,
  IoPeople,
  IoPerson,
} from "react-icons/io5";

export default function () {
  return (
    <div className="flex fixed justify-between items-center bottom-0 left-0 right-0 bg-white p-3 px-5">
      <Link href={"/feeds"}>
        <IoHome />
      </Link>
      <Link href={"/feeds"}>
        <IoPeople />
      </Link>
      <Link href={"/feeds"}>
        <IoAdd size={26} />
      </Link>
      <Link href={"/feeds"}>
        <IoChatbubble />
      </Link>
      <Link href={"/feeds"}>
        <IoPerson />
      </Link>
    </div>
  );
}
