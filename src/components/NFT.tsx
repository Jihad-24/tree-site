"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nft() {
  const nfts = [
    {
      id: 1,
      src: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
      name: "Cyclamen",
      code: "#303503SC",
      price: "3",
      description:
        "Cyclamen is a small but beautiful plant that thrives in cool environments. Known for its vibrant petals and delicate fragrance, it's a favorite among indoor plant lovers.",
      owner: "Replant Foundation",
    },
    {
      id: 2,
      src: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
      name: "Maranta",
      code: "#HG564GFS",
      price: "2",
      description:
        "Maranta, also known as the Prayer Plant, features stunning patterned leaves that fold up at night. It's a symbol of peace and gratitude.",
      owner: "EcoGrow Labs",
    },
    {
      id: 3,
      src: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
      name: "Ponytail Palm",
      code: "#847G94JD",
      price: "5",
      description:
        "Ponytail Palm is a drought-tolerant beauty with a unique bulbous trunk. It’s perfect for minimal maintenance yet striking in any room.",
      owner: "GreenVerse",
    },
    {
      id: 4,
      src: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
      name: "String of Pearls",
      code: "#303503SC",
      price: "6",
      description:
        "String of Pearls is a succulent vine loved for its pearl-shaped leaves. It represents natural abundance and growth.",
      owner: "NatureMint",
    },
  ];
  return (
    <div className="">
      <section className="px-10 mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">REPLANT WORLD’S NFT</h2>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50">
            View all
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <Link
              href={`/nft/${nft?.id}`}
              key={nft?.id}
              className=" overflow-hidden  transition-all"
            >
              <div className=" overflow-hidden  transition-all">
                <div className="relative w-full h-96">
                  <Image
                    src={nft.src}
                    alt={nft.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* NFT info section */}
                <div className="p-4 pl-0">
                  <h3 className="font-semibold text-gray-900">{nft.name}</h3>
                  <p className="text-sm text-gray-400 py-2">{nft.code}</p>
                  <p className="mt-1 font-bold text-2xl">${nft.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
