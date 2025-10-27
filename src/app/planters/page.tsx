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
    sponsorLevel: "Gold planters",
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
    sponsorLevel: "Gold planters",
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
    sponsorLevel: "Gold planters",
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
    sponsorLevel: "Gold planters",
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
    <div className="mb-20">
      <Navbar />
      <div className="flex justify-between items-center mb-8 md:px-8 mt-8 md:mt-16">
        <h1 className="text-3xl font-semibold text-gray-800">Planters</h1>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full ">
          {["All", "Companies", "Individuals"].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-1 rounded-full cursor-pointer bg-gray-50 text-sm font-medium transition-all duration-200 ${
                filter === option
                  ? "bg-green-100 text-green-700"
                  : "text-gray-400 hover:text-green-500"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-8">
        {planters.map((sponsor) => (
          <div
            key={sponsor.name}
            className="bg-white rounded-2xl cursor-pointer border border-gray-100 overflow-hidden hover:shadow-md transition-all"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start bg-green-50 hover:bg-gray-50 p-6">
              <div className="flex items-start flex-col justify-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://i.ibb.co.com/QM9mfzB/avatar.png"
                    alt={sponsor.name}
                    className="w-10 h-10 object-contain"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {sponsor.name}
                  </h2>
                  <p className="text-sm text-gray-500">{sponsor.type}</p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-3 bg-green-50">
                <div className="border border-gray-200 rounded-lg p-3 text-start">
                  <p className="text-xs text-green-700 font-medium opacity-60">
                    Planted tree value
                  </p>
                  <p className="text-green-700 font-semibold md:text-[17px] ">
                    {sponsor.treeValue}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-start">
                  <p className="text-xs text-green-700 font-medium opacity-60">
                    NFT owned
                  </p>
                  <p className="text-green-700 font-semibold md:text-[17px]">
                    {sponsor.nftsOwned}
                  </p>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-3 text-start">
                  <p className="text-xs text-green-700 font-medium opacity-60">
                    Species of trees
                  </p>
                  <p className="text-green-700 font-semibold md:text-[17px]">
                    {sponsor.trees}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-start">
                  <p className="text-xs text-green-700 font-medium opacity-60">
                    NFT sold
                  </p>
                  <p className="text-green-700 font-semibold md:text-[17px]">
                    {sponsor.nftsSold}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-2 px-6 py-3 bg-white border-t border-gray-100">
              <span>🌟 {sponsor.sponsorLevel}</span>
              <span>•</span>
              <span>{sponsor.location}</span>
              <span>•</span>
              <span>Planted {sponsor.joined}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
