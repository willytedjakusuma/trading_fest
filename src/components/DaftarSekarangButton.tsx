import React from "react";
import Link from "next/link";

export type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function DaftarSekarangButton({ href, children, className = "" }: LinkButtonProps) {
  const classes = `btn-daftar-sekarang block w-full md:inline-block md:w-auto text-center my-4 md:my-8 ${className}`
  
  return(
    <Link href={href} className={classes}>
      <span>{children}</span>
      <div className="fa-solid fa-angle-right"></div>
    </Link>
  )
}
