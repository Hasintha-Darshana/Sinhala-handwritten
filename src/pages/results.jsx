export default function ResultPage() {
    return(
        <div className="w-full min-h-screen bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
            <h1 className="text-4xl font-bold text-center text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
                Accuarcy of the Model : 89.20%
            </h1>
            <div className="w-full h-screen flex items-center justify-center">
                <img src="n.PNG" className="w-[400px] h-[400px] rounded-2xl shadow-2xl border-4 mx-4 border-[#1e3a8a] hover:scale-105 transition-transform duration-300"/>
                <img src="na.PNG" className="w-[400px] h-[400px] rounded-2xl shadow-2xl border-4 mx-4 border-[#1e3a8a] hover:scale-105 transition-transform duration-300"/>
            </div>
        </div>
    )
}