import React from "react";
import Image from "next/image";
import Link from "next/link";
import DaftarSekarangButton from "./DaftarSekarangButton";

export default function Pendaftaran() {
  return(
    <section className="pendaftaran">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:ml-24">
            <div className="cara-pendaftaran text-[26px] md:text-[36px] md:text-left -tracking-[0.26px] md:-tracking-[0.36x]">
              <div>Cara Pendaftaran</div>
            </div>
            <div className="cukup-memiliki-akun-triv text-[18px] md:text-[28px] md:text-left -tracking-[0.18px] md:-tracking-[0.28x]">
              <p>Cukup Memiliki Akun Triv dan Trading di Triv Selama Durasi Event</p>
            </div>
            <div className="w-full py-10 px-3">
              <DaftarSekarangButton href="" className="block">
                Daftar Sekarang
              </DaftarSekarangButton>
            </div>
          </div>
          <div className="relative items-end">
            <div className="md:px-0">
              <Image
                src="/images/registration.png"
                alt="Registration"
                layout="responsive"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}