"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  

  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Planters", href: "/planters" },
    { name: "Impact", href: "#" },
  ];
// Conditional navbar background
  const bgClass =
    pathname?.startsWith("/nft/") // if on NFT details page
      ? "bg-gradient-to-br from-green-50 via-white to-green-100"
      : "bg-gray-100";


  return (
    <nav className={`${bgClass} flex items-center justify-between py-6 px-10 box-border shadow-sm transition-colors`}>
      <div className="flex items-center gap-2">
        <Image
          src="https://i.ibb.co/99PT6457/logo-black.png"
          alt="Logo"
          width={30}
          height={30}
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-green-700 underline underline-offset-4"
                  : "text-gray-700 hover:text-green-700"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        
      </div>
    </nav>
  );
}
