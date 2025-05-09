import React from "react";
import Image from "next/image";

export default function TradingCompetition() {
  return (
    <section className="competition">
      <div className="container w-full mx-auto px-2">
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="triv-trading-competition pb-8">
              <span>Triv Trading Competition</span>
            </div>
            <div>
              <span className="calling-all-investor">Calling all investor and Trader Karena </span>
              <span className="semua-bisa-menang">#SemuaBisaMenang</span>
            </div>
            <div className="py-3">
              <button className="btn-daftar-sekarang">Daftar Sekarang</button>
            </div>
            <div className="periode-kompetisi">
              <span>*</span>
              <span>Periode kompetisi 20 Juni 2022 - 20 Juli 2022</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/triv_competition.png"
              alt="Competition"
              layout="responsive"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}