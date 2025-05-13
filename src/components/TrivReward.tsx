import React from "react";
import Image from "next/image";
import Link from "next/link";
import RewardItem from "./RewardItem";

export default function TrivReward() {
  const rewards = [
    { src: "/images/winner_1_prize.png", title: "Motor Vario" },
    { src: "/images/winner_2_prize.png", title: "Macbook Air M1 2020" },
    { src: "/images/winner_3_prize.png", title: "Samsung Galaxy Tab S7+" },
    { src: "/images/winner_4_prize.png", title: "Samsung S22 5G" },
    { src: "/images/winner_5_prize.png", title: "Samsung S21 FE 5G" },
    { src: "/images/winner_6_prize.png", title: "Samsung S20 FE" },
  ];

  return(
    <section className="triv-reward py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="order-1 md:order-3 relative w-full h-64 md:h-[500px]">
            <Image
              src="/images/prize_combined.png"
              alt="Triv Reward"
              fill
              className="object-contain"
              unoptimized
            />
            <div className="pb-5"></div>
          </div>
          <div className="order-2 md:order-1">
            <div className="semuabisamenang-reward text-[23px] md:text-[36px]  text-center md:text-left">
             #SemuaBisaMenang karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan !
            </div>
            <div className="bukan-dari-trading-volume text-2xl md:text-[28px]  text-center md:text-left">
              Mulai trading hanya dengan 50rb rupiah di Triv dan dapatkan hadiahnya.
            </div>
          </div>
          <div className="order-5 md:col-span-2 pb-5"></div>
          <div className="order-6 md:col-span-2 shadow-bottom w-full h-[40px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="sm:grid-cols-2 md:col-span-3">
            <div className="triv-quest-reward-title py-8 text-3xl md:text-[45px]  text-center">
              <span className="blue-underline">TRIV QUEST REWARD</span>
            </div>
          </div>
          {rewards.map((reward, index) => (
            <RewardItem key={index} src={reward.src} title={reward.title} />
          ))}

        </div>

        <section className="side-quest-bg mt-10 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start side-quest-container">
            <div className="relative p-10 flex flex-col justify-between">
              <Link href="https://bit.ly/sidequestsubmission">
                <div className="side-quest">
                  <div>SIDE QUEST</div>
                </div>
                <div className="lihat-info-detail">
                  <span>Klik untuk lihat info detail </span>
                  <div className="fa-solid fa-angle-right"></div>
                  <div>Juara Favorit</div>
                  <p className="font-extrabold">Xiaomi Watch S1 Active</p>
                </div>
              </Link>
            </div>
            <div className="relative z-0 flex justify-center md:block">
              <div className="w-60 h-60 md:absolute md:-top-10 md:right-0 md:w-[450px] md:h-[450px]">
                <Image
                  src="/images/side_quest.png"
                  alt="Side Quest"
                  layout="fill"
                  objectFit="contain"
                  className="object-contain md:-translate-y-14 md:translate-x-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="side-quest-bg mt-20 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start side-quest-container">
            <div className="relative p-10 flex flex-col justify-between">
              <div className="side-quest">
                <div>WEEKLY QUEST JOURNEY</div>
              </div>
              <div className="lihat-info-detail">
                <span>Updated every week !! </span>
                <div>Juara Mingguan</div>
                <div>Juara Favorit</div>
                <p className="font-extrabold">Total Hadiah 10 Juta + Triv Merch</p>
              </div>
            </div>
            <div className="relative z-0 flex justify-center md:block">
              <div className="w-60 h-60 md:absolute md:-top-10 md:right-0 md:w-[450px] md:h-[450px]">
                <Image
                  src="/images/weekly_quest_journey.png"
                  alt="Side Quest"
                  layout="fill"
                  objectFit="contain"
                  className="object-contain md:-translate-y-14 md:translate-x-10"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}