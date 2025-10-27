import Navbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

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

export default async function NftDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const nft = nfts.find((n) => n.id === Number(id));

  if (!nft) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        NFT not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6 sm:px-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700 transition mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Marketplace
        </Link>

        {/* Main NFT Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={nft.image}
              alt={nft.commonName}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Info (styled like the sample image) */}
          <div className="backdrop-blur-md bg-white/60 rounded-3xl p-8 shadow-lg border border-green-100 w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-900">
              {nft.botanicalName}
            </h1>
            <p className="text-gray-600 text-sm mb-6">{nft.commonName}</p>

            <div className="space-y-2 text-sm text-gray-700">
              <Info label="Botanical name" value={nft.botanicalName} />
              <Info label="Common name" value={nft.commonName} />
              <Info label="IUCN status" value={nft.iucnStatus} />
              <Info label="Country" value={nft.country} />
              <Info
                label="Location"
                value={`${nft.location.lat}, ${nft.location.lng}`}
              />
              <Info label="Capture date" value={nft.captureDate} />
              <Info label="Planter" value={nft.planter} />
              <Info label="NFT Collection" value={nft.nftCollection} />
              <Info label="NFT ID" value={nft.nftId} />
              <Info
                label="Planting organization/community"
                value={nft.plantingOrganization}
              />
              <Info label="Planting cost" value={nft.plantingCost} />
            </div>

            <div className="mt-10 flex items-center justify-center">
              <button className="bg-green-700 cursor-pointer text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-transform duration-300 hover:scale-105 shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related NFTs */}
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            More from this collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {nfts
              .filter((item) => item.id !== nft.id)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/nft/${item.id}`}
                  className="bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt={item.commonName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">
                      {item.commonName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.botanicalName}
                    </p>
                    <p className="mt-3 font-bold text-green-700 text-lg">
                      {item.plantingCost}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Info Component */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gray-100 py-1">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900 text-right">{value}</span>
    </div>
  );
}
