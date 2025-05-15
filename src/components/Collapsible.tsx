
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type CollapsibleProps = {
  tabIndex: number;
  title: string;
  rules: ReactNode[];
  isOl: boolean;
};

export default function Collapsible({ tabIndex, title, rules, isOl }: CollapsibleProps) {
  return(
    <div tabIndex={0} className="collapse collapse-arrow p-8 rules-pendaftaran">
      <input type="checkbox" />
      <div className="collapse-title general-rules-title text-[20px]">{title}</div>
      <div className="collapse-content mx-6">
          { isOl ? 
              <ol className="font-rules ol text-[18px]">
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
            : 
            <>
              <ul className="font-rules ul list-disc text-[18px]">
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </>}
      </div>
    </div>
  )
}