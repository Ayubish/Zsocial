import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoChatboxOutline,
  IoHeartOutline,
  IoShareOutline,
} from "react-icons/io5";
type Props = {
  profilepic: string;
  name: string;
  username: string;
  textpost: string;
  pics: any;
};
const Post = ({ profilepic, name, username, textpost, pics }: Props) => {
  return (
    <div className="max-w-screen-sm border-b pt-[2%]">
      <div className="flex justify-between px-[2%]">
        <div className="flex">
          {/* profile pictue */}
          <div className="w-10 h-10 relative">
            <Image
              src={profilepic}
              alt={name}
              fill={true}
              style={{ objectFit: "fill" }}
              className="rounded-full"
            />
          </div>
          {/* profile name and username */}
          <div className="pl-2 items-center">
            <p>{name}</p>
            <p className="leading-3 text-xs text-gray-900">@{username}</p>
          </div>
        </div>

        {/* Post menu */}
        <div className="grid justify-end">
          <BsThreeDots className="justify-self-end" />
          <p className="text-sm">2 mins</p>
        </div>
      </div>
      <div className="p-[2%]">
        <p>{textpost}</p>
      </div>
      {/* Post image container */}
      <div className="relative w-full">
        {pics.map((pic: any, index) => {
          return (
            <Image
              src={pic}
              layout="responsive"
              width={0}
              height={0}
              style={{
                objectFit: "contain",
              }}
              alt="Some shitty pics"
              key={index}
            />
          );
        })}
      </div>
      {/* Engages */}
      <div className="flex justify-between p-[2%]">
        <div className="inline-flex items-center gap-[2px] px-3 py-1 rounded-xl">
          <IoHeartOutline size={20} />
          <p className="font-medium text-sm">366</p>
        </div>
        <div className="inline-flex items-center gap-[2px] px-3 py-1 rounded-xl">
          <IoChatboxOutline size={20} />
          <p className="font-medium text-sm">366</p>
        </div>
        <div className="inline-flex items-center gap-[2px] px-3 py-1 rounded-xl">
          <IoBookmarkOutline size={20} />
          <p className="font-medium text-sm">366</p>
        </div>
        <div className="inline-flex items-center gap-[2px] px-3 py-1 rounded-xl">
          <IoShareOutline size={20} />
          <p className="font-medium text-sm">366</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
