"use client";

import Image from "next/image";

export default function ArtworkPage() {
  const artworks = [
    {
      title: "Me!",
      images: ["/Gurby.png", "/gurbiee.gif"],
    },
    {
      title: "A D&D Character I made!",
      images: ["/DndCharacter.png", "/kirbygurby.png"],
    },
    {
      title: "Shoes!",
      images: ["/ShoeR.jpg", "/ShoeL.jpg"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-center text-white py-20">
      <h1 className="text-5xl font-bold mb-10">My Artwork</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {artworks.map((art, i) => (
          <div key={i} className="bg-black rounded shadow p-4 flex flex-col items-center">
            {art.images.map((imgSrc, idx) => (
              <div key={idx} className="w-full h-64 relative mb-4">
                <Image
                  src={imgSrc}
                  alt={`${art.title} ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>
            ))}
            <h2 className="text-xl font-semibold">{art.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
