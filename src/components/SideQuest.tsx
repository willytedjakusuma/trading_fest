
import React from "react";
import Image from "next/image";
import Link from "next/link";

type SideQuestProps = {
  src: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  subtitle4: string;
  isWeekly: boolean;
};

export default function SideQuest({ src, title, subtitle1, subtitle2, subtitle3, subtitle4, isWeekly }: SideQuestProps) {
  return (
    <section className="side-quest-bg mt-20 mx-3 md:mt-10 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start side-quest-container">
        <div className="relative px-10 pt-10 md:px-10 flex flex-col justify-between">
          <Link href="https://bit.ly/sidequestsubmission">
            <div className="side-quest text-[27px] md:text-[40px]">
              <div>{title}</div>
            </div>
            <div className="lihat-info-detail text-[19px] md:text-[28px]">
              {isWeekly ?
                <>
                  <span>{subtitle1}</span>
                  <div>{subtitle2}</div>
                  <div>{subtitle3}</div>
                  <p className="font-extrabold">{subtitle4}</p>
                </>
                :
                <>
                  <span>{subtitle1}</span>
                  <div className="fa-solid fa-angle-right"></div>
                  <div>{subtitle2}</div>
                  <p className="font-extrabold">{subtitle3}</p>
                </>
              }
            </div>
          </Link>
        </div>
        <div className="relative z-0 flex justify-center md:block mx-6">
          <div className="w-60 h-60 md:absolute md:-top-10 md:right-0 md:w-[450px] md:h-[450px]">
            <Image
              src={src}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="object-contain md:-translate-y-14 md:translate-x-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}