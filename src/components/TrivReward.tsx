import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrivReward() {
  return(
    <section className="triv-reward">
      <div className="container mx-auto px-2">
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="semuabisamenang-reward">
              <span>#SemuaBisaMenang karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan ! </span>
            </div>
            <div className="p bukan-dari-trading-volume">
              <span>Mulai trading hanya dengan 50rb rupiah di Triv dan dapatkan hadiahnya.</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/prize_combined.png"
              alt="Triv Reward"
              layout="responsive"
              width={500}
              height={600}
            />
            <div className="pb-5"></div>
          </div>
          <div className="md:col-span-2 pb-5"></div>
          <div className="md:col-span-2 shadow-bottom w-full h-[40px]"></div>
        </div>

        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-3">
            <div className="triv-quest-reward-title py-8 text-center">
              <span className="blue-underline">
                TRIV QUEST REWARD
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/winner_1_prize.png"
              alt="Motor Vario"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Motor Vario</p>
            </div>
          </div>
          <div>
          <Image
              src="/images/winner_2_prize.png"
              alt="Macbook Air M1 2020"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Macbook Air M1 2020</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/winner_3_prize.png"
              alt="Samsung Galaxy Tab S7+"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Samsung Galaxy Tab S7+</p>
            </div>
          </div>
          <div className="col-span-3"></div>
          <div>
            <Image
              src="/images/winner_4_prize.png"
              alt="Samsung S22 5G"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Samsung S22 5G</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/winner_5_prize.png"
              alt="Samsung S21 FE 5G"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Samsung S21 FE 5G</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/winner_6_prize.png"
              alt="Samsung S20 FE"
              layout="responsive"
              width={260}
              height={334}
              className="max-h-[334px] mx-auto object-contain"
            />
            <div className="title-reward text-center">
              <p>Samsung S20 FE</p>
            </div>
          </div>
          <div className="md:col-span-3 shadow-bottom w-full h-[40px]"></div>
        </div>

        <section className="side-quest-bg">
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-start side-quest-container flex flex-nowrap">
            <div className="relative p-10">
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
            <div className="relative overflow-visible translate-x-10">
              <Image
                src="/images/side_quest.png"
                alt="Side Quest"
                layout="responsive"
                width={300}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="side-quest-bg mt-10">
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-start side-quest-container flex flex-nowrap">
            <div className="relative p-10">
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
            <div className="relative overflow-visible translate-x-10">
              <Image
                src="/images/weekly_quest_journey.png"
                alt="Side Quest"
                layout="responsive"
                width={300}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}