import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Leaderboard() {
  return(
    <section className="leaderboard">
      <div className="container mx-auto px-2">
        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-8">
          <div className="col-span-3">
              <div className="triv-quest-reward-title py-8 text-center">
                <span className="blue-underline">
                  LEADERBOARD SAAT INI
                </span>
              </div>
            </div>
        </div>
        <div className="row waktu-pendaftaran px-12">
          <div className="col-span-3">
            <div className="flex time-event">
              <div className="row grid grid-cols-2 gap-8">
                <div className="items-end">
                  <div className="fa-regular fa-clock"></div>
                </div>
                <div className="items-start">
                  <div className="time-font">EXPIRED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-3 leaderboard-name pt-48">
          <div className="card rank-2 mx-16 translate-y-10 relative">
            <Image
              src="/images/rank_2.png"
              alt="Rank 2"
              width={40}
              height={40}
              className="rank absolute -translate-y-20 overflow-visible"
              unoptimized
            />
            <div className="leaderboard-name">Irna***</div>
            <div className="percent">Rp 20,9m</div>
          </div>
          <div className="card rank-1 mx-16 relative">
            <div>
              <Image
                src="/images/rank_1.png"
                alt="Rank 1"
                width={40}
                height={40}
                className="rank absolute -translate-y-20 overflow-visible"
                unoptimized
              />
              <div className="leaderboard-name">Moch****</div>
              <div className="percent">Rp 27,5m</div>
            </div>
          </div>
          <div className="card rank-3 mx-16 translate-y-20 relative">
            <div>
              <Image
                src="/images/rank_3.png"
                alt="Rank 3"
                width={40}
                height={40}
                className="rank absolute -translate-y-20 overflow-visible"
                unoptimized
              />
              <div className="leaderboard-name">linatul****</div>
              <div className="percent">Rp 5,8m</div>
            </div>
          </div>
        </div>
        <div className="row podium py-10">
          <Image
            src="/images/rank.png"
            alt="Podium"
            layout="responsive"
            width={260}
            height={334}
          />
        </div>
        <div className="row lihat-semua-container flex justify-center items-center">
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