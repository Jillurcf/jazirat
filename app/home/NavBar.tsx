
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cva } from "class-variance-authority"

// Tailwind + CVA styles for NavigationMenu triggers
const navigationMenuTriggerStyle = cva(
  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      selected: {
        true: "text-[#D4AB45]",
        false: "text-gray-800 hover:text-[#D4AB45]",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
)

export default function NavBar() {
  const pathname = usePathname() // get current route

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/Aboutus", label: "About s" },
    { href: "/Products", label: "Products" },
    { href: "/Contactus", label: "Contact Us" },
  ]

  return (
    <div className="z-50 relative flex items-center justify-around w-full px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/Jazirat_logo1.png" alt="Logo" width={220} height={40} />
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="flex justify-center flex-1">
        <NavigationMenuList className="flex space-x-4">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  selected: pathname === item.href,
                })}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
