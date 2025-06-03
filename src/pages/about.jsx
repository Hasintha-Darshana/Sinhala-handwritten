import { FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiRoboflow, SiTailwindcss } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
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
        <div className="w-full h-[50px]"></div>
        <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
          Objective
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          Develop a system to detect Sinhala handwritten characters with high accuracy by training a 
          custom dataset using the YOLOv11 object detection model. 
        </p>
        <div className="w-full h-[50px]"></div>
        <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
          Future Works
        </h1>
         <p className="text-lg leading-relaxed text-justify">
          As we continue to improve our Sinhala handwritten character recognition system, several key areas have been identified for future development. First, we plan to significantly expand our dataset by collecting a larger and more diverse set of handwritten samples. This will include characters written by individuals from different age groups and backgrounds, and will also cover compound characters and modifiers commonly used in natural Sinhala writing. Such diversity will help the model generalize better and improve its overall accuracy. 
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Another important focus is enhancing the quality of our annotations. We aim to involve multiple annotators and introduce verification steps to minimize labeling errors and inconsistencies, which are critical for effective model training. Additionally, we are exploring the integration of Sinhala language models that understand grammar and context. This would enable the system to make smarter predictions by considering the relationships between characters, helping to resolve ambiguities—especially in the case of visually similar letters.
        </p>
        <p className="text-lg leading-relaxed text-justify">
         To ensure broader accessibility, we are also working on optimizing the YOLOv11 model for use on mobile phones and other low-resource devices. Through techniques such as model compression and pruning, we hope to enable real-time recognition even on devices with limited computational power. Finally, we recognize the value of user interaction in improving system performance. Therefore, we plan to add feedback features that allow users to correct errors or confirm accurate predictions, helping us continuously refine the model with real-world input.
        </p>
        
      </div>
      <div className="w-full h-[50px]"></div>
        <h1 className="text-4xl font-bold text-center text-[#1e3a8a] ">
          Tech Stack
        </h1>
        <div className="w-full h-[300px]  flex items-center-safe justify-evenly">
           <FaReact className="text-8xl text-[#00c6f7] mx-4 hover:scale-125 transition-transform duration-300"/>
           <SiTailwindcss className="text-8xl text-[#00bcff] mx-4 hover:scale-125 transition-transform duration-300"/>
           <FaPython className="text-8xl text-[#3776AB] mx-4 hover:scale-125 transition-transform duration-300"/>
           <SiFastapi className="text-8xl text-[#009485] mx-4 hover:scale-125 transition-transform duration-300"/>
           <SiRoboflow className="text-8xl text-[#6306c9] mx-4 hover:scale-125 transition-transform duration-300"/>

        </div>
    </div>
  );
}
