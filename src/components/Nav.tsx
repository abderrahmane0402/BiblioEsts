"use client"
import React, { useState, useEffect } from "react"
import MLink from "@/ui/MLink"
import { NavItem } from "@/data/nav_el"
import { AiFillCaretDown } from "react-icons/ai"

interface NavProps {
  navItems: NavItem[]
}

export function Nav({ navItems }: NavProps) {
  const [hidden, sethidden] = useState(new Map())
  useEffect(() => {
    navItems.map((navItem) => {
      if (navItem.sub_nav) hidden.set(navItem.id, true)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <nav className='h-auto max-h-[80%] overflow-auto scrollbar-none'>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <MLink
                href={navItem.href ?? ""}
                type='nav'
                font='lg'
                className='hover:bg-[#250262] active:bg-[#c6ddf05a] pl-7 gap-5'
                onClick={(e) => {
                  if (navItem.sub_nav) {
                    e.preventDefault()
                    let hhh = new Map(hidden)
                    hhh.set(navItem.id, !hhh.get(navItem.id))
                    sethidden(hhh)
                  }
                }}
              >
                {navItem.icon}
                {navItem.title}
                {navItem.sub_nav && (
                  <AiFillCaretDown
                    className={`transition-transform mr-7 text-white transform-gpu ${hidden.get(
                      navItem.id
                    )}`}
                  />
                )}
              </MLink>
              {navItem.sub_nav && (
                <ul
                  className={`flex transition-all duration-1000 delay-0 flex-col ${
                    hidden.get(navItem.id) ? "h-0" : `h-32`
                  } overflow-auto scrollbar-none bg-[#1542794e]`}
                >
                  {navItem.sub_nav.map((subNavItem) => (
                    <li key={subNavItem.id}>
                      <MLink
                        href={subNavItem.href}
                        type='nav'
                        font='lg'
                        className='hover:bg-[#250262] active:bg-[#c6ddf05a] pl-7 gap-5'
                      >
                        {subNavItem.icon}
                        {subNavItem.title}
                      </MLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
