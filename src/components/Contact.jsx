import contactData from "../data/contactData.jsx";
import Tippy from "@tippyjs/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { supabaseUrl, supabaseKey } from "../constants";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(supabaseUrl, supabaseKey);

const Contact = () => {
  // const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Comment is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Insert testimonial ke Supabase
    const { error } = await supabase.from("portfolio_emails").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error("Error submitting email:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to submit email. Please try again.",
        confirmButtonColor: "#1f2937",
        customClass: {
          popup: "dark:bg-gray-800 dark:text-white",
          title: "dark:text-white",
          content: "dark:text-white",
        },
      });
      return;
    } else {
      Swal.fire({
        title: "Message Sent! ✉️",
        text: "Thank you for reaching out. I’ll get back to you soon!",
        icon: "success",
        confirmButtonColor: "#1F2937",
        confirmButtonText: "Cool 😎",
      });
      setFormData({ name: "", email: "", message: "" });
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div
          className="text-center mb-12 text-gray-800"
          data-aos-delay="600"
          data-aos="fade-down"
        >
          <h2 className="text-5xl font-bold dark:text-white mb-2">
            {contactData.title}
          </h2>
          <p className="text-lg dark:text-gray-400">{contactData.subtitle}</p>
        </div>

        {/* Tabs Menu */}
        {/* <div className="flex justify-center mb-8 gap-4 flex-wrap" data-aos-delay="600" data-aos="fade-down">
          {[
            { value: "contact", label: "Contact Me", icon: "bx bx-envelope" },
            { value: "support", label: "Support Me", icon: "bx bx-heart" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                  : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"
              }`}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* Tabs Content */}
        <div>
          {
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              {/* Left Side: Social Links */}
              <div className="grid gap-4 max-w-xl mx-auto lg:mx-0">
                {contactData.socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-7 w-full  py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all"
                    aria-label={item.label}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-semibold text-2xl leading-tight">
                          {item.label}
                        </span>
                        <span className="text-sm text-gray-800 dark:text-white leading-snug">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white" />
                  </a>
                ))}
              </div>

              {/* Right Side: Contact Form */}
              <div className="rounded-lg py-12 px-7 shadow-lg border h-fit border-white max-w-xl w-full mx-auto lg:mx-0">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <i className="bx bx-envelope text-lg" />
                  Send Me a Message
                </h3>
                <form className="grid gap-4" >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                  {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                  <textarea
                    placeholder="Your Message"
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                    rows="5"
                    name="message"  
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                  <Tippy content="Send your message" placement="top">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-4 py-3 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <i className="bx bx-loader-alt animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <i className="bx bx-send" />
                          Submit
                        </span>
                      )}
                    </button>
                  </Tippy>
                </form>
              </div>
            </div>
          }

          {/* {activeTab === "support" && (
            <div className="grid gap-4 max-w-xl mx-auto" data-aos-delay="600" data-aos="fade-down">
              {contactData.supportPlatforms.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform max-w-xl mx-auto"
                >
                  {item.type === "image" ? (
                    <div className="flex flex-col items-center text-center">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-800 dark:text-white mb-4 leading-relaxed">
                        If my work has helped or inspired you, consider supporting me by scanning the QR code below. Every little bit means a lot 🙌
                      </p>
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
