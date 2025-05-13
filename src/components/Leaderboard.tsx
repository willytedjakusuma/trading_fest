import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Leaderboard() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 leaderboard-name pt-24 md:pt-48">
          <div className="order-1 md:order-2 card rank-1 md:mx-16 md:relative grid grid-cols-2 md:grid-cols-1 my-4">
            <div>
              <Image
                src="/images/rank_1.png"
                alt="Rank 1"
                width={80}
                height={80}
                className="rank !w-[80px] !h-[80px] my-12 md:!w-[166px] md:!h-[166px] md:-translate-y-36 md:overflow-visible"
                unoptimized
              />
            </div>
            <div className="pt-12">
              <span className="leaderboard-name text-[24px] md:text-[32px]">Moch****</span>
              <div className="percent text-[28px] md:text-[42px] pb-4 md:pb-[50px]">Rp 27,5m</div>
            </div>
          </div>
          <div className="order-2 md:order-1 card rank-2 md:mx-16 md:relative grid grid-cols-2 md:grid-cols-1 my-4 md:translate-y-16">
            <div>
              <Image
                src="/images/rank_2.png"
                alt="Rank 2"
                width={40}
                height={40}
                className="rank !w-[80px] !h-[80px] my-12 md:!w-[166px] md:!h-[166px] md:-translate-y-28 md:overflow-visible"
                unoptimized
              />
            </div>
            <div className="pt-12">
              <span className="leaderboard-name leaderboard-name text-[24px] md:text-[32px]">Irna****</span>
              <div className="percent text-[28px] md:text-[42px] pb-4 md:pb-[50px]">Rp 20,9m</div>
            </div>
          </div>
          <div className="order-3 md:order-3 card rank-3 md:mx-16 md:relative grid grid-cols-2 md:grid-cols-1 my-4 md:translate-y-24">
            <div>
              <Image
                src="/images/rank_3.png"
                alt="Rank 3"
                width={40}
                height={40}
                className="rank !w-[80px] !h-[80px] my-12 md:!w-[166px] md:!h-[166px] md:-translate-y-28 md:overflow-visible"
                unoptimized
              />
            </div>
            <div className="pt-12">
              <span className="leaderboard-name text-[28px] md:text-[42px] pb-4 md:pb-[50px]">linatul****</span>
              <div className="percent text-[28px] md:text-[42px] pb-4 md:pb-[50px]">Rp 5,8m</div>
            </div>
          </div>
        </div>
        <div className="hidden md:block podium py-10">
          <Image
            src="/images/rank.png"
            alt="Podium"
            layout="responsive"
            width={260}
            height={334}
          />
        </div>
        <div className="lihat-semua-container flex justify-center items-center">
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