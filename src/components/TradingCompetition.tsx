import React from "react";
import Image from "next/image";
import Link from "next/link";
import DaftarSekarangButton from "./DaftarSekarangButton";

export default function TradingCompetition() {
  return (
    <section className="competition py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="order-1 md:order-3 relative w-full">
            <Image
              src="/images/triv_competition.png"
              alt="Competition"
              layout="responsive"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
          <div className="order-2 md:order-1 ">
            <div className="triv-trading-competition pb-8 text-center md:text-left text-[46px] md:text-[60px]">
              <span>Triv Trading Competition</span>
            </div>
            <div className=" text-center md:text-left text-[26px] md:text-[32px]">
              <span className="calling-all-investor">Calling all investor and Trader Karena </span>
              <span className="semua-bisa-menang">#SemuaBisaMenang</span>
            </div>
            <DaftarSekarangButton href="" className="text-[18px] md:text-[24.5px]">
              Daftar Sekarang
            </DaftarSekarangButton>
            <div className="periode-kompetisi">
              <div className="text-base md:text-xl text-center md:text-left">* Periode kompetisi 20 Juni 2022 - 20 Juli 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}