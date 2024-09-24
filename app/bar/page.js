import Image from "next/image";

const BarPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/bar1.jpg" // Replace with your hero image
          alt="Lobby Bar"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Lobby Bar</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Lobby Bar</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to the Lobby Bar, where classic charm meets modern sophistication. Whether you're looking to relax with a cocktail 
          or enjoy a lively evening with friends, our bar offers the perfect ambiance. With an extensive selection of beverages, 
          including fine wines, creative cocktails, and premium spirits, we cater to every taste. The Lobby Bar is the ideal place 
          to unwind after a long day or celebrate a special occasion.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Indulge in our delicious range of light bites, expertly crafted to complement your drink. Our comfortable seating and 
          intimate atmosphere ensure a memorable experience, whether you're visiting for a casual drink or a lively night out.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/images/bar1.jpg", "/images/bar2.jpg", "/images/bar3.jpg", "/images/bar4.jpg", "/images/bar5.jpg", "/images/bar6.webp"].map((imageSrc, index) => (
            <div key={index} className="w-full h-64 relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={imageSrc}
                alt={`Bar Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Features & Policies</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Extensive range of beverages, including fine wines, cocktails, and spirits</li>
            <li>Live music on selected evenings</li>
            <li>Open from 6:00 PM to 1:00 AM daily</li>
            <li>Casual and relaxed atmosphere</li>
            <li>Outdoor seating available</li>
            <li>No outside food or beverages allowed</li>
            <li>Age policy: 18+ only</li>
          </ul>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Location & Contact</h3>
        <p className="text-gray-700 text-lg mb-6">
          The Lobby Bar is located at the Luxury Hotel, Ground Floor, City Center, New York. Join us for an unforgettable experience 
          with our premium beverages and live entertainment. For reservations or inquiries, please contact us at +1 (555) 123-4567.
        </p>
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.805264340474!2d144.96328031589238!3d-37.813237442787454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb481b5e4a4b045db!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633569284310!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default BarPage;
