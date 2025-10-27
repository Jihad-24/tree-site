"use client";
import Image from "next/image";

export default function Hero({
  search,
  setSearch,
  sponsors,
}: {
  search: string;
  setSearch: (value: string) => void;
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
  // filter sponsor by search name
  const filteredSponsors = sponsors.filter((s) =>
    s.planter.toLowerCase().includes(search.toLowerCase())
  );

  const firstPlanter = filteredSponsors[0]?.planter || "No sponsor found";

  return (
    <div>
      {/* Map button & search input */}
      <div className="flex items-center gap-3 justify-end mt-6 px-10">
        <button className="bg-gray-200 px-3 py-2 cursor-pointer rounded-xl flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 12V6"
            />
          </svg>
          Map
        </button>

        <div className="relative">
          <input
            type="text"
            placeholder="Search sponsor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-xl text-gray-600 bg-gray-200 focus:outline-none pr-10"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 text-black/70 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Conditionally render based on search */}
      {search ? (
        <section className="bg-[#0f3b38] text-white p-6 md:p-12 mx-10 mt-6 rounded-xl">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl text-center my-10">
              Replant World's proof of planting NFT gallery
            </h1>

            {/* Planter name section */}
            <div className="text-lg font-bold mb-8 flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-white/70"
              >
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zM8 13c-2.67 0-8 1.34-8 4v2h8v-2c0-.68.22-1.31.59-1.83C9.55 14.46 8.81 13 8 13zm8 0c-.81 0-1.55 1.46-2.59 2.17.37.52.59 1.15.59 1.83v2h8v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {firstPlanter}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Sponsored trees */}
              <div className="bg-white/10 rounded-xl px-4 py-2 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white/70"
                  fill="currentColor"
                >
                  <path d="M12 2c-1.3 0-2.4.6-3.2 1.6C7.6 4 6 4.5 6 6c0 1.3 1 2 1.8 2.6-.6.2-1.8.8-2.6 2C4 12 4 14 6 15c1.2.6 2.5.6 3.5.3V20h1.5v-4.2c.6.1 1.2.2 1.8.2 1 0 2.4-.2 3.7-1.1 2-1.3 2-3 1.5-4C18.8 8.2 16.8 7 15 6.6 14.2 5.6 13.2 5 12 5V2z" />
                  <path d="M11.5 20h1v2h-1z" />
                </svg>
                <div>
                  <div className="text-xl font-semibold">15,000</div>
                  <div className="text-sm text-white/70 mt-1">
                    Sponsored trees
                  </div>
                </div>
              </div>

              {/* Species */}
              <div className="bg-white/10 rounded-xl px-4 py-2 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white/70"
                  fill="currentColor"
                >
                  <path d="M20.6 4.6c-3.2 1.2-6.5 3.6-8.6 5.8-2.2 2.4-4 5.6-4.8 8.6.8-.5 3-1.7 5-3.4 2.6-2.1 6.4-5.2 8.8-8.6 1-1.5.8-3-0.4-2.4zM6.6 18.7c1.7-2.8 4.2-6.1 7.2-8.4" />
                </svg>
                <div>
                  <div className="text-xl font-semibold">45</div>
                  <div className="text-sm text-white/70 mt-1">
                    Species of trees
                  </div>
                </div>
              </div>

              {/* Value */}
              <div className="bg-white/10 rounded-xl px-4 py-2 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white/70"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path
                    d="M12 8c1 0 2 .5 2 1s-1 1-2 1-2 .5-2 1 1 1 2 1"
                    fill="#fff"
                    opacity="0.0"
                  />
                  <path d="M11 9h2v6h-2z" fill="currentColor" />
                  <path
                    d="M9.5 10.5h5"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <div className="text-xl font-semibold">16,228.14 USD</div>
                  <div className="text-sm text-white/70 mt-1">
                    Sponsored trees value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-10 mt-5">
          <div className="w-full rounded-xl overflow-hidden">
            <div className="relative w-full max-h-80 h-80">
              <Image
                src="https://i.ibb.co/60YQj4Hw/7b2b23d28341460c48165eb560435534.jpg"
                alt="Forest"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-start pl-10">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-start px-4">
                  Plant and trade verified trees <br /> using Poptech and NFTs.
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
