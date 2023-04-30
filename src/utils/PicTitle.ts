import { NavItem } from "@/types"

export const PicTitle = (navItems: NavItem[], path: string): string | undefined => {
  for (let i = 0; i < navItems.length; i++) {
    const element = navItems[i]
    if (element.href) {
      if (element.href === path) return element.title
    } else {
      const h = element.sub_nav?.find((sub) => sub.href === path)?.title
      if (h) return h
    }
  }
}

