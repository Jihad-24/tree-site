import Image from "next/image";
import Footer from "./Footer";

export default function TopSponsors() {
  return (
    <div className="">
      {/* Top Sponsors & Planters Section */}
      <section className="px-10 mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Top Sponsors */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Top sponsors</h2>
              <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  name: "Binford Ltd.",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                },
                {
                  name: "Acme Co.",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                },
                {
                  name: "Barone LLC.",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                },
                {
                  name: "Abstergo Ltd. Ltd.",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                },
                {
                  name: "Biffco Enterprises Ltd.",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                },
              ].map((sponsor, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-green-50/30 rounded-2xl px-5 py-4 hover:bg-green-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-semibold">{i + 1}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border">
                      <Image
                        src={sponsor.img}
                        alt={sponsor.name}
                        className="w-8 h-8 object-contain"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{sponsor.name}</h3>
                      <p className="text-sm text-gray-500">Company</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-lg">1471</p>
                      <p className="text-sm text-gray-500">sponsored trees</p>
                    </div>

                    <div className="ml-4 text-green-700 bg-green-100 px-3 py-2 rounded-full text-sm font-semibold">
                      +46%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Planters */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Top planters</h2>
              <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  name: "Bessie Cooper",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                  trees: 1093,
                },
                {
                  name: "Szűts Gabriella",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                  trees: 965,
                },
                {
                  name: "Nagy Tímea",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                  trees: 855,
                },
                {
                  name: "Katona Beatrix",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                  trees: 754,
                },
                {
                  name: "Vincze Nikolett",
                  img: "https://i.ibb.co/QM9mfzB/avatar.png",
                  trees: 368,
                },
              ].map((planter, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-green-50/30 rounded-2xl px-5 py-4 hover:bg-green-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-semibold">{i + 1}</span>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={planter.img}
                        alt={planter.name}
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{planter.name}</h3>
                      <p className="text-sm text-gray-500">Individual</p>
                    </div>
                  </div>

                  <div className=" flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-lg">{planter.trees}</p>
                      <p className="text-sm text-gray-500">planted trees</p>
                    </div>

                    <div className="ml-4 text-green-700 bg-green-100 px-3 py-2 rounded-full text-sm font-semibold">
                      +46%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
