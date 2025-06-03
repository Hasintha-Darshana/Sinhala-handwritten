import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/results" className="hover:underline">Results</Link></li>
            <li><Link to="/discussion" className="hover:underline">Discussion</Link></li>
            <li><Link to="/team" className="hover:underline">Team</Link></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
            <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a></li>
            <li><a href="https://github.com/AlexeyAB/darknet" target="_blank" rel="noopener noreferrer">YOLO</a></li>
            <li><a href="https://roboflow.com/" target="_blank" rel="noopener noreferrer">Roboflow</a></li>
            <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">FastAPI</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Copyright and Social */}
      <div className="text-center text-xs space-y-4">
        <p>© 2025 Sinhala Handwritten Letter Recognition. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 text-xl">
          <FaFacebook />
          <FaInstagramSquare />
          <FaXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
