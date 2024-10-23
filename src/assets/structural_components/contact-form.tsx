
//React
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const [status, setStatus] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://traj-hub.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setStatus('Email sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('Failed to send email.');
        }
      } catch (error) {
        setStatus('Error sending email. Please try again later.');
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <div className="relative flex flex-col w-full h-full p-2 justify-around text-center ">
        <header className="flex self-center text-center text-xl text-gray-800 font-bold underline decoration-purple-700 ">
            Contact Me by E-mail.
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col w-full h-fit p-2">
          <div className="flex justify-between">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input aspect-[4/3]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    );
  };
  
  export default ContactForm;