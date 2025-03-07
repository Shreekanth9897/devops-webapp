import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/profile")
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error fetching profile:", error));
    }, []);

    if (!profile) {
        return <div className="text-white text-center mt-20">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
            <div className="w-full max-w-4xl bg-gray-900 shadow-2xl rounded-lg p-12 font-sans">
                <div className="text-left mb-6">
                    <h1 className="text-5xl font-extrabold text-white animate-slide-in-left">{profile.name}</h1>
                    <h2 className="text-3xl font-semibold text-gray-400 animate-slide-in-left mt-2">{profile.role}</h2>
                </div>
                <p className="text-md text-gray-300 text-left mb-6 animate-slide-in-left">{profile.experience}</p>
                <p className="text-md text-gray-400 text-left mb-6 animate-slide-in-left">{profile.description}</p>
                <div className="flex items-center justify-start space-x-6 text-lg animate-slide-in-left">
                    <a href={`mailto:${profile.contact.email}`} className="flex items-center text-blue-400 hover:underline">
                        <FaEnvelope className="mr-2" /> Email
                    </a>
                    <a href={`https://wa.me/${profile.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:underline">
                        <FaPhone className="mr-2" /> Phone
                    </a>
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:underline">
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;