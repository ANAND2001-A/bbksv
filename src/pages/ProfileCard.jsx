import React from "react";
import img from "../assets/images/sir.jpg"; // Update path if needed

const profiles = [
  {
    name: "Jill Scott",
    role: "Frontend Engineer",
    desc: "Transforming ideas into realities, creating interfaces that inspire and engage users dreams.",
    image: img,
    links: ["dribbble", "pinterest", "codepen"],
  },
  {
    name: "Alex Morgan",
    role: "UI/UX Designer",
    desc: "Crafting delightful user experiences through design and innovation.",
    image: img,
    links: ["dribbble", "pinterest"],
  },
  {
    name: "Taylor West",
    role: "Product Designer",
    desc: "Designing with empathy to make delightful experiences.",
    image: img,
    links: ["dribbble", "codepen"],
  },
];

const iconMap = {
  dribbble: "fab fa-dribbble",
  pinterest: "fab fa-pinterest",
  codepen: "fab fa-codepen",
};

const ProfileCard = ({ profile }) => {
  return (
    <div className="relative bg-zinc-900 text-white rounded-3xl min-h-[20rem] p-6 pt-24 lg:pt-6 w-full shadow-lg">
      {/* Profile Image */}
      <div
        className="
          absolute 
          top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
          md:left-1/2 md:-translate-x-1/2 
          lg:top-6 lg:left-[-80px] lg:translate-x-0 lg:-translate-y-0
          z-10
        "
      >
        <img
          src={profile.image}
          alt={profile.name}
          className="
            w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-60 
            object-cover 
            rounded-full md:rounded-2xl lg:rounded-3xl 
            shadow-lg
          "
        />
      </div>

      {/* Text Content */}
      <div className="text-center lg:text-left mt-6 lg:ml-32">
        <h2 className="text-xl font-bold">{profile.name}</h2>
        <p className="text-gray-300 text-sm mt-1">{profile.role}</p>
        <p className="text-gray-400 text-sm mt-3">{profile.desc}</p>

        {/* Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-5">
          {profile.links.map((platform, index) => (
            <button
              key={index}
              className={`bg-zinc-800 p-2 rounded-full ${
                platform === "dribbble" ? "border border-pink-500" : ""
              }`}
            >
              <i className={`${iconMap[platform]} text-white`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileList = () => {
  return (
    
      <div className="grid gap-y-20 gap-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    
  );
};

export default ProfileList;
