export default function ResultPage() {
    return(
        <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
            <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
                Accuracy of the Model : <span className="text-[#3b82f6]">89.20%</span>
            </h1>
            <div className="w-full h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-[#1e3a8a]">
                    Results of the Project
                </h1>
                <img src="n.PNG" className="w-[400px] h-[400px] rounded-2xl shadow-2xl border-4 mx-4 object-cover border-[#1e3a8a] hover:scale-105 transition-transform duration-300"/>
                <img src="na.PNG" className="w-[400px] h-[400px] rounded-2xl shadow-2xl border-4 mx-4 object-cover border-[#1e3a8a] hover:scale-105 transition-transform duration-300"/>
            </div>
            <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
                Project Demonstration
            </h1>
            <video
                className="w-full max-w-3xl mx-auto mt-12 rounded-2xl shadow-2xl"
                controls
                >
                    <source src="demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
            </video>

        
        </div>
    )
}
