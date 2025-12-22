
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cva } from "class-variance-authority"
import { Menu, X } from "lucide-react"

const navigationMenuTriggerStyle = cva(
  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      selected: {
        true: "text-[#D4AB45]",
        false: "text-gray-800 hover:text-[#D4AB45]",
      },
    },
  }
)

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const menuItems = [
    { href: "/", en: "Home", ar: "الرئيسية" },
    { href: "/Aboutus", en: "About Us", ar: "معلومات عنا" },
    { href: "/Products", en: "Products", ar: "المنتجات" },
    { href: "/Contactus", en: "Contact Us", ar: "اتصل بنا" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Jazirat_logo3.png"
            alt="Logo"
            width={180}
            height={40}
            className="w-[150px] md:w-[200px]"
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({
                    selected: pathname === item.href,
                  })}
                >
                  <Link href={item.href} className="text-center">
                    <span className="block text-sm font-medium">
                      {item.en}
                    </span>
                    <span className="block text-base text-gray-500 font-arabic">
                      {item.ar}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-center transition-colors ${
                  pathname === item.href
                    ? "text-[#D4AB45]"
                    : "text-gray-800"
                }`}
              >
                <span className="block text-sm font-medium">
                  {item.en}
                </span>
                <span className="block text-base font-arabic">
                  {item.ar}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
