import Image from "next/image";

export default function Nft() {
  const nfts = [
    {
      src: "https://i.ibb.co.com/Vcnt5hW7/tree-1.jpg",
      name: "Cyclamen",
      code: "#303503SC",
      price: "3",
    },
    {
      src: "https://i.ibb.co.com/v6NR3KmV/tree-2.jpg",
      name: "Maranta",
      code: "#HG564GFS",
      price: "2",
    },
    {
      src: "https://i.ibb.co.com/gb4LktsG/tree-3.jpg",
      name: "Ponytail Palm",
      code: "#847G94JD",
      price: "5",
    },
    {
      src: "https://i.ibb.co.com/Vcnt5hW7/tree-1.jpg",
      name: "String of Pearls",
      code: "#303503SC",
      price: "6",
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
          {nfts.map((nft, index) => (
            <div key={index} className=" overflow-hidden  transition-all">
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
          ))}
        </div>
      </section>
    </div>
  );
}
