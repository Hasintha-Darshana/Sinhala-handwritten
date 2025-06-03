export default function TeamPage() {
  const supervisor = {
    name: "Mr. Chamila Karunatilake",
    role: "Main Supervisor",
    image: "/team/chamila.PNG"
  };

  const members = [
    {
      name: "Hasintha Darshana",
      role: "Team Member",
      image: "/team/hasi.PNG"
    },
    {
      name: "Nadun Sameera",
      role: "Team Member",
      image: "/team/nadun.PNG"
    },
    {
      name: "Kavindya Sandeepani",
      role: "Team Member",
      image: "/team/kavi.PNG"
    }
  ];

  const Card = ({ name, role, image }) => (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
      <img
        src={image}
        alt={name}
        className="w-22 h-22 rounded-full object-cover mb-4 border-4 border-[#1e3a8a]/20"
      />
      <h3 className="text-xl font-bold text-[#1e3a8a]">{name}</h3>
      <p className="text-lg text-gray-800">{role}</p>
    </div>
  );

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#edf2f8] to-[#d6e6f2] px-6 pt-28 pb-12">
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12 hover:scale-105 transition-transform duration-300">
        Our Team
      </h1>

      {/* Supervisor Section */}
      <div className="flex justify-center mb-12">
        <Card {...supervisor} />
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <Card key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
