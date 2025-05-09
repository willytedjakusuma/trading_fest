
import React from "react";
import Image from "next/image";

type RewardItemProps = {
  src: string;
  title: string;
};

export default function RewardItem({ src, title }: RewardItemProps) {
  return (
    <div className="reward flex flex-col items-center">
      <div className="w-full h-64 md:h-80 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <div className="title-reward text-center mt-2">
        <p>{title}</p>
      </div>
    </div>
  );
}