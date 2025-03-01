import React, { useState } from "react";
import Normalnav from "./Normalnav";
const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    communication: "Email",
    service: "Inquiry Call (Free)",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully! ✅");
        setMessage("Email sent successfully! ✅");
        setTimeout(() => {
       //   window.history.back(); // Redirects to the previous page
        }, 1000);
      } else {
        setMessage(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>  <Normalnav/>
    <br />
    <div className="p-8 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">

      <h2 className="text-2xl font-bold text-emerald-400 mb-6">Book a Consultation</h2>
      
      {message && <p className="text-center text-white bg-gray-700 p-2 rounded mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-1">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400" 
            placeholder="Enter your full name" required />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400" 
            placeholder="Enter your email" required />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400" 
            placeholder="Enter your phone number" required />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Preferred Means of Communication</label>
          <select name="communication" value={formData.communication} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400">
            <option>Email</option>
            <option>WhatsApp</option>
            <option>Phone Call</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Select a Service</label>
          <select name="service" value={formData.service} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400">
            <option>Inquiry Call (Free)</option>
            <option>Consult with Agent - $100 (60 min)</option>
            <option>Consult with CEO - $999 (60 min)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Select Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:ring-emerald-400" required />
        </div>

        <button type="submit" 
          className="w-full bg-emerald-500 text-black font-semibold py-2 rounded-md hover:bg-emerald-600 transition"
          disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ConsultationForm;
