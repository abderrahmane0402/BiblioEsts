/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Links } from "@/data/links"
import { menuMap } from "@/data/title"
import { usePathname } from "next/navigation"

// eslint-disable-next-line react-hooks/rules-of-hooks

export function isActive(href: string) {
  const path = usePathname()
  return path === href
}

export function isActiveNested(href: string) {
  const path = usePathname()
  return path?.includes(href)
}

export function getTitle(): string | undefined {
  const path = usePathname()
  return menuMap.get(path)
}

export function getLink(): string | undefined {
  const path = usePathname()
  return Links.get(path)
}
