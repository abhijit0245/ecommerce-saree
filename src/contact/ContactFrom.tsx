import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

// Simple Company Logo
const Logo: React.FC = () => {
  return (
    <div className="text-center text-[#1a237e] font-bold text-4xl mb-6 tracking-wide">
      Udupi Saree Empower
    </div>
  );
};

const ContactUs: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      subject: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter your name"),
      email: Yup.string().email("Invalid email").required("Enter your email"),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid contact")
        .required("Enter contact number"),
      subject: Yup.string().required("Enter subject"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:5454/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setSuccessMessage("Message sent successfully!");
          resetForm();
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
      }
    },
  });

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Logo Section */}
      <div className="mb-10">
        <Logo />
        <Typography variant="h6" className="text-center text-gray-600 mb-4">
          Please fill out the form below and we'll get back to you soon.
        </Typography>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-lg shadow-md border-0 bg-white p-8 rounded-lg">
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                id="contact"
                name="contact"
                label="Contact Number"
                value={formik.values.contact}
                onChange={formik.handleChange}
                error={formik.touched.contact && Boolean(formik.errors.contact)}
                helperText={formik.touched.contact && formik.errors.contact}
              />

              <TextField
                fullWidth
                id="subject"
                name="subject"
                label="Enter subject"
                multiline
                minRows={3}
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />

              <Button
                color="primary"
                variant="contained"
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Message (auto disappears) */}
      {successMessage && (
        <div
          className="fixed top-5 right-5 p-4 text-white rounded-md shadow-md transition-opacity duration-300 ease-in-out"
          style={{ zIndex: 9999, backgroundColor: "#00927c" }}
        >
          {successMessage}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-600">
        <Typography variant="body2">
          © {new Date().getFullYear()} Udupi Saree Empower. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default ContactUs;
