/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { menuMap } from "@/data/title"
import { usePathname } from "next/navigation"

// eslint-disable-next-line react-hooks/rules-of-hooks

export function isActive(href: string) {
  const path = usePathname()
  return path === href
}

export function isActiveNested(href: string[]) {
  const path = usePathname()
  return href.includes(path)
}

export function getTitle() {
  const path = usePathname()
  return menuMap.get(path)
}
