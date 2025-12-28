export type Block = {
  showInNav?: boolean
  slug?: string
  name?: string
}

export type Page = {
  slug?: string
  title?: string
  showInNav?: boolean
  layout?: Block[]
}

export type NavItem = {
  name: string
  link: string
}

/**
 * Build navigation items from pages and their blocks
 * @param pages Array of pages
 * @param pathname Current pathname
 * @returns Array of NavItem
 */
export function buildNav(pages: { docs?: Page[] }, pathname: string): NavItem[] {
  console.log('slug', pathname)
  const navItems: NavItem[] = []

  pages.docs?.forEach((page) => {
    const { slug, title, showInNav, layout } = page

    // Page-level nav item
    if (showInNav && slug && title) {
      if (pathname === `${slug}`) {
        //this is for scrolling to the top if on the same page
        navItems.push({
          name: title,
          link: `/${slug}#hero`,
        })
      } else {
        navItems.push({
          name: title,
          link: `/${slug}`,
        })
      }
    }

    // Block-level anchor nav items
    layout?.forEach((block) => {
      if (block?.showInNav && block?.slug && block?.name && slug) {
        navItems.push({
          name: block.name,
          link: `/${slug}#${block.slug}`,
        })
      }
    })
  })

  return navItems
}
