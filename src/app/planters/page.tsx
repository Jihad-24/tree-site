"use client";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";

const planters = [
  {
    name: "ULAM LABS",
    type: "Company",
    location: "Wroclaw, Poland",
    joined: "6 months ago",
    sponsorLevel: "Gold Planter",
    treeValue: "$1394",
    nftsOwned: 739,
    trees: 65,
    nftsSold: 358,
    logo: "/ulam-logo.png",
  },
  {
    name: "Alpha Bravo",
    type: "Company",
    location: "Wroclaw, Poland",
    joined: "6 months ago",
    sponsorLevel: "Gold Planter",
    treeValue: "$1394",
    nftsOwned: 739,
    trees: 65,
    nftsSold: 358,
    logo: "/alpha-logo.png",
  },
  {
    name: "Charlie",
    type: "Company",
    location: "Wroclaw, Poland",
    joined: "6 months ago",
    sponsorLevel: "Gold Planter",
    treeValue: "$1394",
    nftsOwned: 739,
    trees: 65,
    nftsSold: 358,
    logo: "/charlie-logo.png",
  },
  {
    name: "Trulyyy",
    type: "Company",
    location: "Wroclaw, Poland",
    joined: "6 months ago",
    sponsorLevel: "Gold Planter",
    treeValue: "$1394",
    nftsOwned: 739,
    trees: 65,
    nftsSold: 358,
    logo: "/trulyyy-logo.png",
  },
];

export default function Planters() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="mb-20 bg-gradient-to-b from-[#f8f9f4] to-[#e8f0e3] min-h-screen">
      <Navbar />
      <div className="flex justify-between items-center mb-10 md:px-8 mt-10 md:mt-16">
        <h1 className="text-3xl font-semibold text-gray-800">Planters</h1>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
          {["All", "Companies", "Individuals"].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-1 rounded-full cursor-pointer text-sm font-medium transition-all duration-200 ${
                filter === option
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:bg-green-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-8">
        {planters.map((planter) => (
          <div
            key={planter.name}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            {/* Header */}
            <div className="p-8 flex flex-col items-center text-center bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm mb-3">
                <Image
                  src="https://i.ibb.co/QM9mfzB/avatar.png"
                  alt={planter.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {planter.name}
              </h2>
              <p className="text-sm text-gray-500">{planter.type}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 p-6">
              {[
                { label: "Planted tree value", value: planter.treeValue },
                { label: "NFT owned", value: planter.nftsOwned },
                { label: "Species of trees", value: planter.trees },
                { label: "NFT sold", value: planter.nftsSold },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-green-50 border border-green-100 rounded-xl p-4 text-center hover:bg-green-100 transition-all"
                >
                  <p className="text-xs text-green-700 font-medium opacity-70 mb-1">
                    {item.label}
                  </p>
                  <p className="text-green-800 font-semibold text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-center flex-wrap items-center gap-2 px-6 py-3 text-sm text-gray-500 border-t border-gray-100 bg-white">
              <span className="text-yellow-600">🌿 {planter.sponsorLevel}</span>
              <span>•</span>
              <span>{planter.location}</span>
              <span>•</span>
              <span>Planted {planter.joined}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
