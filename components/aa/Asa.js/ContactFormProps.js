import React, { useState } from 'react';

const ContactFormProps = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    lastName: "",
    firstName: "",
    attachment: "",
    agreed: agreed,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmitValidate = (e,props) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.message.trim()) {
      newErrors.push('Kenttä "Vapaanmuotoinen teksti" puuttuu');
    }
    if (!formData.name.trim()) {
      newErrors.push('Kenttä "Nimi tai Yritys" puuttuu');
    }
    if (!formData.phoneNumber.trim() && !formData.email.trim()) {
      newErrors.push('Kenttä "Puhelinnumero tai Sähköposti" puuttuu');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      handleSubmitSave(e, props);
    }
  };

  const handleSubmitSave = async (e, isQuick) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isQuick ? "/api/contactwadelmas" : "/api/contactwadelma";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  // Return values as props
  return {
    agreed,
    loading,
    submitted,
    errors,
    formData,
    handleInputChange,
    handleSubmitValidate,
    handleSubmitSave
  };
};

export default ContactFormProps;
