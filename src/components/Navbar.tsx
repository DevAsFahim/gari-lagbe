"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const navItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Bookings", href: "/bookings" },
  { id: 3, name: "About Us", href: "/about" },
  { id: 4, name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <motion.div
      // initial={{ y: -60, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-[94%] md:w-[86%] z-50 rounded-full bg-[#0B0B0B] text-white shadow-[0_15px_50px_rgba(0,0,0,0.7)] py-2`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
        <Image
          src="/logo-white.png"
          height={120}
          width={120}
          alt="logo"
          priority
        />
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathName === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm">
          Login
        </button>
      </div>


    </motion.div>
  );
}
