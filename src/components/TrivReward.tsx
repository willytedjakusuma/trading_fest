import React from "react";
import Image from "next/image";
import Link from "next/link";
import RewardItem from "./RewardItem";
import SideQuest from "./SideQuest";

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
    <section className="triv-reward py-[30px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="order-1 md:order-3 relative w-full h-56 md:h-[500px]">
            <Image
              src="/images/prize_combined.png"
              alt="Triv Reward"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="order-2 md:order-1 pb-10">
            <div className="semuabisamenang-reward text-[24px] md:text-[36px]  text-center md:text-left">
             #SemuaBisaMenang karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan !
            </div>
            <div className="bukan-dari-trading-volume text-[28px] text-center md:text-left">
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
          <div className="order-6 md:col-span-2 shadow-bottom w-full h-[40px]"></div>
        </div>

        <SideQuest 
          src="/images/side_quest.png" 
          title="SIDE QUEST" 
          subtitle1="Klik untuk lihat info detail " 
          subtitle2="Juara Favorit" 
          subtitle3="Xiaomi Watch S1 Active" 
          subtitle4="" 
          isWeekly={false}
          imageClass="w-[240px] h-[240px]"
        />

        <SideQuest 
          src="/images/weekly_quest_journey.png" 
          title="WEEKLY QUEST JOURNEY" 
          subtitle1="Updated every week !! " 
          subtitle2="Juara Mingguan" 
          subtitle3="Juara Favorit" 
          subtitle4="Total Hadiah 10 Juta + Triv Merch" 
          isWeekly={true}
          imageClass="w-[240px] h-[240px] md:w-[450px] md:h-[450px]"
        />
      </div>
    </section>
  )
}