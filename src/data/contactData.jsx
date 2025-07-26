const contactData = {
  title: "Contact Me",
  subtitle: "Reach out via form, social media, or support platforms.",

  tabs: [
    {
      label: "Form",
      value: "form",
      icon: "bx bx-envelope",
    },
    {
      label: "Social",
      value: "social",
      icon: "bx bx-link",
    },
    {
      label: "Support Me",
      value: "support",
      icon: "bx bx-heart",
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/GrexThinh",
      icon: "bx bxl-github",
      description: "Explore my code & projects",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thinhgrex/",
      icon: "bx bxl-linkedin-square",
      description: "Let’s connect professionally",
    },
    {
      label: "Zalo",
      href: "https://zalo.me/0587030273",
      icon: "bx bxl-whatsapp",
      description: "My zalo phone",
    },
  ],

  supportPlatforms: [
    {
      label: "QRIS",
      type: "image",
      imageSrc: "/assets/qris.jpg",
      alt: "Scan to support via QRIS",
    },
  ],
};

export default contactData;
