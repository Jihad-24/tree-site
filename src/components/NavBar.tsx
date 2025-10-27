"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  onSearchClick,
  onCancelClick,
  isSearching,
}: {
  onSearchClick?: () => void;
  onCancelClick?: () => void;
  isSearching?: boolean;
}) {
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
    { name: "Impact", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-10">
      <div className="flex items-center gap-2">
        <Image
          src="https://i.ibb.co/99PT6457/logo-black.png"
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

        {isSearching ? (
          <button
            onClick={onCancelClick}
            className="cursor-pointer  text-green-700 transition"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={onSearchClick}
            className="cursor-pointer text-gray-700 hover:text-green-700 transition"
          >
            Search
          </button>
        )}
      </div>
    </nav>
  );
}
