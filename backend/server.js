
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const profileData = {
    name: "Shreekanth B N",
    role: "Software Developer",
    experience: "3 years of experience in Frontend Development",
    description: "Passionate software developer specializing in frontend technologies. Proficient in building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS. Skilled in integrating APIs, optimizing UI performance, and implementing modern UI/UX principles.",
    contact: {
        email: "shreekanth9897@gmail.com",
        phone: "+91 9902759706",
    linkedin: "https://linkedin.com/in/shreekanth-b-n",
    github: "https://github.com/shreekanth9897"
    }
};

app.get('/api/profile', (req, res) => {
    res.json(profileData);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});