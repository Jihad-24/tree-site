"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Nft from "@/components/NFT";
import TopSponsors from "@/components/TopSponsors";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Nft />
      <TopSponsors />
    </main>
  );
}
