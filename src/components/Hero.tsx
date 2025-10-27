import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="px-10 mt-10">
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
    </div>
  );
}
