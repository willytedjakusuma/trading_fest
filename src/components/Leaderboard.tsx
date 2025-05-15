import React from "react";
import Image from "next/image";
import Link from "next/link";
import Podium from "./Podium";

export default function Leaderboard() {
  const leaderboards = [
    {
      info: {
        src: "/images/rank_1.png",
        name: "Moch****",
        percent: "Rp 27,5m"
      },
      order: "order-1 md:order-2",
      key: "1",
      imageClass: "md:-translate-y-36"
    },
    {
      info: {
        src: "/images/rank_2.png",
        name: "Irna****",
        percent: "Rp 20,9m"
      },
      order: "order-2 md:order-1 md:translate-y-16",
      key: "2",
      imageClass: "md:-translate-y-36"
    },
    {
      info: {
        src: "/images/rank_3.png",
        name: "linatul****",
        percent: "Rp 5,8m"
      },
      order: "order-3 md:order-3 md:translate-y-24",
      key: "3",
      imageClass: "md:-translate-y-36"
    },
    
    
  ]
  return(
    <section className="leaderboard">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-8">
          <div className="col-span-3">
              <div className="triv-quest-reward-title py-8 text-3xl md:text-[45px] text-center">
                <span className="blue-underline">
                  LEADERBOARD SAAT INI
                </span>
              </div>
            </div>
        </div>
        <div className="row waktu-pendaftaran px-12">
          <div className="col-span-3">
            <div className="flex time-event p-4 md:p-[30px]">
              <div className="grid grid-cols-2 md:gap-8 items-center w-full">
                <div className="flex items-center justify-start space-x-2 md:space-x-24">
                  <div className="fa-regular fa-clock flex-shrink-0"></div>
                  <div className="time-font text-[24px] md:text-[36px]">EXPIRED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 leaderboard-name px-4 pt-24 md:pt-48">
          {leaderboards.map((leaderboard, index) => (
            <Podium 
              info={leaderboard.info} 
              order={leaderboard.order}
              key={leaderboard.key} 
              imageClass={leaderboard.imageClass}
            />
          ))}
        </div>
        <div className="podium p-10">
          <Image
            src="/images/rank.png"
            alt="Podium"
            layout="responsive"
            width={260}
            height={334}
          />
        </div>
        <div className="lihat-semua-container flex justify-center items-center pb-10">
          <div className="p-5">
            <Link href="" className="btn-daftar-sekarang">
              <span>Lihat Semua</span>
              <div className="fa-solid fa-angle-right"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}