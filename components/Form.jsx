"use client";

import React, { useState, useEffect } from "react";
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({first: '', last:'', company: '', email: '', phone: '', date_time: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(newData => 
     ({...newData, [name]: value})
    )


  };
  return (
    <form
      className="max-w-2xl mx-auto p-6 bg-base-200"
      onSubmit={(e) => {
        e.preventDefault(); console.log(formData);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            name="first"
            value={formData.first}
            type="text"
            placeholder="First Name"
            className="w-full border rounded-md px-4 py-2 text-gray-400"
            onChange={handleChange}
            required
          />
          <span className="text-sm text-gray-400">First</span>
        </div>
        <div>
          <input
            name="last"
            value={formData.last}
            type="text"
            placeholder="Last Name"
            className="w-full border rounded-md px-4 py-2 text-gray-400"
            onChange={handleChange}
            required
          />
          <span className="text-sm text-gray-400">Last</span>
        </div>
      </div>

      <div className="mt-4">
        <input
          name="company"
          value={formData.company}
          type="text"
          placeholder="Company"
          className="w-full border rounded-md px-4 py-2 text-gray-400"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-4">
        <input
         name='email'
         value={formData.email}
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-md px-4 py-2 text-gray-400"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-4">
        <input
         name='phone'
         value={formData.phone}
          type="tel"
          placeholder="Phone"
          className="w-full border rounded-md px-4 py-2 text-gray-400"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-4">
        <input
         name='date_time'
         value={formData.date_time}
          type="text"
          placeholder="Preferred date and time for a conference call"
          className="w-full border rounded-md px-4 py-2 text-gray-400"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md hover:bg-orange-600 transition"
        >
          GET STARTED NOW
        </button>
      </div>
    </form>
  );
};

export default Form;
