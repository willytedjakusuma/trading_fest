import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Peraturan() {
  return(
    <section className="triv-reward">
      <div className="container mx-auto px-2">
        <div className="row grid grid-cols-1 gap-8 items-center">
          <div>
            <div className="triv-quest-reward-title py-8 text-3xl md:text-[45px]  text-center">
              <span className="blue-underline">PERATURAN KOMPETISI</span>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow p-8 rules-pendaftaran">
            <input type="checkbox" />
            <div className="collapse-title general-rules-title">General Rules</div>
            <div className="collapse-content mx-6">
              <ol className="font-rules ol">
                <li>Wajib memiliki akun Triv</li>
                <li>Lakukan transaksi untuk mendapatkan persentase keuntungan sebesar-besarnya selama periode kompetisi.</li>
                <li>Periode kompetisi dimulai pada 20 Juni 2022 - 20 Juli 2022</li>
                <li>Kompetisi ini diberlakukan untuk seluruh member Triv tanpa terkecuali.</li>
                <li>Pemenang Side Quest (Juara Harapan) bisa diraih dengan mengikuti aturan di halaman Triv Quest Reward</li>
                <li>Gabung dengan komunitas member Triv lainnya di <Link href="" className="text-blue-500 hover:text-blue-700">Telegram</Link> untuk mendapatkan update seputar market untuk membantumu menganalisa pergerakan harga.</li>
                <li>Follow social media Triv <Link href="" className="text-blue-500 hover:text-blue-700">Instagram</Link> dan <Link href="" className="text-blue-500 hover:text-blue-700">Facebook</Link> untuk mendapatkan update seputar pemenang Mingguan.</li>
              </ol>
            </div>
          </div>
          <div tabIndex={1} className="collapse collapse-arrow p-8 rules-pendaftaran">
            <input type="checkbox" />
            <div className="collapse-title general-rules-title">Requirement</div>
            <div className="collapse-content mx-6">
              <ul className="font-rules ul list-disc">
                <li>Peserta harus memiliki KTP</li>
                <li>Peserta boleh perorangan maupun korporasi</li>
                <li>Internal Triv tidak diikutkan dalam kompetisi</li>
                <li>Peserta hanya melakukan transaksi jual beli saja (staking dan gadai tidak termasuk)</li>
                <li>Hasil Likuidasi posisi di atas tanggal 20 Juli 2022 tidak dihitung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}