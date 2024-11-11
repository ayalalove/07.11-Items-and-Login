



"use client";

import React, { useState } from "react";
import { z, ZodError } from "zod";

const LogIn = () => {
  const userSchema = z.object({
    idNumber: z.string().min(9, "ID must contain at least 9 characters"),
    firstName: z.string().min(2, "First name must contain at least 2 characters"),
    lastName: z.string().min(2, "Last name must contain at least 2 characters"),
    dateOfBirth: z.string().refine(
      (val) => !isNaN(Date.parse(val)) && new Date(val) <= new Date(),
      {
        message: "Date of birth must be in the past",
      }
    ),
    email: z.string().email("Invalid email"),
  });

  type FormData = z.infer<typeof userSchema>;

  const [formData, setFormData] = useState<FormData>({
    idNumber: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      userSchema.parse(formData);
      alert("User registered successfully!");
      setErrors({});
    } catch (err) {
      if (err instanceof ZodError) {
        const formattedErrors: Partial<Record<keyof FormData, string>> = {};
        err.errors.forEach((error) => {
          const path = error.path[0] as keyof FormData;
          formattedErrors[path] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    //   className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8"
    className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 pt-32"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Sign Up
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            ID Number:
          </label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.idNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LogIn;



