import emailjs from "@emailjs/browser";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
    const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatusMessage("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      setStatusMessage("Failed to send email. Please try again.");
    }
  };

  const tonyStark: string = `Michael,

Here's the plan: We build something awesome, and you make sure everyone knows it's from Stark Industries.

-Tony (aka Iron Man)
  `;

  return (
    <div className="max-w-[65vw] max-h-[90vh] mx-auto w-1/2 h-[66.8vh] my-20 flex flex-col items-center">
      <h2 className="font-bold text-3xl">Let's connect!</h2>
      {statusMessage && <p className="text-green-800">{statusMessage}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-20 w-full">
        <div className="w-full">
          <label htmlFor="name" className="text-2xl">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tony Stark"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 mt-1 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="text-2xl">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="t.stark@starkindustries.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-600 mt-1 p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="message" className="text-2xl">
            Message:
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder={tonyStark}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-600 mt-1 p-2 rounded-md w-full resize-y max-h-60"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 border float-right py-2 px-6 mt-4 rounded-md text-white text-xl hover:bg-indigo-400 w-36 self-end"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
