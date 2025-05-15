import React from "react";
import Image from "next/image";
import Link from "next/link";
import Collapsible from "./Collapsible";

export default function Peraturan() {
  const generalRules = [
    "Wajib memiliki akun Triv",
    "Lakukan transaksi untuk mendapatkan persentase keuntungan sebesar-besarnya selama periode kompetisi.",
    "Periode kompetisi dimulai pada 20 Juni 2022 - 20 Juli 2022",
    "Kompetisi ini diberlakukan untuk seluruh member Triv tanpa terkecuali.",
    `Pemenang Side Quest (Juara Harapan) bisa diraih dengan mengikuti aturan di halaman Triv Quest Reward`,
    <>
      Gabung dengan komunitas member Triv lainnya di <Link href="" className="text-blue-500 hover:text-blue-700">Telegram</Link> untuk mendapatkan update seputar market untuk membantumu menganalisa pergerakan harga.
    </>,
    <>
      Follow social media Triv <Link href="" className="text-blue-500 hover:text-blue-700">Instagram</Link> dan <Link href="" className="text-blue-500 hover:text-blue-700">Facebook</Link> untuk mendapatkan update seputar pemenang Mingguan.
    </>
    
  ]

  const requirement = [
    "Peserta harus memiliki KTP",
    "Peserta boleh perorangan maupun korporasi",
    "Internal Triv tidak diikutkan dalam kompetisi",
    "Peserta hanya melakukan transaksi jual beli saja (staking dan gadai tidak termasuk)",
    "Hasil Likuidasi posisi di atas tanggal 20 Juli 2022 tidak dihitung",
  ]
  return(
    <section className="triv-reward">
      <div className="container mx-auto px-4 pt-8">
        <div className="row grid grid-cols-1 gap-8 items-center">
          <div>
            <div className="triv-quest-reward-title py-8 text-3xl md:text-[45px]  text-center">
              <span className="blue-underline">PERATURAN KOMPETISI</span>
            </div>
          </div>
          <Collapsible tabIndex={0} title="General Rules" rules={generalRules} isOl={true}/>
          <Collapsible tabIndex={1} title="Requirement" rules={requirement} isOl={false}/>
        </div>
      </div>
    </section>
  )
}