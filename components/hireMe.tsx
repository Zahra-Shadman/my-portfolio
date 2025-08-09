"use client";
import React, { forwardRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

const HireMe= forwardRef<HTMLDivElement>((props, ref)=> {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phoneNumber);
      formDataToSend.append(
        "message",
        `A user with the above information requests collaboration and/or project registration.

Full Name: ${formData.fullName}
Phone Number: ${formData.phoneNumber}
Email: ${formData.email}
Message: ${formData.message}`
      );
      formDataToSend.append(
        "_subject",
        `Collaboration Request - ${formData.fullName}`
      );
      formDataToSend.append("_replyto", formData.email);

      const response = await fetch("https://formspree.io/f/xgvkgpqp", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending:", error);
      toast.error("Error sending request. Please try again or contact us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section  ref={ref} className="w-full flex flex-col items-center justify-center gap-4 bg-blue-950 rounded-lg p-6 text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-10">
      <Toaster />
      <p className="text-lg font-semibold">Do you want to hire me?</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <Input
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <Input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Type your message here."
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 bg-blue-50 text-black py-2 px-4 rounded-lg disabled:opacity-50 hover:bg-gray-500 transition-colors"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      <p className="text-xs text-gray-300 text-center mt-2 px-2">
        Your request will be sent to my personal email and I will contact you
        for collaboration.
      </p>
    </section>
  );
});

export default HireMe;
