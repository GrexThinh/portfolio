const aboutData = {
    title: "About Me",
    subtitle: "Discover my journey, passions, and the story behind my work",
    image: "src/assets/profile2.jpg",

    biodata: [
        { label: "Name", value: "Nguyen Van Thinh", icon: "bx bx-id-card" },
        { label: "Date of Birth", value: "September, 17-2001", icon: "bx bx-calendar" },
        { label: "Current Residence", value: "Tan Hoa Ward, Ho Chi Minh City, Vietnam", icon: "bx bx-map" },
        { label: "Email", value: "vanthinhnq@gmail.com", icon: "bx bx-envelope" },
        { label: "Phone", value: "+84 587 030 273", icon: "bx bx-phone" },
        { label: "Education", value: "Vietnam National University - University of Science", icon: "bx bx-book" },
        { label: "GPA", value: "8.17 / 10.00", icon: "bx bx-award" },
    ],

    resume: {
        label: "Download My Resume",
        href: null,
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `I am a Fullstack Developer with strong experience in building scalable web applications across both frontend and backend. Proficient in modern JavaScript frameworks, backend development using .NET/Node.js, and database management. Skilled in leveraging Azure cloud services to deploy, manage, and monitor production-ready applications.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `My ambition is to become an expert software engineer.
                I also desire to study and work in an international environment where I can gain a wide range of knowledge
                from people around the world. I think being diligent and willing to learn new things and always find the best
                solution is what I always look for in my work and in my life.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;
