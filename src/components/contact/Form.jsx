import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    text: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {
      fullName: "",
      emailAddress: "",
      text: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
      isValid = false;
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Please enter your email address.";
      isValid = false;
    } else if (!formData.emailAddress.includes("@")) {
      newErrors.emailAddress = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.text.trim()) {
      newErrors.text = "Please enter a message.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMessage("Your message has been sent successfully!");

      setFormData({
        fullName: "",
        emailAddress: "",
        subject: "",
        text: "",
      });

      setErrors({
        fullName: "",
        emailAddress: "",
        text: "",
      });
    } else {
      setSuccessMessage("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <Input
          type="text"
          name="fullName"
          placeholder="Name and surname"
          aria-label="Name and surname"
          value={formData.fullName}
          onChange={handleChange}
        />
        <div className="h-4">
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <Input
          type="email"
          name="emailAddress"
          placeholder="Email address"
          aria-label="Email address"
          value={formData.emailAddress}
          onChange={handleChange}
        />
        <div className="h-4">
          {errors.emailAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>
          )}
        </div>

        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div>
        <textarea
          name="text"
          placeholder="Text"
          className="bg-transparent border-b w-full placeholder-lightDark py-2 text-lg font-julee"
          rows="4"
          aria-label="Text"
          value={formData.text}
          onChange={handleChange}
        ></textarea>
        <div className="h-4">
          {errors.text && (
            <p className="text-red-500 text-sm mt-1">{errors.text}</p>
          )}
        </div>
      </div>

      <Button buttonName="Send" />

      {successMessage && (
        <div className="text-green-500 text-sm mt-4">{successMessage}</div>
      )}
    </form>
  );
}
