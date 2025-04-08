import Image from 'next/image';

export default function Examples() {
  // JSON object for content
  const examples = [
    {
      id: 1,
      title: "3 Story Dolls House",
      description: "Step into a miniature world with this intricately laser-cut dollhouse, a stunning blend of craftsmanship and creativity, perfect for painting to your heart’s desire. Crafted from 3mm Birch plywood. The pitched roof includes shingle outlines for a realistic finish. Left unpainted, the natural wood exudes rustic charm, but it’s designed as a blank canvas—use acrylics, watercolors, or stains to bring the facade to life with vibrant hues or weathered effects.",
      image: "/dollhouse.jpg",
    },
    {
      id: 2,
      title: "Engraving",
      description: "Behold a masterpiece of light and precision with this stunning laser-engraved clear acrylic artwork, a captivating blend of elegance and innovation. The laser’s meticulous touch etches with breathtaking detail, creating a three-dimensional illusion as light refracts through the transparent medium. This is more than art; it’s a window to wonder, frozen in acrylic clarity",
      image: "/engraving.jpg",
    },
    {
      id: 3,
      title: "3D puzzles",
      description: "Piece together adventure with these intricately laser-cut 3D puzzles, a hands-on celebration of vehicles, planes, and insects in stunning detail. Crafted from 3mm-thick MDF.Perfect for hobbyists or gifting, these 3D marvels, bring engineering and nature to life, one satisfying click at a time.",
      image: "/puzzles.jpg",
    },
    {
      id: 4,
      title: "Perspex Cutting and bending",
      description: "Elevate your Raspberry Pi setup with this sleek, custom-made acrylic enclosure, designed to showcase and protect in equal measure. Precision-cut from 3mm-thick acrylic, this 95x65x35mm box is tailored for a Raspberry Pi . Strategically placed cutouts along the sides ensure optimal airflow, while port openings for USB, HDMI, and power are seamlessly aligned for hassle-free access. Assembled with a snap-fit lid, it combines durability with a modern, minimalist vibe. Perfect for a media center, smart home hub, or tech display, this acrylic box turns your Raspberry Pi into a functional work of art.",
      image: "/perspex.jpg",
    },
    {
      id: 5,
      title: "Engraved Light",
      description: "Illuminate your space with this stunning acrylic laser-engraved night light, custom-shape. Crafted from 3mm-thick clear acrylic,precision-etched into the surface. The laser engraving catches the glow from the LED base, casting a soft, hue across the room as light dances through the intricate lines of",
      image: "/light_engraving.jpg",
    },
    {
      id: 6,
      title: "Photo Engraving",
      description: "Honor the memory of a beloved companion with this poignant laser-engraved photograph on wood, a lasting tribute to your pet. Etched onto an 150 x 210 mm Birch Ply, the image captures a cherished moment. The laser’s fine touch brings out every detail: the texture of a beloved companion,",
      image: "/phot_engraving.jpg",
    },
    {
      id: 7,
      title: "Photo Engraving",
      description: "Preserve the joy of family with this charming laser-engraved photograph on wood, a heartwarming snapshot of grandkids in their happiest moment. Carved into a 150 x 210 panel of Birch Ply, the image bursts with life flashing a toothy grin, and . The laser’s precision captures every detail: the twinkle in their eyes, the tousled hair, and the pure, unfiltered delight.",
      image: "/photo_engraving2.jpg",
    },
    {
      id: 8,
      title: "Cutting and Engraving Leather",
      description: "Stoke the flames with this handcrafted personal bellows, a striking fusion of leather artistry and practical design. This custom bellows is more than a tool—it’s a statement piece, blending heritage craftsmanship with a personal story, ready to breathe warmth into any setting.",
      image: "/leather.jpg",
    },
    {
      id: 9,
      title: "Reverse Engraving",
      description: "Carry a piece of sentiment wherever you go with these custom reverse laser-engraved wooden keyrings, designed to impress with understated elegance. Crafted from 6mm thick, oval discs of MDF, each keyring features a unique reverse engraving technique",
      image: "/reverse_engraving.jpg",
    },
  ];

  return (
    <div className="py-12 md:px-42">
      <h3 className="text-3xl font-bold text-left mb-8 text-[#d94948]">Previous Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example) => (
          <div key={example.id} className="bg-white rounded shadow-md p-4">
            <div className="relative w-full h-64">
              <Image
                src={example.image}
                alt={example.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded"
              />
            </div>
            <h4 className="text-lg font-semibold mt-4">{example.title}</h4>
            <p className="text-gray-600">{example.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
