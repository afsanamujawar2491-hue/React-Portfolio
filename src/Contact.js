
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = `mailto:afsanamujawar2491@gmail.com?subject=Portfolio Contact&body=${form.message}`;
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
<<<<<<< HEAD
      <h2>Contact Me</h2>
=======
      <h2>Let’s connect and turn ideas into reality</h2>
>>>>>>> 82ba57e965c4db5f24733b8ec4519f231c92d328
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows="5" onChange={handleChange} required />
        <button type="submit" className="button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
