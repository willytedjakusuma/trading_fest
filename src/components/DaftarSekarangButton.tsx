import React from "react";
import Link from "next/link";

export type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function DaftarSekarangButton({ href, children, className = "" }: LinkButtonProps) {
  const classes = `btn-daftar-sekarang text-[18px] md:text-[24.5px] w-full md:inline-block md:w-auto text-center ${className}`
  
  return(
    <Link href={href} className={classes}>
      <span>{children}</span>
      <div className="fa-solid fa-angle-right"></div>
    </Link>
  )
}
