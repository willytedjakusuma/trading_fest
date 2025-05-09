import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Pendaftaran() {
  return(
    <section className="pendaftaran">
      <div>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="cara-pendaftaran">
              <div>Cara Pendaftaran</div>
            </div>
            <div className="cukup-memiliki-akun-triv">
              <p>Cukup Memiliki Akun Triv dan Trading di Triv Selama Durasi Event</p>
              <div className="p-3 my-8 mx-3">
                <Link href="" className="btn-daftar-sekarang">
                  <span>Daftar Sekarang</span>
                  <div className="fa-solid fa-angle-right"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/registration.png"
              alt="Registration"
              layout="responsive"
              width={500}
              height={600}
            />
            <div className="pb-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}