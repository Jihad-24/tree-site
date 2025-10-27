"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Nft from "@/components/NFT";
import TopSponsors from "@/components/TopSponsors";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar
        isSearching={showSearch}
        onSearchClick={() => setShowSearch(true)}
        onCancelClick={() => setShowSearch(false)}
      />

      {showSearch ? (
        <SearchResults onClose={() => setShowSearch(false)} />
      ) : (
        <>
          <Hero />
        </>
      )}
      <Nft />
      <TopSponsors />
    </main>
  );
}
