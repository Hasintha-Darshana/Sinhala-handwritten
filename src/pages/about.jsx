export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#1e3a8a]">
          About the Project
        </h1>

        <p className="text-lg leading-relaxed text-justify">
          Our research project focuses on developing a machine learning-based system to detect
          Sinhala handwritten characters using object detection techniques. The Sinhala script, known
          for its rounded shapes and stylistic variations, poses significant challenges for traditional
          character recognition methods.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          To address this, we collected a custom dataset of 60 Sinhala characters and trained a
          YOLOv11 object detection model using annotated images. The system was designed for
          real-time detection and integrated with a React-based front-end, allowing users to upload
          handwritten images and get instant results.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          This project aims to support future Sinhala OCR (Optical Character Recognition) applications,
          assist researchers, and enhance digital tools for the Sinhala language. It represents an
          important step toward bridging the technological gap in Sinhala handwritten text recognition.
        </p>
      </div>
    </div>
  );
}
