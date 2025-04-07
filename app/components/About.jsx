import React from 'react';

export default function About() {
  // JSON object for content
  const content = {
    subheading: "About Me",
    heading: "Co2 Laser Engraving and Cutting Services",
    paragraphs: [
      "With 15 years of experience in the laser industry, honed at one of the Western Cape’s most successful laser companies, I bring a wealth of expertise to every project. Now operating independently with a single, high-precision machine, I offer top-tier laser engraving and cutting services tailored to your needs. As an amputee in a wheelchair, I’ve never let challenges define me—my skills, dedication, and passion shine through in every piece I create. I specialize in transforming photographs into stunning engravings and mastering the art of acrylic bending, turning ideas into tangible, personalized works of art. Let’s bring your vision to life with craftsmanship that stands the test of time.",
      "I specialize in laser cutting and engraving services, delivering precision without the overhead of a full woodworking workshop or stocked inventory. My focus is on transforming your ideas into expertly crafted cuts and engravings, tailored to your specifications. With a strong knack for design, I also bring creative expertise to the table, ensuring every project starts with a vision as sharp as the final result."
    ]
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h4 className="text-lg text-[#d94948] font-semibold uppercase mb-2">{content.subheading}</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{content.heading}</h1>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
