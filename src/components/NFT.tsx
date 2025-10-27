"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nft({
  search,
  sponsors,
}: {
  search: string;
  sponsors: {
    id: number;
    botanicalName: string;
    commonName: string;
    iucnStatus: string;
    country: string;
    location: { lat: number; lng: number };
    captureDate: string;
    planter: string;
    nftCollection: string;
    nftId: string;
    plantingOrganization: string;
    plantingCost: string;
    image: string;
  }[];
}) {
  

 const nfts = [
  {
    id: 1,
    botanicalName: "Cyclamen persicum",
    commonName: "Cyclamen",
    iucnStatus: "NT",
    country: "Turkey",
    location: { lat: 39.9334, lng: 32.8597 },
    captureDate: "2025-01-20",
    planter: "EcoGrow",
    nftCollection: "Flora NFTs",
    nftId: "#303503SC",
    plantingOrganization: "GreenThumb Community",
    plantingCost: "3 USD",
    image: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
  },
  {
    id: 2,
    botanicalName: "Maranta leuconeura",
    commonName: "Maranta",
    iucnStatus: "LC",
    country: "Brazil",
    location: { lat: -3.4653, lng: -62.2159 },
    captureDate: "2025-02-15",
    planter: "GrowGreen",
    nftCollection: "Flora NFTs",
    nftId: "#HG564GFS",
    plantingOrganization: "GreenThumb Community",
    plantingCost: "2 USD",
    image: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
  },
  {
    id: 3,
    botanicalName: "Beaucarnea recurvata",
    commonName: "Ponytail Palm",
    iucnStatus: "LC",
    country: "Mexico",
    location: { lat: 19.4326, lng: -99.1332 },
    captureDate: "2025-03-05",
    planter: "EcoGrow",
    nftCollection: "Flora NFTs",
    nftId: "#847G94JD",
    plantingOrganization: "GreenThumb Community",
    plantingCost: "5 USD",
    image: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
  },
  {
    id: 4,
    botanicalName: "Senecio rowleyanus",
    commonName: "String of Pearls",
    iucnStatus: "LC",
    country: "South Africa",
    location: { lat: -30.5595, lng: 22.9375 },
    captureDate: "2025-03-15",
    planter: "EcoGrow",
    nftCollection: "Flora NFTs",
    nftId: "#303503SC",
    plantingOrganization: "GreenThumb Community",
    plantingCost: "6 USD",
    image: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
  },
];

  // Filter sponsors by search
  const filteredSponsors = sponsors.filter((s) =>
    s.planter.toLowerCase().includes(search.toLowerCase())
  );

  // Decide what to show: search results or NFTs
  const displayData = search ? filteredSponsors : nfts;

  return (
    <div className="">
      <section className="px-10 mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {search ? "Sponsored Trees" : "REPLANT WORLD’S NFT"}
          </h2>
          {!search && (
            <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50">
              View all
            </button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {search
            ? displayData.map((sponsor) => (
                <div key={sponsor.id} className="overflow-hidden transition-all">
                  <div className="relative w-full h-96">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.planter}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-4 pl-0">
                    <h3 className="font-semibold text-gray-900">{sponsor.planter}</h3>
                    <p className="text-sm text-gray-400 py-1">{sponsor.botanicalName}</p>
                    <p className="mt-1 font-bold text-2xl">{sponsor.plantingCost}</p>
                  </div>
                </div>
              ))
            : displayData.map((nft) => (
                <Link
                  key={nft.id}
                  href={`/nft/${nft.id}`}
                  className="overflow-hidden transition-all"
                >
                  <div className="relative w-full h-96">
                    <Image
                      src={nft.image}
                      alt={nft.commonName}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-4 pl-0">
                    <h3 className="font-semibold text-gray-900">{nft.commonName}</h3>
                    <p className="text-sm text-gray-400 py-2">{nft.nftId}</p>
                    <p className="mt-1 font-bold text-2xl">${nft.plantingCost}</p>
                  </div>
                </Link>
              ))}
        </div>
      </section>
    </div>
  );
}
