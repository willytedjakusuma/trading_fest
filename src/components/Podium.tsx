
import React from "react";
import Image from "next/image";
import Link from "next/link";

type podiumInfo = {
  src: string;
  name: string;
  percent: string;
}

type PodiumProps = {
  info: podiumInfo;
  order: string;
  imageClass: string;
  altText: string;
};

export default function Podium({ info, order, imageClass, altText }: PodiumProps) {
  const classname = `${order} card flex p-2 my-4 md:mx-16 md:relative grid grid-cols-2 md:grid-cols-1`

  const imageCustomClass = `${imageClass} rank !w-[80px] !h-[80px] my-4 md:!w-[166px] md:!h-[166px] md:overflow-visible`
  
  return(
    <div className={classname}>
      <div>
        <Image
          src={info.src}
          alt={altText}
          width={80}
          height={80}
          className={imageCustomClass}
          unoptimized
        />
      </div>
      <div className="mt-6 md:mt-12 text-left md:text-center mr-3">
        <span className="leaderboard-name  text-[24px] md:text-[32px]">{info.name}</span>
        <div className="percent text-[20px] md:text-[42px] pb-4 md:pb-[50px] mr-5">{info.percent}</div>
      </div>
    </div>
  )
}