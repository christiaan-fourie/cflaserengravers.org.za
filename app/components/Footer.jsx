import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <ScrollToTop />
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} CF Laser Engravers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
