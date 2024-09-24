import Image from "next/image";

const BanquetPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Container */}
      <div className="w-full max-w-screen-xl mx-auto mt-8 bg-white shadow-lg p-6 rounded-lg">
        
        {/* Title and Rating Section */}
        <h1 className="text-5xl font-bold text-gray-800 text-left">
          Luxury Hotel Banquet
        </h1>
        
        {/* Rating */}
        <div className="flex justify-left items-left mt-2">
          <span className="text-red-500 text-3xl">★★★★★</span>
          <p className="ml-2 text-gray-600 text-lg">Ratings: 4.0 & 6,500+ Reviews</p>
        </div>
        
        {/* Main Image */}
        <div className="my-6">
          <Image
            src="/images/banquet1.png"
            alt="Banquet Hall"
            width={2000}
            height={1000}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
        
        {/* Small Images Gallery */}
        <div className="flex justify-between items-center space-x-4 mb-6">
          <Image
            src="/images/banquet2.png"
            alt="Banquet Hall Small"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md object-cover"
          />
          <Image
            src="/images/banquet3.png"
            alt="Banquet Hall Small"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md object-cover"
          />
          <Image
            src="/images/banquet4.png"
            alt="Banquet Hall Small"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
        
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          Luxury Hotel Banquet is an ensemble of experiences, luxury, and sophistication. Ideal for unique experiences and lifelong memories, our elegant hall is the perfect place for you to host your memorable moments. Renowned for excellence in hospitality, Luxury Hotel Banquet offers a refreshingly modern venue for your events. Embellished with royal chandelier lights, vibrant ambiance, and sophisticated decor, our banquet hall is the ideal setting for a wide variety of events.
        </p>

        {/* Venue Policies Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Venue Policies</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Column 1: Timings, Slots, Changing Room */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Timings & Slots</h3>
              <p className="text-gray-600">Venue closes at 12:00 AM</p>
              <p className="text-gray-600">Morning: 9:00 AM - 12:00 AM</p>

              <h3 className="mt-4 text-xl font-semibold text-gray-700">Changing Room</h3>
              <p className="text-gray-600">No Changing Room A/C</p>

              <h3 className="mt-4 text-xl font-semibold text-gray-700">Advance</h3>
              <p className="text-gray-600">50% at the time of booking</p>

              <h3 className="mt-4 text-xl font-semibold text-gray-700">Parking</h3>
              <p className="text-gray-600">Valet provided by the venue</p>
              <p className="text-gray-600">Parking space available for 100 vehicles</p>
            </div>

            {/* Column 2: Alcohol, Cancellation, Taxes, etc. */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Alcohol</h3>
              <p className="text-gray-600">Alcohol allowed at the venue</p>
              <p className="text-gray-600">No outside alcohol allowed</p>

              <h3 className="mt-4 text-xl font-semibold text-gray-700">Taxes</h3>
              <p className="text-gray-600">Taxes F&B: 18.00%</p>

              <h3 className="mt-4 text-xl font-semibold text-gray-700">Other Policies</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Music allowed</li>
                <li>Halls are air-conditioned</li>
                <li>Ample parking</li>
                <li>Firecrackers allowed</li>
                <li>Overnight wedding allowed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features of Venue Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features of Venue</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ample parking space plus valet</li>
            <li>In-house catering and décor available</li>
            <li>Located half an hour away from Chaudhary Charan Singh International Airport</li>
            <li>4-star hotel from a premium chain</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BanquetPage;
