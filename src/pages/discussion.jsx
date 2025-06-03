export default function DiscussionPage() {
  const cards = [
    {
      title: "📌 Project Goal",
      content:
        "Our goal was to build a system that can accurately recognize handwritten Sinhala characters using deep learning and a custom web application.",
    },
    {
      title: "📌 Why It Matters",
      content:
        "Sinhala handwriting recognition is challenging due to its complex character set and variations in writing styles. This tool helps digitize handwritten documents, assist educators and students, and preserve Sinhala literature.",
    },
    {
      title: "📌 Key Features",
      content: (
        <ul className="list-disc list-inside">
          <li>Upload handwritten images</li>
          <li>Detect and label Sinhala characters instantly</li>
          <li>Real-time performance with bounding boxes</li>
          <li>Web-based and easy to use</li>
        </ul>
      ),
    },
    {
      title: "📌 Improvements Over Traditional Methods",
      content:
        "Unlike older systems that require pre-segmented characters, our approach detects multiple characters in one image—faster and more efficient.",
    },
    {
      title: "📌 Use Cases",
      content: (
        <ul className="list-disc list-inside">
          <li>Schools and educational tools</li>
          <li>Digital Sinhala archives</li>
          <li>Automated document processing</li>
        </ul>
      ),
    },
    {
      title: "📌 Key Takeaway",
      content:
        "Our research shows that object detection models like YOLO can be effectively adapted for complex scripts like Sinhala, making handwritten digitization more accessible and scalable.",
    },
  ];

  // Separate cards into left and right columns
  const leftColumn = cards.filter((_, i) => i % 2 === 0);
  const rightColumn = cards.filter((_, i) => i % 2 !== 0);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300 mb-10">
        Discussion
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {leftColumn.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-800 hover:scale-105 transition-transform duration-300 mx-4"
            >
              <h2 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                {card.title}
              </h2>
              <div className="text-gray-700 text-justify">{card.content}</div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12">
          {rightColumn.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-800 hover:scale-105 transition-transform duration-300 mx-4"
            >
              <h2 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                {card.title}
              </h2>
              <div className="text-gray-700 text-justify">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
