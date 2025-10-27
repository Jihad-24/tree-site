import Image from "next/image";
import Link from "next/link";

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
  {
    id: 5,
    src: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
    name: "Cyclamen",
    code: "#303503SC",
    price: "3",
    description:
      "Cyclamen is a small but beautiful plant that thrives in cool environments. Known for its vibrant petals and delicate fragrance, it's a favorite among indoor plant lovers.",
    owner: "Replant Foundation",
  },
  {
    id: 6,
    src: "https://i.ibb.co/v6NR3KmV/tree-2.jpg",
    name: "Maranta",
    code: "#HG564GFS",
    price: "2",
    description:
      "Maranta, also known as the Prayer Plant, features stunning patterned leaves that fold up at night. It's a symbol of peace and gratitude.",
    owner: "EcoGrow Labs",
  },
  {
    id: 7,
    src: "https://i.ibb.co/gb4LktsG/tree-3.jpg",
    name: "Ponytail Palm",
    code: "#847G94JD",
    price: "5",
    description:
      "Ponytail Palm is a drought-tolerant beauty with a unique bulbous trunk. It’s perfect for minimal maintenance yet striking in any room.",
    owner: "GreenVerse",
  },
  {
    id: 8,
    src: "https://i.ibb.co/Vcnt5hW7/tree-1.jpg",
    name: "String of Pearls",
    code: "#303503SC",
    price: "6",
    description:
      "String of Pearls is a succulent vine loved for its pearl-shaped leaves. It represents natural abundance and growth.",
    owner: "NatureMint",
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
            src={nft.src}
            alt={nft.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Info */}
        <div className="backdrop-blur-md bg-white/60 rounded-3xl p-8 shadow-lg border border-green-100">
          <h1 className="text-4xl font-semibold text-gray-900">{nft.name}</h1>
          <p className="text-sm text-gray-500 mt-2 tracking-wide">
            Code: {nft.code}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
            {nft.description}
          </p>

          <div className="mt-8">
            <p className="text-sm text-gray-500">Owned by</p>
            <p className="text-lg font-medium text-gray-800 mt-1">
              {nft.owner}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-4xl font-bold text-green-700">${nft.price}</p>
            <button className="bg-green-700 cursor-pointer text-white px-10 py-3.5 rounded-full font-medium hover:bg-green-800 transition-transform duration-300 hover:scale-105 shadow-md">
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
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.code}</p>
                  <p className="mt-3 font-bold text-green-700 text-lg">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
