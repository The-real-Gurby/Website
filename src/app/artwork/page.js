"use client";


export default function ArtworkPage() {
  return (
    <main className="min-h-screen bg-black text-center text-white py-20">
      <h1 className="text-5xl font-bold mb-10 ">My Artwork</h1>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 bg-black">
        <div className="bg-black rounded shadow p-4">
          <img
            src="/Gurby.png"
            alt="Artwork 1"
            className="rounded mb-4 w-full h-64 object-cover"
          />
          
          <h2 className="text-xl font-semibold">Me!</h2>
          <img
            src="/gurbiee.gif"
            alt="wiggle paint!"
            className="rounded mb-4 w-full h-64 object-cover"
          />
          <h2 className="text-xl font-semibold">wiggle paint!</h2>
        </div>

        <div className="bg-black ">
          <img
            src="/DndCharacter.png"
            alt="Artwork 2"
            className="rounded mb-4 w-full h-64 object-cover"
          />
          <h2 className="text-xl font-semibold">A D&D Character I made!</h2>\
           <img
            src="kirbygurby.png"
            alt="kirby gurby"
            className="rounded mb-4 w-full object-cover"
          />
          <h2 className="text-xl font-semibold">Kirby log but it's me!</h2>
        </div>

        <div className="bg-blcak">
          <img
            src="/ShoeR.jpg"
            alt="Artwork 3"
            className="rounded mb-4"
          />
          <img
            src="/ShoeL.jpg"
            alt="Artwork 3"
            className="rounded mb-4"
          />
          
          <h2 className="text-xl font-semibold">Shoes!</h2>
        </div>
      

     
        </div>
    </main>
  );
}
