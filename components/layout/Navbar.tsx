"use client";

import Link from "next/link";
import { Download, Menu } from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  // {
  //   title: "Equipment",
  //   href: "/equipment",
  // },
  {
    title: "How It Works",
    href: "/how-it-works",
  },
  {
    title: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[#032d22]">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg" // your SVG file
              alt="Borvi Logo"
              width={250}
              height={250}
              className="object-contain"
            />

            {/* <span className="text-xl font-extrabold text-white">Borvi</span> */}
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent"
                  >
                    <Link
                      href={item.href}
                      className={`
    relative inline-block
    text-sm font-semibold tracking-wide
    text-white
    transition-colors duration-300

    hover:text-[#1ea672]

    after:absolute after:left-1/2 after:-translate-x-1/2
    after:-bottom-1.5
    after:h-[2px]
    after:w-0
    after:bg-[#1ea672]
    after:transition-all after:duration-300

    hover:after:w-full

    ${pathname === item.href ? "text-[#1ea672] after:w-full" : ""}
  `}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Download Button */}
            <Button
              className="
                hidden
                h-12
                rounded-xl
                bg-[#0c7a4b]
                px-6
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#11945c]
                lg:flex
              "
            >
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10 lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-[#032d22] text-white">
                <div className="mt-10 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-lg font-semibold transition hover:text-green-300"
                    >
                      {item.title}
                    </Link>
                  ))}

                  <Button
                    className="
                      mt-6
                      h-12
                      rounded-xl
                      bg-[#0c7a4b]
                      hover:bg-[#11945c]
                    "
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
