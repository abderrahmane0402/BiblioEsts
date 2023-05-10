"use client";
import { FC, ReactNode, useState } from "react";
import MLink from "@/ui/MLink";
import { isActive, isActiveNested } from "@/utils/dashboard";
import { AiFillCaretDown } from "react-icons/ai";
import { navItem } from "@/types";

interface NestedNavProps {
  principale: navItem;
  href: string[];
  icon: ReactNode[];
  title: string[];
}

export const NestedNav: FC<NestedNavProps> = ({
  principale,
  href,
  icon,
  title,
}) => {
  const isactive = isActiveNested(href);
  const [hidden, setHidden] = useState(true);
  return (
    <li>
      <MLink
        href={principale.href}
        type="nav"
        font="md"
        className={`${
          isactive
            ? "bg-[#62a0d381]"
            : "hover:bg-[#250262] active:bg-[#c6ddf05a]"
        } pl-7 justify-between`}
        onClick={(e) => {
          e.preventDefault();
          setHidden(!hidden);
        }}
      >
        <div className="flex gap-5 items-center">
          {principale.icon}
          {principale.title}
        </div>
        <AiFillCaretDown
          className={`transition-transform mr-4 text-white transform-gpu ${
            hidden ? "-rotate-90" : ""
          }`}
        />
      </MLink>
      <ul
        className={`flex transition-all duration-1000 delay-0 flex-col ${
          hidden ? "h-0" : "h-24"
        } overflow-auto scrollbar-none bg-[#1542794e]`}
      >
        {href.map((href, index: number) => {
          let active = isActive(href);
          return (
            <li key={index}>
              <MLink
                href={href}
                type="nav"
                font="md"
                className={`${
                  active ? "text-[#CA3CFF]" : "text-white"
                } hover:text-[#CA3CFF] active:text-[#c6ddf05a] pl-7 gap-5`}
              >
                {icon[index]}
                {title[index]}
              </MLink>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
