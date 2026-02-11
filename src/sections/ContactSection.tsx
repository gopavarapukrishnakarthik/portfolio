import { useState } from "react";
import Reveal from "@/components/ui/reveal";
import ShineBorder from "@/components/ui/shine-border";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const recipientEmail = "gkkarthik2021@gmail.com";
  const whatsappNumber = "919490998088";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a reason";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { name, email, phone, subject, message } = formData;

    const emailBody = `
Hello Karthik,

You have received a new portfolio enquiry:

Name: ${name}
Email: ${email}
Mobile: ${phone}

Reason: ${subject}

Message:
${message}
`;

    const mailtoLink =
      `mailto:${recipientEmail}` +
      `?subject=${encodeURIComponent(subject || "Portfolio Enquiry")}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  const handleWhatsAppSend = () => {
    if (!validateForm()) return;

    const { name, email, phone, subject, message } = formData;

    const whatsappMessage = `
Hello Karthik 👋

New Portfolio Enquiry:

Name: ${name}
Email: ${email}
Mobile: ${phone}
Reason: ${subject}

Message:
${message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-sm text-gray-400">
              gkkarthik2021@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-green-400/10 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-400">
              +91 9490998088
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-sm text-gray-400">
              Vijayawada, AP
            </p>
          </div>
        </div>

      <ShineBorder>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {["name", "email", "phone", "subject"].map((field) => (
              <div key={field}>
                <label className="block text-sm mb-2 text-gray-300 capitalize">
                  {field === "subject" ? "Reason to Reach Out" : field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors[field] ? "border-red-500" : "border-white/10"
                  } focus:border-yellow-400 outline-none`}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.message ? "border-red-500" : "border-white/10"
                } focus:border-yellow-400 outline-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Mail size={18} />
                Send Email
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Send size={18} />
                Send WhatsApp
              </button>
            </div>
          </form>
        </ShineBorder>
      </Reveal>
    </section>
  );
}
