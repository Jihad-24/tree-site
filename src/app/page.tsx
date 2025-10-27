"use client";
import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import Nft from "@/components/NFT";
import TopSponsors from "@/components/TopSponsors";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const links = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Planters", href: "/planters" },
    { name: "Impact", href: "/impact" },
  ];
  return (
    <main className="min-h-screen mx-16">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-10 ">
        <div className="flex items-center gap-2">
          <Image
            src={"https://i.ibb.co.com/99PT6457/logo-black.png"}
            alt="Logo"
            width={35}
            height={35}
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

          {/* Profile dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="w-10 h-10 cursor-pointer rounded-full overflow-hidden border border-gray-300 flex items-center justify-center relative"
            >
              <Image
                src="https://i.ibb.co.com/QM9mfzB/avatar.png"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              {/* Down arrow */}
              <svg
                className="w-3 h-3 absolute bottom-0.5 right-0.5 bg-gray-300 rounded-full text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-md z-50">
                <ul className="py-2 text-sm text-gray-700 ">
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Hero />
      <Nft />
      <TopSponsors />
    </main>
  );
}
