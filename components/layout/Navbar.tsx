"use client";

import Link from "next/link";
import { Download, Menu } from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "How It Works", href: "/how-it-works" },
  { title: "Why Choose Us", href: "/why-choose-us" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#032d22]">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Borvi Logo"
              width={220}
              height={220}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active]:bg-transparent"
                    >
                      <Link
                        href={item.href}
                        className={`
        relative inline-block
        text-sm font-semibold tracking-wide
        transition-colors duration-300

        ${
          pathname === item.href
            ? "text-[#1ea672]"
            : "text-white hover:text-[#1ea672]"
        }

        after:absolute after:left-0
        after:-bottom-1.5
        after:h-[2px]
        after:w-0
        after:bg-[#1ea672]
        after:transition-all after:duration-300

        hover:after:w-full
        ${pathname === item.href ? "after:w-full" : ""}
      `}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Download Button */}
            <Button className="hidden h-12 rounded-xl bg-[#0c7a4b] px-6 text-sm font-bold text-white hover:bg-[#11945c] lg:flex">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>

            {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(true)}
              className="text-white hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* FULLSCREEN MODAL */}
            <div
              className={`
    fixed inset-0 z-[999]
    bg-[#032d22]
    flex flex-col items-center justify-center
    px-6
    transition-all duration-300
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl"
              >
                ✕
              </button>

              {/* NAV LINKS */}
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
          text-2xl font-bold tracking-wide transition

          ${
            pathname === item.href
              ? "text-[#1ea672]"
              : "text-white hover:text-[#1ea672]"
          }
        `}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* BUTTON */}
              <Button className="mt-10 h-12 px-8 rounded-xl bg-[#0c7a4b] hover:bg-[#11945c]">
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
