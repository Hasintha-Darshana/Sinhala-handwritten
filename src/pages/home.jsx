export default function HomePage() {
  return (
    <div className="w-full min-h-screen  bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center  space-y-6 md:pr-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg text-[#1e3a8a]">
          Sinhala Handwritten Character Detection
        </h1>
        <p className="text-lg leading-relaxed text-gray-800 text-justify">
          Our project focuses on detecting Sinhala handwritten characters using the YOLOv11 object
          detection model. The complexity of Sinhala script makes traditional CNN-based methods less
          effective. By leveraging YOLOv11, we enable real-time recognition and classification directly
          from images.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:ml-12">
        <img
          src="ui.PNG"
          alt="UI Preview"
          className="max-w-full h-auto rounded-2xl shadow-2xl border-4 border-[#1e3a8a] hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
