"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Nft from "@/components/NFT";
import TopSponsors from "@/components/TopSponsors";

export default function Home() {
  const [search, setSearch] = useState("");

  const sponsors = [
    {
      id: 28010,
      botanicalName: "Rhizophora apiculata",
      commonName: "Tall-stilt mangrove",
      iucnStatus: "LC",
      country: "Bangladesh",
      location: { lat: 22.3569, lng: 91.7832 },
      captureDate: "2025-04-12",
      planter: "Heveya®",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-001",
      plantingOrganization: "EcoPlanters",
      plantingCost: "1.16 USD",
      image: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
    },
    {
      id: 28011,
      botanicalName: "Rhizophora apiculata",
      commonName: "Tall-stilt mangrove",
      iucnStatus: "LC",
      country: "Bangladesh",
      location: { lat: 22.357, lng: 91.7833 },
      captureDate: "2025-04-13",
      planter: "Heveya®",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-002",
      plantingOrganization: "EcoPlanters",
      plantingCost: "1.16 USD",
      image: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
    },
    {
      id: 28012,
      botanicalName: "Rhizophora apiculata",
      commonName: "Tall-stilt mangrove",
      iucnStatus: "LC",
      country: "Bangladesh",
      location: { lat: 22.3571, lng: 91.7834 },
      captureDate: "2025-04-14",
      planter: "Heveya®",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-003",
      plantingOrganization: "EcoPlanters",
      plantingCost: "1.16 USD",
      image: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
    },
    {
      id: 29010,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "India",
      location: { lat: 21.1466, lng: 79.088 },
      captureDate: "2025-05-01",
      planter: "EcoGrow",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-004",
      plantingOrganization: "GreenCoast",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
    },
    {
      id: 29011,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "India",
      location: { lat: 21.1467, lng: 79.0881 },
      captureDate: "2025-05-02",
      planter: "EcoGrow",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-005",
      plantingOrganization: "GreenCoast",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
    },
    {
      id: 29012,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "India",
      location: { lat: 21.1468, lng: 79.0882 },
      captureDate: "2025-05-03",
      planter: "EcoGrow",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-006",
      plantingOrganization: "GreenCoast",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
    },
    {
      id: 29013,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "Thailand",
      location: { lat: 13.7563, lng: 100.5018 },
      captureDate: "2025-05-04",
      planter: "GrowGreen",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-007",
      plantingOrganization: "CoastalPlanters",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
    },
    {
      id: 29014,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "Thailand",
      location: { lat: 13.7564, lng: 100.5019 },
      captureDate: "2025-05-05",
      planter: "GrowGreen",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-008",
      plantingOrganization: "CoastalPlanters",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
    },
    {
      id: 29015,
      botanicalName: "Avicennia marina",
      commonName: "Grey mangrove",
      iucnStatus: "LC",
      country: "Thailand",
      location: { lat: 13.7565, lng: 100.502 },
      captureDate: "2025-05-06",
      planter: "GrowGreen",
      nftCollection: "Mangrove Guardians",
      nftId: "NFT-009",
      plantingOrganization: "CoastalPlanters",
      plantingCost: "1.20 USD",
      image: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero search={search} setSearch={setSearch} sponsors={sponsors} />
      <Nft search={search} sponsors={sponsors} />
      <TopSponsors />
    </main>
  );
}
